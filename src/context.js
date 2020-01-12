import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider ,Consumer
const reducer = (state, action) => {
    switch(action.type) {
        case "DELETE_USER" :
            return {
                ...state,
                users : state.users.filter(user => action.payload !== user.id)
            }

        case "ADD_USER":
            return {
                ...state,
                users : [...state.users,action.payload]
            }

        default :
            return state
            
    }
}

export class UserProvider extends Component {
    state = {
        users : [
          {
            id : "uniqid-1",
            name : "Uğur Yüce",
            salary : "5000",
            department : "Bilişim"
          },
          {
            id : "uniqid-2",
            name : "İlto",
            salary : "4000",
            department : "Yazılım"
          },
          {
            id : "uniqid-3",
            name : "Selo",
            salary : "7000",
            department : "Üretim"
          }
        ],
        dispatch : action => {
            this.setState(state => reducer(state, action))
        }
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
