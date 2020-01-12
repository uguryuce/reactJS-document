import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";
import { color } from 'style-value-types';


class User extends Component {
    
   onClickEvet = (e) =>{
    this.setState({
        isVisible :!this.state.isVisible

    })
}


    

    onClickEvet(e){
        console.log(this);
    }

    onClickEvet2(number,e){
        console.log(number);
    }

    onDeleteUser = (dispatch ,e) => {
        const {id} = this.props;
        //Consumer Dispatch

        dispatch({type : "DELETE_USER", payload:id});

    }

    constructor (props){
        super(props);

        this.state = {
            isVisible :false
        }

        //bind etmek için kullandığımız costructor
        this.onClickEvet = this.onClickEvet.bind(this);


    }
    render() {

        const {name,department,salary} = this.props;
        const {isVisible} = this.state;

        return (
        <UserConsumer>
            {
                value => {
                    const {dispatch} = value;

                    return (
                        <div className = "col-md-8 mb-4">
                            <div className ="card" style = {isVisible ? {backgroundColor : "#dd4c4f", color : "#fff"} : null}>
                                <div className = "card-header d-flex justify-content-between">
                                    <h4 className = "d-inline " onClick = {this.onClickEvet}>{this.props.name}</h4>
                                    <i className = "fa fa-trash-alt" style = {{cursor:"pointer"}}  onClick = {this.onDeleteUser.bind(this, dispatch)}></i>
                                </div>
            
                                {
                                    isVisible ? 
            
                                <div className = "card-body">
                                    <p className = "card-text">Maaş : {salary}</p> 
                                    <p className = "card-text">Department : {department}</p> 
                                    
                                </div> : null
            
                                }
                            </div>
                        </div>
                    )
                }
            }

        </UserConsumer>
        )
        /*
        

        */
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
    id : PropTypes.string.isRequired

}
export default User;