# Lifecycle

  

## Mounting

  * Constructor

  

> <b> componentDidMount </b>
  

## Updating

  

* New Props

*  setState()

* forceUpdate()

> <b> componentDidUpdate </b>
  

## Unmounting

  

<b> componentWillUnmount </b>

---

> test.js

```js
import  React, { Component } from  'react'

  

class  Test  extends  Component {

constructor (props) {

super(props);

this.state  = {

a:10

}

console.log ("constructor");

}

  

componentDidMount (){

console.log("componentDidMount")

//api istekleri

this.setState({

a :  20

})

}

  

componentDidUpdate  = (prevProps, prevState) => {

console.log("Component Did Update");

}

  

//didmountcomponent de yapılan setState işleminden sonra

// tekrar render edilmesini istemiyorsak shouldComponent

// içinde false döndürürüz. ve tekrar render edilmez

/*

  

shouldComponentUpdate(){

console.log("shouldComponentUpdate");

return false;

}

*/

render() {

console.log("render");

return (

<div>

</div>

)

}

}

export  default  Test;
```

> User.js

```js
// sayfada kaldırma/silme işlemlerinden hemen önce

componentWillUnmount(){

console.log("componentWillUnmount");

}
```

> App.js

```js
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import './App.css';
import Test from "./components/Test";


class App extends Component {

    render() {
      
      return (
        <div className="container">
          <Test test = "deneme" />
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
