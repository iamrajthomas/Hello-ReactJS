import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment': 
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState;

        default:
            return state;
            
    }
}

function HookCounterOneWithUseReducer() {

    const [counter, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div className="componentName"><h1>HookCounterOneWithUseReducer Component</h1></div>
            <div>Counter: {counter}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reest</button>
        </div>
    )
}

export default HookCounterOneWithUseReducer
