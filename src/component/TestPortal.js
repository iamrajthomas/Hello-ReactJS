import React, { Component } from 'react'
import Portal from './Portal'

export class TestPortal extends Component {

    handlePortalDemoClick = (message) =>{
        alert(`handlePortalDemoClick: ${message}`)
    }

    render() {
        return (
            <div>
                <div className="componentName"><h1>TestPortal Component</h1></div>
                <Portal onClick={this.handlePortalDemoClick}></Portal>              
            </div>
        )
    }
}

export default TestPortal
