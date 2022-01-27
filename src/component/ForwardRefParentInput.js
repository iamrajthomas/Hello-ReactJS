import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

class ForwardRefParentInput extends Component {
    constructor(props) {
        super(props)
    
        this.nativeInputRef = React.createRef()

    }

    handleAchieveForwardRef = () => {
        this.nativeInputRef.current.focus();
        alert(`Native Input Value Using Ref: ${this.nativeInputRef.current.value}`)
    }
    
    render() {
        return (
            <div>
                <div className="componentName"><h1>ForwardRefParentInput Component</h1></div>
                <ForwardRefInput ref={this.nativeInputRef}></ForwardRefInput>
                <div>
                    <button onClick={this.handleAchieveForwardRef}>Click Me To Achieve Forward Ref</button>
                </div>
            </div>
        )
    }
}

export default ForwardRefParentInput
