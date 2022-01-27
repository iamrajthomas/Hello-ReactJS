import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                setUsers(res.data.data)
                setLoading(false)
                setError('')
            })
            .catch(err => {
                setUsers([])
                setLoading(false)
                setError('Some Error Occured')
            })
    }, [])

    return (
        <div>
            <div className="componentName"><h1>DataFetchingOne Component [using useState with UseEffect]</h1></div>
            <div>{ error ? error : null }</div>
            <div>{ loading ? 'loading' : null }</div>
            <div>
                <ul>
                   {
                        users.map((u, index) => {
                            return <li key={index}>{u.first_name}</li>
                        })
                    }
                </ul>
            </div>

            { JSON.stringify(users) }
        </div>
    )
}

export default DataFetchingOne
