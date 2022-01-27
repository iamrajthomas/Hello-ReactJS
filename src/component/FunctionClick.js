import React from 'react'

function FunctionClick() {


    function clickHandler(){
        console.log("React JS Way:: Click Me From FunctionClick")
    }


    return (
        <div>
            <div className="componentName"><h1>FunctionClick Component</h1></div>
            {/* In Vannila JS but won't work in React */}
            {/* ERROR MESSAGE: Warning: Invalid event handler property `onclick`. Did you mean `onClick`? */}
            {/* <button onclick="clickHandler">Click Me From FunctionClick</button> */} 


            {/* DONT: Never Add () in the handler, adding this will call the handler once and wont invoke when clicked */}
            {/* <button onClick={clickHandler()}>Click Me From FunctionClick</button> */}
            <button onClick={clickHandler}>Click Me From FunctionClick</button>
        </div>
    )
}

export default FunctionClick
