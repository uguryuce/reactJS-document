import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    /* default props isteğe bağlı burada static olarak da tanımlanabilir

    static defaultProps = {
        name : "İsim bilgisi yok",
        salary : "Maaş bilgisi yok",
        department : "Departman bilgisi yok"
    }
    
    */
    render() {

        const {name,department,salary} = this.props;
        return (
            <div className = "col-md-8 mb-4">
                <div classNamecard>
                    <div className = "card-header d-flex justify-content-between">
                        <h4 className = "d-inline ">{this.props.name}</h4>
                        <i className = "fa fa-trash-alt" style = {{cursor:"pointer"}}></i>
                    </div>

                    <div className = "card-body">
                        <p className = "card-text">Maaş : {salary}</p> 
                        <p className = "card-text">Department : {department}</p> 
                    </div>
                </div>
            </div>
        )
    }
}

User.defaultProps = {
    name : "İsim bilgisi yok",
    salary : "Maaş bilgisi yok",
    department : "Departman bilgisi yok"
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,

}
export default User;


// Destructing yöntemi ile
/* 
import React, { Component } from 'react'

class User extends Component {
    render() {

        const {name,department,salary} = this.props;

        
        return (
            <div>
                <ul>
                    <li>İsim: {name}</li>
                    <li>Departman : {department}</li>
                    <li>Maaş: {salary}</li>
                </ul>
            </div>
        )
    }
}
export default User;
        
*/