import React, { useReducer, useEffect } from 'react'
import axios  from 'axios'

const initialState = {
    loading: true,
    error: '',
    users: []
}

const reducer = (state, action) => {
    switch(action.type){
    case 'FETCH_SUCCESS': 
        return { loading: false, error: '', users: action.payload }

    case 'FETCH_ERROR': 
        return { loading: false, error: 'Some Error Occured', users: [] }

    default: 
        return state
    }
}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            dispatch({ type: 'FETCH_SUCCESS', payload: res.data.data })
        })
        .catch(error => {
            dispatch({ type: 'FETCH_ERROR' })
        })

        return () => {
            
        }
    }, [])
    
    return (
        <div>
            <div className="componentName"><h1>DataFetchingTwo Component [using useReducer with UseEffect]</h1></div>
            <div>{ state.error ? state.error : null }</div>
            <div>{ state.loading ? 'loading' : null }</div>
            <div>
                <ul>
                {
                        state.users.map((u, index) => {
                            return <li key={index}>{u.first_name}</li>
                        })
                    }
                </ul>
            </div>

            { JSON.stringify(state.users) }
        </div>
    )
}

export default DataFetchingTwo
