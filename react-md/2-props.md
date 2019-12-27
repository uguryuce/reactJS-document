# Props

#### Props Kullanımı

> App.js 

```js

import  React, { Component } from  'react';
import  Navbar  from  "./components/Navbar";
import  User  from  "./components/User";
import  './App.css';

class  App  extends  Component {

render() {
return (
<div  className="container">

<Navbar  title  =  "User App 2"  />
<hr/>

<User
name  =  "Uğur Yüce"
department  =  "Bilişim"
salary  =  "5000"
/>

<User
name  =  "Selamet Şamlı"
department  =  "Bilişim"
salary  =  "6000"
/>

</div>
);
}
}
export  default  App;
```

> User.js

```js
import  React, { Component } from  'react'
class  User  extends  Component {

render() {
return (
<div>
<ul>

<li>İsim: {this.props.name}</li>
<li>Departman : {this.props.department}</li>
<li>Maaş: {this.props.salary}</li>

</ul>
</div>
)
}
}
export  default  User;


//---------- Destructing yöntemi ile
/*
import React, { Component } from 'react'

class User extends Component {

render() {
const {name,department,salary} = this.props;

return (
<div>
<ul>

<li>İsim: {name}</li>
<li>Departman : {department}</li>
<li>Maaş: {salary}</li>

</ul>

</div>
)
}
}
export default User;
*/
```

```js
import  React  from  "react";

function  Navbar(props){

return (
<div>

<h3>{props.title}</h3>

</div>
)
}
export  default  Navbar;
```

---

#### Proptypes ve Default Props


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

> User.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    /* default props isteğe bağlı burada static olarak da tanımlanabilir

    static defaultProps = {
        name : "İsim bilgisi yok",
        salary : "Maaş bilgisi yok",
        department : "Departman bilgisi yok"
    }
    
    */
    render() {

        
        return (
            <div>
                <ul>
                    <li>İsim: {this.props.name}</li>
                    <li>Departman : {this.props.department}</li>
                    <li>Maaş: {this.props.salary}</li>
                </ul>
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


---

#### User Arayüzü

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

> User.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    /* default props isteğe bağlı burada static olarak da tanımlanabilir

    static defaultProps = {
        name : "İsim bilgisi yok",
        salary : "Maaş bilgisi yok",
        department : "Departman bilgisi yok"
    }
    
    */
    render() {

        const {name,department,salary} = this.props;
        return (
            <div className = "col-md-8 mb-4">
                <div classNamecard>
                    <div className = "card-header d-flex justify-content-between">
                        <h4 className = "d-inline ">{this.props.name}</h4>
                        <i className = "fa fa-trash-alt" style = {{cursor:"pointer"}}></i>
                    </div>

                    <div className = "card-body">
                        <p className = "card-text">Maaş : {salary}</p> 
                        <p className = "card-text">Department : {department}</p> 
                    </div>
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

> index.html +

```js
<!-- FONTAWESOME -->
    <script src="https://kit.fontawesome.com/b753f1f7f5.js" crossorigin="anonymous"></script>    <!-- BOOTSTRAP -->
    
```














































