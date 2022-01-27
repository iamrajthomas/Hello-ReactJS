import React from 'react'
import { TokenContext, FrameworkContext } from './HookComponentP'

function HookComponentS() {


    return (
        <TokenContext.Consumer>
            {
                token => { 
                    return(
                        <FrameworkContext.Consumer>
                            {
                                framework => { 
                                    return(
                                        <div>
                                            <div className="componentName"><h1>HookComponentS Component</h1></div>
                                            <div>Token via Context: {token}</div>
                                            <div>Framework via Context: {framework}</div>
                                        </div>
                                    ) 
                                }
                            }
                        </FrameworkContext.Consumer>
                    )
                    
                }
            }
        </TokenContext.Consumer>

        // <TokenContext.Consumer>
        // {
        //     token => {
        //         return(
        //             <div>
        //                 <div className="componentName"><h1>HookComponentS Component</h1></div>
        //                 <div>Token: {token}</div>
        //             </div>
        //         )
        //     }   
        // }
        // </TokenContext.Consumer>
    )
}

export default HookComponentS
