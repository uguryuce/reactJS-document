# Stage Management - Context Api

#### Provider ve Consumer Oluşturma

> +context.js

```js
import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider ,Consumer

export class UserProvider extends Component {
    state = {
        users : [
          {
            id : 1,
            name : "Uğur Yüce",
            salary : "5000",
            department : "Bilişim"
          },
          {
            id : 2,
            name : "İlteriş Keskin",
            salary : "4000",
            department : "Yazılım"
          },
          {
            id : 3,
            name : "Ugi",
            salary : "7000",
            department : "Üretim"
          }
        ]
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

#### Provider ve Consumer Kullanımı

* context api yapısına uygun kullanıma geçildi

> edit- context.js

```js
import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider ,Consumer

export class UserProvider extends Component {
    state = {
        users : [
          {
            id : 1,
            name : "Uğur Yüce",
            salary : "5000",
            department : "Bilişim"
          },
          {
            id : 2,
            name : "İlto",
            salary : "4000",
            department : "Yazılım"
          },
          {
            id : 3,
            name : "Selo",
            salary : "7000",
            department : "Üretim"
          }
        ]
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

> edit- App.js

```js
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import User from "./components/User";
import Users from "./components/Users";
import './App.css';


class App extends Component {

    render() {
      
      return (
        <div className="container">
          <Navbar title = "User App 2" />
          <hr/>
          <Users/>
          
        </div>
      );
    }
}

export default App;

```

> edit- Users.js

```js
import React, { Component } from 'react'
import User from "./User";
import UserConsumer from "../context";


class Users extends Component {
    render() {

        return(
            <UserConsumer>
                {
                    value => {
                        const {users} = value;

                        return (
                            <div>
                                {
                                    users.map(user => {
                                        return (
                                            <User
                
                                                key = {user.id}
                                                id = {user.id}
                                                name = {user.name}
                                                salary = {user.salary}
                                                department = {user.department}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )

    }
}

export default Users;

```

> edit- index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {UserProvider} from "./context";

ReactDOM.render(
    <UserProvider>
        <App/>
    </UserProvider>
    ,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

> edit- User.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'


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

    onDeleteUser = (e) => {
        // const {id} = this.props;
        //Consumer Dispatch

    }

    constructor (props){
        super(props);

        this.state = {
            isVisible :false
        }

        //bind etmek için kullandığımız costructor
        this.onClickEvet = this.onClickEvet.bind(this);


    }
    render() {

        const {name,department,salary} = this.props;
        const {isVisible} = this.state;
        return (
            <div className = "col-md-8 mb-4">
                <div className ="card-body">
                    <div className = "card-header d-flex justify-content-between">
                        <h4 className = "d-inline " onClick = {this.onClickEvet}>{this.props.name}</h4>
                        <i className = "fa fa-trash-alt" style = {{cursor:"pointer"}}  onClick = {this.onDeleteUser}></i>
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

User.defaultProps = {
    name : "İsim bilgisi yok",
    salary : "Maaş bilgisi yok",
    department : "Departman bilgisi yok"
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired

}
export default User;
```

---

###### Action Nedir ?

```
Context Apide, Provider ve Componentımızın içinde hangi işlemin gerçekleşeceğini ve hangi veriler gönderileceğini belirten JS objesidir. 2 türlü property barındırır. 

* <b>Type : </b> Hangi işlemin gerçekleşeceği (örneğin bir ekleme(add) olayı
* <b>Payload : </b> Hangi verinin gönderileceği

```

###### Dispatch Nedir ?

```
Actionları contexte göndermekle görevli bir Javascript fonksiyonudur. Provider state inin içinde bulunur.
```

###### Reducer Nedir ?

```
Gelen action ın tipine göre state i değiştirecek işlemlerden sorumlu bir JS fonksiyonudur.
```

 ---

 #### Action, Reducer ve Dispatch Kullanımı

 > context.js

 ```js
import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider ,Consumer
const reducer = (state, action) => {
    switch(action.type) {
        case "DELETE_USER" :
            return {
                ...state,
                users : state.users.filter(user => action.payload !== user.id)
            }

        default :
            return state
            
    }
}

export class UserProvider extends Component {
    state = {
        users : [
          {
            id : 1,
            name : "Uğur Yüce",
            salary : "5000",
            department : "Bilişim"
          },
          {
            id : 2,
            name : "İlto",
            salary : "4000",
            department : "Yazılım"
          },
          {
            id : 3,
            name : "Selo",
            salary : "7000",
            department : "Üretim"
          }
        ],
        dispatch : action => {
            this.setState(state => reducer(state, action))
        }
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

> User.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";


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

    onDeleteUser = (dispatch ,e) => {
        const {id} = this.props;
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
                            <div className ="card-body">
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
    department : PropTypes.string.isRequired

}
export default User;
```

---

#### Kullanıcı Ekleme Formu

> + AddUser.js

```js
import React, { Component } from 'react'

class AddUser extends Component {
    render() {
        return (
            <div className = "col-md-8 mb-4">

                <div className = "card">
                    <div className = "card-header">
                        <h4>Add User Form</h4>
                    </div>

                    <div className = "card-body">
                        <form>
                            <div className = "from-group">
                                <label htmlFor = "name">Name</label>
                                <input
                                type = "text"
                                name = "name"
                                id = "id"
                                placeholder = "Enter name"
                                class = "form-control"
                                
                                />
                            </div>

                            <div className = "from-group">
                                <label htmlFor = "department">Department</label>
                                <input
                                type = "text"
                                name = "department"
                                id = "department"
                                placeholder = "Enter department"
                                class = "form-control"
                                
                                />
                            </div>

                            <div className = "from-group">
                                <label htmlFor = "salary">Salary</label>
                                <input
                                type = "text"
                                name = "salary"
                                id = "id"
                                placeholder = "Enter salary"
                                class = "form-control"
                                
                                />
                            </div>

                            <button class = "btn btn-danger btn-block mt-3" type = "submit">Add</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default AddUser;
```

> App.js

```js
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import './App.css';


class App extends Component {

    render() {
      
      return (
        <div className="container">
          <Navbar title = "User App 2" />
          <hr/>
          <AddUser/>

          <Users/>
          
        </div>
      );
    }
}

export default App;

```

---

#### Pose Animation

> AddUser.js

```js
import React, { Component } from 'react'
import posed from 'react-pose';


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
        visible : false
    }

    changeVisiblity = (e) => {
        this.setState({
            visible : !this.state.visible
        });
    }

    render() {

        const {visible} = this.state;
        return (
            <div className = "col-md-8 mb-4">

                <button onClick = {this.changeVisiblity} className = "btn btn-dark btn-block bm-1">{visible ? "Hide Form" : "Show Form"}</button>

                <Animation pose = {visible ? "visible" : "hidden"}>

                <div className = "card">
                    <div className = "card-header">
                        <h4>Add User Form</h4>
                    </div>

                    <div className = "card-body">
                        <form>
                            <div className = "from-group">
                                <label htmlFor = "name">Name</label>
                                <input
                                type = "text"
                                name = "name"
                                id = "id"
                                placeholder = "Enter name"
                                className = "form-control"
                                
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
export default AddUser;
```

---

#### Dinamik CSS ve React

> Users.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";
import { color } from 'style-value-types';


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

    onDeleteUser = (dispatch ,e) => {
        const {id} = this.props;
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
    department : PropTypes.string.isRequired

}
export default User;
```

---

#### Controlled Components ve onChange Handler

> AddUser.js

```js
import React, { Component } from 'react'
import posed from 'react-pose';


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

    /*

    changeName = (e) => {
        this.setState({
            name : e.target.value
        })

    }

    changeDepartment = (e) => {
        this.setState({
            department : e.target.value
        })
    }

    changeSalary = (e) => {
        this.setState({
            salary : e.target.value
        })
    }

    */

    render() {

        const {visible, name, salary, department} = this.state;
        return (
            <div className = "col-md-8 mb-4">

                <button onClick = {this.changeVisiblity} className = "btn btn-dark btn-block bm-1">{visible ? "Hide Form" : "Show Form"}</button>

                <Animation pose = {visible ? "visible" : "hidden"}>

                <div className = "card">
                    <div className = "card-header">
                        <h4>Add User Form</h4>
                    </div>

                    <div className = "card-body">
                        <form>
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
export default AddUser;
```

---

#### Kullanıcı Ekleme ve Context Api (son)

> AddUser.js

```js
import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from "../context";
import User from './User';
var uniqid = require('uniqid');


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

    addUser = (dispatch, e) => {
        e.preventDefault();
        const {name, department, salary} = this.state;

        const newUser = {
            id : uniqid(),
            name : name,
            salary : salary,
            department : department
        }
        dispatch({type : "ADD_USER", payload : newUser});
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

> context.js

```js
import React, { Component } from 'react'

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
        users : [
          {
            id : "uniqid-1",
            name : "Uğur Yüce",
            salary : "5000",
            department : "Bilişim"
          },
          {
            id : "uniqid-2",
            name : "İlto",
            salary : "4000",
            department : "Yazılım"
          },
          {
            id : "uniqid-3",
            name : "Selo",
            salary : "7000",
            department : "Üretim"
          }
        ],
        dispatch : action => {
            this.setState(state => reducer(state, action))
        }
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

> User.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";
import { color } from 'style-value-types';


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

    onDeleteUser = (dispatch ,e) => {
        const {id} = this.props;
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
