import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    constructor(props) {
        super(props)

        this.InputComponentRef = React.createRef();
    }
    
    handleClick = () => {
        this.InputComponentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <div className="componentName"><h1>FocusInput Component</h1></div>
                <Input ref={this.InputComponentRef}></Input>
                <div>
                    <button onClick={this.handleClick}>Focus The Input Component Using Ref</button>
                </div>
            </div>
        )
    }
}

export default FocusInput

// ReadMe
// Accessing Child Component method using ref from parent component is possible in Class Component only.
// It is not possible in functional component

