import React, { useContext } from 'react'
import { FrameworkContext, TokenContext } from './HookComponentP'
import HookComponentS from './HookComponentS'

function HookComponentR() {

    const token = useContext(TokenContext);
    const framework = useContext(FrameworkContext);

    return (
        <div>
            <div className="componentName"><h1>HookComponentR Component</h1></div>
            <div>
                <div>Token via TokenContext: {token}</div>
                <div>Framework via FrameworkContext: {framework}</div>
            </div>
            <HookComponentS></HookComponentS>

        </div>
    )
}

export default HookComponentR
