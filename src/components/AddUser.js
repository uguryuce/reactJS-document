import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from "../context";
import User from './User';
import axios from "axios";


const Animation = posed.div({
    visible : {
        opacity : 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden : {
        opacity : 0,
        applyAtEnd : {
            display : "none"
        }
    }
});

class AddUser extends Component {

    state = {
        visible : false,
        name : "",
        department : "",
        salary : ""
    }

    changeVisiblity = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addUser = async (dispatch, e) => {
        e.preventDefault();
        const {name, department, salary} = this.state;

        const newUser = {
            
            name : name,
            salary : salary,
            department : department
        }

        const response = await axios.post(`http://localhost:3004/users`, newUser);




        dispatch({type : "ADD_USER", payload : response.data});
    }

    render() {

        const {visible, name, salary, department} = this.state;

        return <UserConsumer>
            {
                value => {

                    const {dispatch} = value;

                    return (
                        <div className = "col-md-8 mb-4">
            
                            <button onClick = {this.changeVisiblity} className = "btn btn-dark btn-block bm-1">{visible ? "Hide Form" : "Show Form"}</button>
            
                            <Animation pose = {visible ? "visible" : "hidden"}>
            
                            <div className = "card">
                                <div className = "card-header">
                                    <h4>Add User Form</h4>
                                </div>
            
                                <div className = "card-body">
                                    <form onSubmit = {this.addUser.bind(this, dispatch)}>
                                        <div className = "from-group">
                                            <label htmlFor = "name">Name</label>
                                            <input
                                            type = "text"
                                            name = "name"
                                            id = "id"
                                            placeholder = "Enter name"
                                            className = "form-control"
                                            value = {name}
                                            onChange = {this.changeInput}
                                            />
                                        </div>
            
                                        <div className = "from-group">
                                            <label htmlFor = "department">Department</label>
                                            <input
                                            type = "text"
                                            name = "department"
                                            id = "department"
                                            placeholder = "Enter department"
                                            className = "form-control"
                                            value = {department}
                                            onChange = {this.changeInput}
                                            
                                            />
                                        </div>
            
                                        <div className = "from-group">
                                            <label htmlFor = "salary">Salary</label>
                                            <input
                                            type = "text"
                                            name = "salary"
                                            id = "id"
                                            placeholder = "Enter salary"
                                            className = "form-control"
                                            value = {salary}
                                            onChange = {this.changeInput}
                                            
                                            />
                                        </div>
            
                                        <button className = "btn btn-danger btn-block mt-3" type = "submit">Add</button>
                                    </form>
                                </div>
                            </div>
                            </Animation>
                        </div>
                    )

                }
            }
        </UserConsumer>



        
    }
}
export default AddUser;