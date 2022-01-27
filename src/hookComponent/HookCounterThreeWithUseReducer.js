import React, { useReducer } from 'react'

const initialState ={
    value: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case 'increment': 
            return { ...state, value: state.value + action.value }
        case 'decrement': 
            return { ...state, value: state.value - action.value }
        case 'reset': 
            return { ...state, value: initialState.value }
       default: 
            return { ...state }
    }
}

function HookCounterThreeWithUseReducer() {

    const [counter, dispatch] = useReducer(reducer, initialState);
    const [counterTwo, dispatchTwo] = useReducer(reducer, initialState);
    
    return (
        <div>
            <div className="componentName"><h1>HookCounterThreeWithUseReducer Component [Multiple useReducers]</h1></div>
            
            <div>
                <div>First Counter: {counter.value}</div>
                <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment By 5</button>
                <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement By 5</button>
                <button onClick={() => dispatch({type: 'reset' })}>Reset</button>
            </div>
            
            <div>
                <div>Secod Counter: {counterTwo.value}</div>
                <button onClick={() => dispatchTwo({type: 'increment', value: 1})}>Increment</button>
                <button onClick={() => dispatchTwo({type: 'decrement', value: 1})}>Decrement</button>
                <button onClick={() => dispatchTwo({type: 'increment', value: 500})}>Increment By 500</button>
                <button onClick={() => dispatchTwo({type: 'decrement', value: 500})}>Decrement By 500</button>
                <button onClick={() => dispatchTwo({type: 'reset' })}>Reset</button>

            </div>
        </div>
    )
}

export default HookCounterThreeWithUseReducer
