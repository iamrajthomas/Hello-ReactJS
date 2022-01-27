import React from 'react'

function NameList() {

    const Names = ['Raj', 'Deep', 'Nitesh', 'CB', 'Rajeev']

    // const NameData = Names.map(name => <h2 key={name}>{name}</h2>)
    const NameData = Names.map((name, index) => <h2 key={index}>{index} -- {name}</h2>)
    return (
        <div>
            <div className="componentName"><h1>NameList Component</h1></div>
            {
                // Names.map(name => <h2>{name}</h2>)
                NameData
            }            
        </div>
    )
}

export default NameList

// ReadMe
// When to use Index as Key
// 1. The item in your list donot have unique id
// 2. The list is static and wont change 
// 3. The list will never be re-ordered and filtered 
// 4. Avoid using index and keep it as last Option, rather make some unique ids and use it using npm package or some hashing 