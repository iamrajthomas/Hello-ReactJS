import React from "react";

// export const GreetWithProps = (props) => {
//     return(
//         <div>
//             <h1>This is Greeting from {props.name} A.K.A. {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

// export const GreetWithProps = ({name, heroName, children}) => {
//     return(
//         <div>
//             <h1>This is Greeting from {name} A.K.A. {heroName}</h1>
//             {children}
//         </div>
//     )
// }

const GreetWithProps = (props) => {
    const { name, heroName, children } = props;
    return(
        <div>
            <div className="componentName"><h1>GreetWithProps Component</h1></div>
            <h1>This is Greeting from {name} A.K.A. {heroName}</h1>
            {children}
        </div>
    )
}

export default GreetWithProps 