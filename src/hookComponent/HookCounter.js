import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);

    return (
            <div>
                <div className="componentName"><h1>HookCounter Component</h1></div>
                <button onClick={() => setCount(count + 1)}>Clicked {count} Times</button>
            </div>
    )
}

export default HookCounter


// README 
// useState hook lets you use state in a functional Component
// The useState hook returns an array with 2 elements
// The first value is the current value of the state and the second value is the setter function 
