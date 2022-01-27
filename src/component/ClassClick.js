import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log("React JS Way:: Click Me From ClassClick")
    }

    render() {
        return (
            <div>
            <div className="componentName"><h1>ClassClick Component</h1></div>
            {/* In Vannila JS but won't work in React */}
            {/* ERROR MESSAGE: Warning: Invalid event handler property `onclick`. Did you mean `onClick`? */}
            {/* <button onclick="clickHandler">Click Me From ClassClick</button>  */}


            {/* DONT: Never Add () in the handler, adding this will call the handler once and wont invoke when clicked */}
            {/* <button onClick={this.clickHandler()}>Click Me From FunctionClick</button> */}
            <button onClick={this.clickHandler}>Click Me From ClassClick</button>
        </div>
        )
    }
}

export default ClassClick
