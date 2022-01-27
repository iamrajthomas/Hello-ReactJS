import React from 'react'

import Person from './Person'

function PersonList() {

    const Persons = [
        {
            id: 1,
            name: 'Raj',
            age: 24,
            skill: 'Full Stack'
        },
        {
            id: 2,
            name: 'Deep',
            age: 25,
            skill: 'Makreting'
        },
        {
            id: 3,
            name: 'Nitesh',
            age: 26,
            skill: 'Software'
        },
        {
            id: 4,
            name: 'CB',
            age: 28,
            skill: 'Banking'
        },
        {
            id: 5,
            name: 'Rajeev',
            age: 20,
            skill: 'Medical'
        },
    ]

    const personData = Persons.map(person => (
        <Person key={person.id} person={person}></Person>
    ))

    return (
        <div>
            <div className="componentName"><h1>PersonList Component</h1></div>
            {
                personData
            }
        </div>
    )
}

export default PersonList
