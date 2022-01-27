import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <div className="componentName"><h1>HookCounterThree Component</h1></div>

            <div>
                <input type="text" placeholder="First Name" value={name.firstName} onChange={(event) => setName({...name, firstName: event.target.value})} />
            </div>
            <div>
                <input type="text" placeholder="Last Name"  value={name.lastName} onChange={(event) => setName({...name, lastName: event.target.value})} />
            </div>
            <div>
                <label>FirstName: {name.firstName} -- LastName: {name.lastName} </label>
            </div>

            <div>
                <label>{JSON.stringify(name)}</label>
            </div>
        </div>
    )
}

export default HookCounterThree
