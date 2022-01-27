import React, { useReducer } from 'react'
import ComponentP from './ComponentP'
import ComponentQ from './ComponentQ'
import ComponentR from './ComponentR'

export const TechContext = React.createContext();

const initialState = {
    counter: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case 'increment' : return { ...state, counter: state.counter + action.value }
        case 'decrement' : return { ...state, counter: state.counter - action.value }
        case 'reset' : return initialState
        default : return state
    }
}

function HookCounterFourWithUseReducerWithuseContext() {


    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <TechContext.Provider 
            value={{ countState: count, countDispatch: dispatch }}>
            <div>
                <div className="componentName"><h1>HookCounterFourWithUseReducerWithuseContext Component [useReducer with useContext]</h1></div>
                <div>Counter In Root: {count.counter}</div>
                <ComponentP></ComponentP>
                <ComponentQ></ComponentQ>
                <ComponentR></ComponentR>
            </div>
        </TechContext.Provider>
    )
}

export default HookCounterFourWithUseReducerWithuseContext
