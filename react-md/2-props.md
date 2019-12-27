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