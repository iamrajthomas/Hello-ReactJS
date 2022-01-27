import React from 'react'
import HookComponentQ from './HookComponentQ'

export const TokenContext = React.createContext();
export const FrameworkContext = React.createContext();

function HookComponentP() {
    return (
        <div>
            <div className="componentName"><h1>HookComponentP Component</h1></div>
            
            <TokenContext.Provider value="ABCDEFGH_Token">
                <FrameworkContext.Provider value="MERN_Framework">
                    <HookComponentQ></HookComponentQ>
                </FrameworkContext.Provider>
            </TokenContext.Provider>
        </div>
    )
}

export default HookComponentP 
