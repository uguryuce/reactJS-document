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