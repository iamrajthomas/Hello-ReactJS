import React, { useState } from 'react'

function HookCounterFour() {

    const [items, setItems] = useState([]);

    const handleAddItems = () => {
        // setItems([...items, {
        //     id: items.length,
        //     value: Math.floor(Math.random() * 10) + 1 
        // }])

        setItems((prevItems) => {
            return [...prevItems, {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }]
        })

    }

    const handleRemoveAllItems = () => {
        setItems([]);
    }

    return (
        <div>
            <div className="componentName"><h1>HookCounterFour Component</h1></div>
            <div><button onClick={handleAddItems}>Add Item</button></div>
            {
                items.length > 0 &&
                <div><button onClick={handleRemoveAllItems}>Remove All Item</button></div>
            }
            <ul>
                {
                    items.map(item => {
                        return  <li key={item.id}>ID: {item.id} ---- Value: {item.value}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default HookCounterFour
