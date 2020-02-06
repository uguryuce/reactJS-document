import React, { Component } from 'react'
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.4.5/node_modules/redux';
import { decreaseCounter } from '../redux/actions/counterActions';
import {connect} from "react-redux"

class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(decreaseCounter());
                }}>
                    1 azalt
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(decreaseCounter,dispatch)}
}

export default connect (mapDispatchToProps)(DecreaseCounter);
