# React Router

<b> Kurulum </b>

``` npm install react-router-dom ```

## Router - Route - Link - Switch - Refactoring

> App.js

```js
import React, { Component } from 'react';
import Navbar from "./layout/Navbar";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from  "react-router-dom";
import NotFound from "./pages/NotFound";
import Contribute from './pages/Contribute';



class App extends Component {
      
    render() {
      
      return (
        <Router>
          <div className="container">

          <Navbar title = "User App 2" />
          <hr/>

          <Switch>

          <Route exact path = "/" component = {Users} />
          <Route exact path = "/add" component = {AddUser} />
          <Route exact path = "/github" component = {Contribute} />
          <Route component = {NotFound} />


          </Switch>






          </div>
        </Router>
      );
    }
}

export default App;
```

> + NoutFound.js

```js
import React from 'react'

function NotFound() {
    return (
        <div>
            404 Not Found
        </div>
    )
}

export default NotFound;
```

> + Contribute.hs

```js
import React from 'react'

function Contribute() {
    return (
        <div>
            <h3>Project Files and Contribute to Project</h3>
            <p>you can download full project from <a target = "_blank" href = "https://github.com/uguryuce">this</a>  github page
            </p>
            
        </div>
    )
}
export default Contribute;
```

> Navbar.js

```js
import React from "react";
import PropTypes from "prop-types";
import {Link} from  "react-router-dom";

function Navbar(props){

    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/add">Add User</Link>
                </li>

                <li>
                    <Link to = "/github">Project Files </Link>
                </li>
            </ul>
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




