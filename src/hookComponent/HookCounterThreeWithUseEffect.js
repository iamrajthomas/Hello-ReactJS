import React, { useState, useEffect } from 'react'

function HookCounterThreeWithUseEffect() {

    const [x, setX] = useState('');
    const [y, setY] = useState('');

    const logMousePosition = (event) => {
        console.log('logMousePosition invoked!!')
        setX(event.clientX);
        setY(event.clientY);
    }

    useEffect(() => {
        console.log('useEffect invoked!!')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("HookCounterThreeWithUseEffect Component Unmounting Now.");
            window.removeEventListener('mousemove', logMousePosition);
            console.log("Cancelled all subscription for HookCounterThreeWithUseEffect Component.");

        }
    }, [])

    return (
        <div>
            <div className="componentName"><h1>HookCounterThreeWithUseEffect Component</h1></div>
            <div>
                Co-odrinates ===  X: {x} Y: {y}
            </div>
        </div>
    )
}

export default HookCounterThreeWithUseEffect


// README 
// Conditionally run effects 
// 2nd parameter is an array, if any value is passed it will only execute if tat value is modified