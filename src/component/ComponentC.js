import React, { Component } from 'react'
import ComponentD from './ComponentD'

class ComponentC extends Component {
    render() {
        return (
            <div>
                <div className="componentName"><h1>ComponentC Component [Context]</h1></div>
                <ComponentD></ComponentD>
            </div>
        )
    }
}

export default ComponentC
