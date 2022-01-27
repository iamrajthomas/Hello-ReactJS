import React from 'react'

function CSSChild() {
    return (
        <div>
            <div className="componentName"><h1>CSSChild Component</h1></div>
            <h1 className='error'>Lets Try Normal CSS In CSS Child and the Error CSS class still works </h1>
        </div>
    )
}

export default CSSChild
