import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 100
};
const reducer = (state, action) => {
    console.log(state, action)
    switch(action.type){
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return  { ...state, firstCounter: state.firstCounter - action.value };
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            return  { ...state, secondCounter: state.secondCounter - action.value };
        case 'reset':
            return { firstCounter: initialState.firstCounter, secondCounter: initialState.secondCounter };
        default:
            return {...state};
    }
}

function HookCounterTwoWithUseReducer() {

    const [counter, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div className="componentName"><h1>HookCounterTwoWithUseReducer Component</h1></div>
            
            <div>
                <div>First Counter: {counter.firstCounter}</div>
                <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment By 5</button>
                <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement By 5</button>
                <button onClick={() => dispatch({type: 'reset' })}>Reset</button>
            </div>
            
            <div>
                <div>Secod Counter: {counter.secondCounter}</div>
                <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'increment2', value: 500})}>Increment By 500</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 500})}>Decrement By 500</button>
            </div>
        </div>
    )
}

export default HookCounterTwoWithUseReducer
