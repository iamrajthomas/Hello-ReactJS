import React, { useContext } from 'react'
import { TechContext } from './HookCounterFourWithUseReducerWithuseContext'

function ComponentR() {
    
    const techContext = useContext(TechContext);
    const { countDispatch } = techContext;

    return (
        <div>
            <div className="componentName"><h1>ComponentR Component </h1></div>
            <div>Counter From Context: {techContext.countState.counter}</div>
            <button onClick={() => countDispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => countDispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => countDispatch({type: 'increment', value: 5})}>Increment By 5</button>
            <button onClick={() => countDispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default ComponentR
