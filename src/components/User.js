import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    //bind etmek için ilk yöntem: fonksiyon tanımlanır sonra bind edilir 
    //örnekte kullandığımız yöntem de bu
    /*
    onClickEvet(e){
        console.log(this);
    }

    constructor (props){
        super(props);
        this.onClickEvet = this.onClickEvet.bind(this);
    }
    */

    //--------------------------------------------------------



    //bind için diğer yöntem - arrow function şeklinde yazılır bind etmeye gerek kalmaz
    /* 
    onClickEvet = (e) =>{
        console.log(this);
    }
    */

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

    onDeleteUser = (e) => {
        const {id , deleteUser} = this.props;
        deleteUser(id);

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
            <div className = "col-md-8 mb-4">
                <div className ="card-body">
                    <div className = "card-header d-flex justify-content-between">
                        <h4 className = "d-inline " onClick = {this.onClickEvet}>{this.props.name}</h4>
                        <i className = "fa fa-trash-alt" style = {{cursor:"pointer"}}  onClick = {this.onDeleteUser}></i>
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

User.defaultProps = {
    name : "İsim bilgisi yok",
    salary : "Maaş bilgisi yok",
    department : "Departman bilgisi yok"
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    deleteUser : PropTypes.func.isRequired

}
export default User;