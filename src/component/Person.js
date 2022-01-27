import React from 'react'

function Person({person}) {
    if(person === null || person === undefined || person.length === 0)
    return null;
    
    // return (
    //     <div>
    //         <div className="componentName"><h1>Person Component</h1></div>
    //         <h1>{person.name} -- {person.age} -- {person.skill}</h1>
    //     </div>
    // )

    const { name, age, skill } = person;
    return (
        <div>
            <div className="componentName"><h1>Person Component</h1></div>
            <h1>{name} -- {age} -- {skill}</h1>
        </div>
    )
}

export default Person
