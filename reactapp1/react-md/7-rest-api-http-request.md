# Rest Api - Get Request

<b> Json Server Kurulum için </b>

``` npm install -g json-server ```

<b> Başlatmak için </b>

``` json-server --watch api/db.json --port 3004 ```

<b> Kütüphane Kurulumu </b>

``` npm install axios ```

> context.js

```js
import React, { Component } from 'react'
import axios from "axios";

const UserContext = React.createContext();
//Provider ,Consumer
const reducer = (state, action) => {
    switch(action.type) {
        case "DELETE_USER" :
            return {
                ...state,
                users : state.users.filter(user => action.payload !== user.id)
            }

        case "ADD_USER":
            return {
                ...state,
                users : [...state.users,action.payload]
            }

        default :
            return state
            
    }
}

export class UserProvider extends Component {
    state = {
        users : [],
        dispatch : action => {
            this.setState(state => reducer(state, action))
        }
      }

    componentDidMount = async () => {
        const response = await axios.get("http://localhost:3004/users")
        this.setState({
            users : response.data
        })
    }

    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
```

> AddUser.js

```js
import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from "../context";
import User from './User';
import axios from "axios";


const Animation = posed.div({
    visible : {
        opacity : 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden : {
        opacity : 0,
        applyAtEnd : {
            display : "none"
        }
    }
});

class AddUser extends Component {

    state = {
        visible : false,
        name : "",
        department : "",
        salary : ""
    }

    changeVisiblity = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addUser = async (dispatch, e) => {
        e.preventDefault();
        const {name, department, salary} = this.state;

        const newUser = {
            
            name : name,
            salary : salary,
            department : department
        }

        const response = await axios.post(`http://localhost:3004/users`, newUser);




        dispatch({type : "ADD_USER", payload : response.data});
    }

    render() {

        const {visible, name, salary, department} = this.state;

        return <UserConsumer>
            {
                value => {

                    const {dispatch} = value;

                    return (
                        <div className = "col-md-8 mb-4">
            
                            <button onClick = {this.changeVisiblity} className = "btn btn-dark btn-block bm-1">{visible ? "Hide Form" : "Show Form"}</button>
            
                            <Animation pose = {visible ? "visible" : "hidden"}>
            
                            <div className = "card">
                                <div className = "card-header">
                                    <h4>Add User Form</h4>
                                </div>
            
                                <div className = "card-body">
                                    <form onSubmit = {this.addUser.bind(this, dispatch)}>
                                        <div className = "from-group">
                                            <label htmlFor = "name">Name</label>
                                            <input
                                            type = "text"
                                            name = "name"
                                            id = "id"
                                            placeholder = "Enter name"
                                            className = "form-control"
                                            value = {name}
                                            onChange = {this.changeInput}
                                            />
                                        </div>
            
                                        <div className = "from-group">
                                            <label htmlFor = "department">Department</label>
                                            <input
                                            type = "text"
                                            name = "department"
                                            id = "department"
                                            placeholder = "Enter department"
                                            className = "form-control"
                                            value = {department}
                                            onChange = {this.changeInput}
                                            
                                            />
                                        </div>
            
                                        <div className = "from-group">
                                            <label htmlFor = "salary">Salary</label>
                                            <input
                                            type = "text"
                                            name = "salary"
                                            id = "id"
                                            placeholder = "Enter salary"
                                            className = "form-control"
                                            value = {salary}
                                            onChange = {this.changeInput}
                                            
                                            />
                                        </div>
            
                                        <button className = "btn btn-danger btn-block mt-3" type = "submit">Add</button>
                                    </form>
                                </div>
                            </div>
                            </Animation>
                        </div>
                    )

                }
            }
        </UserConsumer>



        
    }
}
export default AddUser;
``` 

> + api -> db.json

```js
{
  "users": [
    {
      "id": "uniqid-1",
      "name": "Uğur Yüce",
      "salary": "5000",
      "department": "Bilişim"
    },
    {
      "id": "uniqid-3",
      "name": "Selo",
      "salary": "7000",
      "department": "Üretim"
    },
    {
      "name": "merabalar",
      "salary": "3000",
      "department": "aq",
      "id": "6_ItX1q"
    }
  ]
}
```

> User.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";
import { color } from 'style-value-types';
import axios from "axios";


class User extends Component {
    
   onClickEvet = (e) =>{
    this.setState({
        isVisible :!this.state.isVisible

    })
}


    

    onClickEvet(e){
        console.log(this);
    }

    onClickEvet2(number,e){
        console.log(number);
    }

    onDeleteUser = async (dispatch ,e) => {
        const {id} = this.props;

        // Delete Request
        await axios.delete(`http://localhost:3004/users/${id}`);

        //Consumer Dispatch
        dispatch({type : "DELETE_USER", payload:id});

    }

    constructor (props){
        super(props);

        this.state = {
            isVisible :false
        }

        //bind etmek için kullandığımız costructor
        this.onClickEvet = this.onClickEvet.bind(this);


    }

    // sayfada kaldırma/silme işlemlerinden hemen önce

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render() {

        const {name,department,salary} = this.props;
        const {isVisible} = this.state;

        return (
        <UserConsumer>
            {
                value => {
                    const {dispatch} = value;

                    return (
                        <div className = "col-md-8 mb-4">
                            <div className ="card" style = {isVisible ? {backgroundColor : "#dd4c4f", color : "#fff"} : null}>
                                <div className = "card-header d-flex justify-content-between">
                                    <h4 className = "d-inline " onClick = {this.onClickEvet}>{this.props.name}</h4>
                                    <i className = "fa fa-trash-alt" style = {{cursor:"pointer"}}  onClick = {this.onDeleteUser.bind(this, dispatch)}></i>
                                </div>
            
                                {
                                    isVisible ? 
            
                                <div className = "card-body">
                                    <p className = "card-text">Maaş : {salary}</p> 
                                    <p className = "card-text">Department : {department}</p> 
                                    
                                </div> : null
            
                                }
                            </div>
                        </div>
                    )
                }
            }

        </UserConsumer>
        )
        /*
        

        */
    }
}

User.defaultProps = {
    name : "İsim bilgisi yok",
    salary : "Maaş bilgisi yok",
    department : "Departman bilgisi yok"
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired

}
export default User;
``` 
