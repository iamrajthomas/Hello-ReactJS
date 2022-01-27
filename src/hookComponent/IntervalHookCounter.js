import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [counter, setCounter] = useState(0)

    const tick = () => {
        setCounter(counter + 1); //make sure you add this dependencies in useeffect with this approach 
        // setCounter((prevCounter) => prevCounter + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [counter])

    return (
        <div>
            <div className="componentName"><h1>IntervalHookCounter Component</h1></div>
            <h2>
                HookCounter: {counter}
            </h2>
        </div>
    )
}

export default IntervalHookCounter
