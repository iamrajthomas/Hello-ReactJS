import React, { Component } from 'react'

class RefsComponent extends Component {

    constructor(props) {
        super(props)
    
        //Create Ref Approach
        this.inputRef = React.createRef();

        //Callback Ref Approach
        this.callbackRef = null;
        this.setCallbackRef = (element) => {
            this.callbackRef = element;
        }

    }

    componentDidMount(){
        //Create Ref Approach
        // console.log(this.inputRef)
        // this.inputRef.current.focus()

        //Create Ref Approach
        //console.log(this.callbackRef)
        if(this.callbackRef){
            this.callbackRef.focus();
        }
    }

    handleCheckValue = () => {
        alert(`Input Ref: ${this.inputRef.current.value} -- Callback Ref: ${this.callbackRef.value}`)
    }

    render() {
        return (
            <div>
                <div className="componentName"><h1>Refs Component</h1></div>
                <div>
                    <label>Input Ref: </label>
                    <input type="text" ref={this.inputRef} />

                </div>
                <div>
                    <label>Callback Ref: </label>
                    <input type="text" ref={this.setCallbackRef} />
                </div>
                
                <div>
                    <button onClick={this.handleCheckValue}>Check Ref Values</button>
                </div>

            </div>
        )
    }
}

export default RefsComponent
