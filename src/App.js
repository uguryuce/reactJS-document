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
