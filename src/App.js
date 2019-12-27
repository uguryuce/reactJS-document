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
