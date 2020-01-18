import React, { Component } from 'react'

class Test extends Component {
    constructor (props) {
        super(props);
        this.state = {
            a:10
        }
        console.log ("constructor");
    }

    componentDidMount (){
        console.log("componentDidMount")
        //api istekleri
        this.setState({
            a : 20
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("Component Did Update");
    }

    
    //didmountcomponent de yapılan setState işleminden sonra
    // tekrar render edilmesini istemiyorsak shouldComponent
    // içinde false döndürürüz. ve tekrar render edilmez
    /*

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return false;
    }
    
    */
    render() {
        console.log("render");
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;