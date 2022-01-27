import React from 'react'
import '../css/myStyles.css'

function Stylesheet({primary}) {
    const className = primary ? 'primary' : ''
    return (
        <div>
            <div className="componentName"><h1>Stylesheet Component</h1></div>

             <h1 className={className}>StyleSheet</h1>
        </div>
    )
}

export default Stylesheet


// README 
// Styling and CSS Basics
// 1. Stylesheet
// 2. Inline 
// 3. CSS Module 