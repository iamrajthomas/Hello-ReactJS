import React from 'react'

function MemoComponent({name}) {
    console.log('Memo Component render')

    return (
        <div>
                <div className="componentName"><h1>Memo Component</h1></div>
                <p>Props : {name}</p>
        </div>
    )
}

// export default MemoComponent
export default React.memo(MemoComponent)

// README 
// Memo
// 	- functional: memo component will not re-render if prevState/ prevProps are not chnaged compared to state and props
// 	- React.memo(yourFunctionalComponent)