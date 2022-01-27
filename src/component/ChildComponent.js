import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <div className="componentName"><h1>Child Component</h1></div>
             <div>
                {/* <button onClick={props.greetHandler}> Click Here From Child Component </button> */}
                <button onClick={()=> props.greetHandler('Child Component', 'Learning React!! Good Job!!')}> Click Here From Child Component </button>
            </div>
        </div>
    )
}

export default ChildComponent
