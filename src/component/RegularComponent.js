import React, { Component } from 'react'

class RegularComponent extends Component {
    render() {
        console.log('Regular Component render')

        return (
            <div>
                <div className="componentName"><h1>Regular Component</h1></div>
                <p>Props : {this.props.name}</p>
            </div>
        )
    }
}

export default RegularComponent
