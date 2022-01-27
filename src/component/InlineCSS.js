import React from 'react'

const inlineCssHeading = {
    fontSize: '50px',
    color: 'blue'
}

function InlineCSS() {
    return (
        <div>
            <div className="componentName"><h1>InlineCSS Component</h1></div>

            <h1 style={inlineCssHeading}>Inline</h1>
        </div>
    )
}

export default InlineCSS
