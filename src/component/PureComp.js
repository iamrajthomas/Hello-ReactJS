import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure Component render')

        return (
            <div>
                <div className="componentName"><h1>Pure Component</h1></div>
                <p>Props : {this.props.name}</p>
            </div>
        )
    }
}

export default PureComp

// README 
// Pure Components
// 	- class: pure component will not re-render if prevState/ prevProps are not chnaged compared to state and props
// 	- snippet: rpce
// 	- Shalow Comparision (===) - Primitive [same value and same type] and Complex [both reference same exact object] 