import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Hello Parent'
        }

        this.greetParentHandler = this.greetParentHandler.bind(this)
    }
    
    //=========================================================
    //EVENT BINDING APPROCH 3
    //ReCheck your constructor Bind
    // greetParentHandler() {
    //     alert(`${this.state.parentName}`)
    // }

    greetParentHandler (childName, action){
        alert(`${this.state.parentName} from --- ${childName} --- Message: ${action}`)
    }

    //=========================================================
    //EVENT BINDING APPROCH 4
    // greetParentHandler = () => {
    //     alert(`${this.state.parentName}`)
    // }

    // greetParentHandler = (childName, action) => {
    //     alert(`${this.state.parentName} from --- ${childName} --- Message: ${action}`)
    // }

    
    render() {
        return (
            <div>
                <div className="componentName"><h1>ParentComponent Component</h1></div>
                <ChildComponent greetHandler={this.greetParentHandler}></ChildComponent>                
            </div>
        )
    }
}

export default ParentComponent
