import React, { Component } from 'react'

class AddUser extends Component {
    render() {
        return (
            <div className = "col-md-8 mb-4">

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
                                class = "form-control"
                                
                                />
                            </div>

                            <div className = "from-group">
                                <label htmlFor = "department">Department</label>
                                <input
                                type = "text"
                                name = "department"
                                id = "department"
                                placeholder = "Enter department"
                                class = "form-control"
                                
                                />
                            </div>

                            <div className = "from-group">
                                <label htmlFor = "salary">Salary</label>
                                <input
                                type = "text"
                                name = "salary"
                                id = "id"
                                placeholder = "Enter salary"
                                class = "form-control"
                                
                                />
                            </div>

                            <button class = "btn btn-danger btn-block mt-3" type = "submit">Add</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default AddUser;