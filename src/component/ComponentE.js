import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

    static contextType = UserContext
    render() {
        return (
            <div>
                <div className="componentName"><h1>ComponentE Component [Context]</h1></div>
                <p>UserName From Parent using ContextType: <b>{this.context}</b></p>
                <ComponentF></ComponentF>
            </div>
        )
    }
}

// ComponentE.contextType = UserContext
export default ComponentE


// README 
// ContextType Limitation
// 1. It only works with class component 
// 2. You can only subscribe to a single context using contextType 
