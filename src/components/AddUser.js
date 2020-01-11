import React, { Component } from 'react'
import posed from 'react-pose';


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
        visible : false
    }

    changeVisiblity = (e) => {
        this.setState({
            visible : !this.state.visible
        });
    }

    render() {

        const {visible} = this.state;
        return (
            <div className = "col-md-8 mb-4">

                <button onClick = {this.changeVisiblity} className = "btn btn-dark btn-block bm-1">{visible ? "Hide Form" : "Show Form"}</button>

                <Animation pose = {visible ? "visible" : "hidden"}>

                <div className = "card">
                    <div className = "card-header">
                        <h4>Add User Form</h4>
                    </div>

                    <div className = "card-body">
                        <form>
                            <div className = "from-group">
                                <label htmlFor = "name">Name</label>
                                <input
                                type = "text"
                                name = "name"
                                id = "id"
                                placeholder = "Enter name"
                                className = "form-control"
                                
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
export default AddUser;