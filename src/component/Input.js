import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef();

    }

    focusInput() {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <div className="componentName"><h1>Input Component</h1></div>
                <div>
                    <label>Input: </label>
                    <input type="text" ref={this.inputRef}/>
                </div>
            </div>
        )
    }
}

export default Input
