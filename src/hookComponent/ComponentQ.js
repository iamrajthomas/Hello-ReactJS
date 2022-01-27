import React, { useContext } from 'react'
import { TechContext } from './HookCounterFourWithUseReducerWithuseContext'


function ComponentQ() {

    const techContext = useContext(TechContext);

    return (
        <div>
            <div className="componentName"><h1>ComponentQ Component</h1></div>
            <div>Counter From Context: {techContext.countState.counter}</div>
        </div>
    )
}

export default ComponentQ
