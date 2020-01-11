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

#### Action Nedir ?

```
Context Apide, Provider ve Componentımızın içinde hangi işlemin gerçekleşeceğini ve hangi veriler gönderileceğini belirten JS objesidir. 2 türlü property barındırır. 

* <b>Type : </b> Hangi işlemin gerçekleşeceği (örneğin bir ekleme(add) olayı
* <b>Payload : </b> Hangi verinin gönderileceği

```

#### Dispatch Nedir ?

```
Actionları contexte göndermekle görevli bir Javascript fonksiyonudur. Provider state inin içinde bulunur.
```

#### Reducer Nedir ?

```
Gelen action ın tipine göre state i değiştirecek işlemlerden sorumlu bir JS fonksiyonudur.
```


