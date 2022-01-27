import React, { useState } from 'react'
import HookCounterThreeWithUseEffect from './HookCounterThreeWithUseEffect'

function HookCounterThreeWithUseEffectContainer() {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <div className="componentName"><h1>HookCounterThreeWithUseEffectContainer Component</h1></div>
            <button type="button" onClick={() => setDisplay(!display)}>Toggle Display</button>

            {
                display && 
               <HookCounterThreeWithUseEffect></HookCounterThreeWithUseEffect>
            }
        </div>
    )
}

export default HookCounterThreeWithUseEffectContainer

// ERROR:
// Warning: Can't perform a React state update on an unmounted component. 
// This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

// This is because HookCounterThreeWithUseEffect is unmounted but the mouseover event is not cancelled while unmounting the component
