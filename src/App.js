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
