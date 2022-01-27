import React from 'react'
import ReactDOM from 'react-dom'


// function PortalDemo(props) {
//     function handleClick(){
//         props.onClick('hello from portal demo');
//     }

//     return (
//         <div>
//             <div className="componentName"><h1>PortalDemo Component</h1></div>
//                 <p>Objective: This component needs to be rendered under portal-root on the DOM</p>
//                 <button onClick={handleClick}>ClickMe</button>              
//         </div>
//     )
// }

function Portal(props) {
    function handleClick(){
        props.onClick('hello from portal demo');
    }

    return ReactDOM.createPortal(
        <div>
            <div className="componentName"><h1>Portal Component</h1></div>
                <p>Objective: This component needs to be rendered under portal-root on the DOM</p>
                <button onClick={handleClick}>ClickMe In Portal Demo And Alert Will Show on Test Portal</button>              
        </div>,
        document.getElementById('portal-root')
    )
}

export default Portal

// README:
// - Portal is used for placing a component out of the root node on DOM. 
// - index.html: Create a div with id as portal-root.
// - Create a component with ReactDOM.createPortal() which takes 2 parameters [import ReactDOM from 'react-dom']. 
// - First parameter is the JSX or the component which has to be rendered and second parameter is the DOM Node.