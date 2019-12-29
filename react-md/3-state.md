# State Nedir ve Statelerin Özellikleri

#### State Oluşturma
<br>
> App.js

```js
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import User from "./components/User";
import './App.css';


class App extends Component {
    render() {
      
      return (
        <div className="container">
          <Navbar title = "User App 2" />
          <hr/>
          <User
          name = "Uğur Yüce"
          department = "Bilişim"
          salary = "5000"
          />

          <User
          name = "Selamet Şamlı"
          department = "Bilişim"
          />
          
          
        </div>
      );
    }
}

export default App;

```

> Navbar.js

```js
import React from "react";
import PropTypes from "prop-types";

function Navbar(props){

    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default App"
}
export default Navbar;
```

> User.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    

    constructor (props){
        super(props);

        this.state = {
            isVisible :false
        }
    }
    render() {

        const {name,department,salary} = this.props;
        const {isVisible} = this.state;
        return (
            <div className = "col-md-8 mb-4">
                <div className ="card-body">
                    <div className = "card-header d-flex justify-content-between">
                        <h4 className = "d-inline ">{this.props.name}</h4>
                        <i className = "fa fa-trash-alt" style = {{cursor:"pointer"}}></i>
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
    department : PropTypes.string.isRequired,

}
export default User;



```

---

#### React Eventler

> App.js

```js
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import User from "./components/User";
import './App.css';


class App extends Component {
    render() {
      
      return (
        <div className="container">
          <Navbar title = "User App 2" />
          <hr/>
          <User
          name = "Uğur Yüce"
          department = "Bilişim"
          salary = "5000"
          />

          <User
          name = "Selamet Şamlı"
          department = "Bilişim"
          />
          
          
        </div>
      );
    }
}

export default App;

```

> Navbar.js

```js
import React from "react";
import PropTypes from "prop-types";

function Navbar(props){

    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default App"
}
export default Navbar;
```

> User.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    //bind etmek için ilk yöntem: fonksiyon tanımlanır sonra bind edilir 
    //örnekte kullandığımız yöntem de bu
    /*
    onClickEvet(e){
        console.log(this);
    }

    constructor (props){
        super(props);
        this.onClickEvet = this.onClickEvet.bind(this);
    }
    */

    //--------------------------------------------------------



    //bind için diğer yöntem - arrow function şeklinde yazılır bind etmeye gerek kalmaz
    /* 
    onClickEvet = (e) =>{
        console.log(this);
    }
    */


    

    onClickEvet(e){
        console.log(this);
    }

    onClickEvet2(number,e){
        console.log(number);
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
                        <i className = "fa fa-trash-alt" style = {{cursor:"pointer"}}  onClick = {this.onClickEvet2.bind(this,200)}></i>
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
    department : PropTypes.string.isRequired,

}
export default User;
```

---

#### Eventler ve State Değiştirme

> User.js +

```js
onClickEvet = (e) =>{
    this.setState({
        isVisible :!this.state.isVisible

    })
```

---

#### Componentler Arası İletişim

> App.js

```js
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import User from "./components/User";
import Users from "./components/Users";
import './App.css';


class App extends Component {

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
        <div className="container">
          <Navbar title = "User App 2" />
          <hr/>
          <Users users = {this.state.users} />
          
        </div>
      );
    }
}

export default App;

```

> Users.js

```js
import React, { Component } from 'react'
import User from "./User";

class Users extends Component {
    render() {
        const {users} = this.props;
        console.log(users);
        return (
            <div>
                {
                    users.map(user => {
                        return (
                            <User

                                key = {user.id}
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
export default Users;

```

> User.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    //bind etmek için ilk yöntem: fonksiyon tanımlanır sonra bind edilir 
    //örnekte kullandığımız yöntem de bu
    /*
    onClickEvet(e){
        console.log(this);
    }

    constructor (props){
        super(props);
        this.onClickEvet = this.onClickEvet.bind(this);
    }
    */

    //--------------------------------------------------------



    //bind için diğer yöntem - arrow function şeklinde yazılır bind etmeye gerek kalmaz
    /* 
    onClickEvet = (e) =>{
        console.log(this);
    }
    */

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
                        <i className = "fa fa-trash-alt" style = {{cursor:"pointer"}}  onClick = {this.onClickEvet2.bind(this,200)}></i>
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
    department : PropTypes.string.isRequired,

}
export default User;
```

>Navbar.js

```js
import React from "react";
import PropTypes from "prop-types";

function Navbar(props){

    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default App"
}
export default Navbar;
```

---

#### Kullanıcı Silme ve Componentlar Arası State İletişimi (Props Drillins)

> App.js

```js
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import User from "./components/User";
import Users from "./components/Users";
import './App.css';


class App extends Component {

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

  deleteUser = (id) => {
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })

  }
    render() {
      
      return (
        <div className="container">
          <Navbar title = "User App 2" />
          <hr/>
          <Users deleteUser = {this.deleteUser} users = {this.state.users} />
          
        </div>
      );
    }
}

export default App;

```

> Users.js

```js
import React, { Component } from 'react'
import User from "./User";
import PropTypes from 'prop-types'


class Users extends Component {
    render() {
        const {users , deleteUser} = this.props;
        console.log(users);
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
                                deleteUser = {deleteUser}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
Users.propTypes = {
    users : PropTypes.array.isRequired,
    deleteUser : PropTypes.func.isRequired
    
}
export default Users;

```

> User.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    //bind etmek için ilk yöntem: fonksiyon tanımlanır sonra bind edilir 
    //örnekte kullandığımız yöntem de bu
    /*
    onClickEvet(e){
        console.log(this);
    }

    constructor (props){
        super(props);
        this.onClickEvet = this.onClickEvet.bind(this);
    }
    */

    //--------------------------------------------------------



    //bind için diğer yöntem - arrow function şeklinde yazılır bind etmeye gerek kalmaz
    /* 
    onClickEvet = (e) =>{
        console.log(this);
    }
    */

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
        const {id , deleteUser} = this.props;
        deleteUser(id);

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
    department : PropTypes.string.isRequired,
    deleteUser : PropTypes.func.isRequired

}
export default User;
```

> Navbar.js

```js
import React from "react";
import PropTypes from "prop-types";

function Navbar(props){

    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default App"
}
export default Navbar;
```


































