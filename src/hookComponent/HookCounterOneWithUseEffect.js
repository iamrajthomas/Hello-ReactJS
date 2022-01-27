import React, { useState, useEffect } from 'react'

function HookCounterOneWithUseEffect() {

    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = `Clicked ${count} Times`
    })

    const handleIncrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <div className="componentName"><h1>HookCounterOneWithUseEffect Component</h1></div>
            <div>
                Counter: {count}
            </div>
            <div>
                <button onClick={handleIncrementCount}>Click Here To Increment Count On Document Title</button>
            </div>
        </div>
    )
}

export default HookCounterOneWithUseEffect


// README 
// useEffect replaces ComponentDidMount, ComponentWillUpdate and ComponentWillUnMount Lifecycle methods in functional component 
// it accepts a fuction which gets exceuted on every component load/ render