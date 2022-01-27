import React from 'react'

// function ForwardRefInput() {
//     return (
//         <div>
//             <div className="componentName"><h1>ForwardRefInput Component</h1></div>
//             <div>
//                 <label>Your Input: </label>
//                 <input />
//             </div>
//         </div>
//     )
// }

// Step : 1
// Re-write the same function with an Arrow Function
// const ForwardRefInput = () => {
//     return (
//         <div>
//             <div className="componentName"><h1>ForwardRefInput Component</h1></div>
//             <div>
//                 <label>Your Input: </label>
//                 <input />
//             </div>
//         </div>
//     )
// }

// Step : 2
//Make use of React.forwardRef method and pass the complete only body of the function to it and add props and ref as parameters
const ForwardRefInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <div className="componentName"><h1>ForwardRefInput Component</h1></div>
            <div>
                <label>Your Input: </label>
                <input ref={ref} />
            </div>
        </div>
    )
})

export default ForwardRefInput
