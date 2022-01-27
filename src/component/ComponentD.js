import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentD extends Component {
    render() {
        return (
            <div>
                <div className="componentName"><h1>ComponentD Component [Context]</h1></div>
                <ComponentE></ComponentE>
            </div>
        )
    }
}

export default ComponentD
