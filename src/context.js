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
