import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const handleIncrementByFive = () =>{
        for(let i = 1; i <= 5; i++){
            // setCount(count + 1); // Donot setCount Like This
            setCount((prevCount) => prevCount + 1) //Pass an arrow function with prevCount as it's parameter and update
        }
    }

    return (
        <div>
            <div className="componentName"><h1>HookCounterTwo Component</h1></div>
            <div>Count: {count}</div>
            <div><button onClick={() => setCount(initialCount)}>Reset</button></div>
            <div><button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button></div>
            <div><button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button></div>

            <div><button onClick={handleIncrementByFive}>Increment By 5</button></div>

    </div>
    )
}

export default HookCounterTwo
