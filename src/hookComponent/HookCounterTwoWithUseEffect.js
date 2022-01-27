import React, { useState, useEffect } from 'react'

function HookCounterTwoWithUseEffect() {

    const [count, setCount] = useState(0);
    const [name, setName] =  useState('');

    useEffect(() => {
        console.log('UseEffect Invoked')
        document.title = `Clicked ${count} Times`
    }, [count])

    const handleIncrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <div className="componentName"><h1>HookCounterTwoWithUseEffect Component</h1></div>
            <div>
                Counter: {count}
            </div>
            <div>
                <input type="text" valeu={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <button onClick={handleIncrementCount}>Click Here To Increment Count On Document Title</button>
            </div>
        </div>
    )
}

export default HookCounterTwoWithUseEffect


// README 
// Conditionally run effects 
// 2nd parameter is an array, if any value is passed it will only execute if tat value is modified