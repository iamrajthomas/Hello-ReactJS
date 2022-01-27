import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (userName) => {
                        return <div>
                                <div className="componentName"><h1>ComponentF Component [Context]</h1></div>
                                <p>UserName From Parent Without Passing Props: <b>{userName}</b></p>
                            </div>
                    }
                }
            </UserConsumer>

        )
    }
}

export default ComponentF
