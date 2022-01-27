import React, { Component } from 'react'

export class ConditionalRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }

        this.LogInHandler = this.LogInHandler.bind(this);
        this.LogOutHandler = this.LogOutHandler.bind(this);
    }
    
    LogInHandler(){
        this.setState((prevState, props) => ({
            isLoggedIn : true
        }),
        ()=> {

        })
    }

    LogOutHandler(){
        this.setState((prevState, props) => ({
            isLoggedIn : false
        }),
        ()=> {

        })
    }

    render() {

        // approach 1:
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div><h1>ConditionalRendering Component [approach 1]</h1></div>
        //             <div> <h1>Welcome User</h1></div>
        //             <button onClick={this.LogInHandler}>Login</button>
        //         <button onClick={this.LogOutHandler}>LogOut</button>
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             <div><h1>ConditionalRendering Component [approach 1]</h1></div>
        //             <div> <h1>Welcome Guest</h1></div>
        //             <button onClick={this.LogInHandler}>Login</button>
        //         <button onClick={this.LogOutHandler}>LogOut</button>
        //         </div>
        //     )
        // }

        // approach 2:
        // let displayDOM
        // if(this.state.isLoggedIn){
        //     displayDOM = <div> <h1>Welcome User</h1></div>
        // }
        // else{
        //     displayDOM = <div> <h1>Welcome Guest</h1></div>
        // }
        // return (
        //     <div>
        //         <div><h1>ConditionalRendering Component [approach 2]</h1></div>
        //         <div>{displayDOM}</div>
        //         <button onClick={this.LogInHandler}>Login</button>
        //         <button onClick={this.LogOutHandler}>LogOut</button>
        //     </div>
        // )

        // approach 3:
        // return (
        //     <div>
        //         <div><h1>ConditionalRendering Component [approach 3]</h1></div>

        //         {this.state.isLoggedIn ? <div> <h1>Welcome User</h1></div> : <div> <h1>Welcome Guest</h1></div>}

        //         <button onClick={this.LogInHandler}>Login</button>
        //         <button onClick={this.LogOutHandler}>LogOut</button>
        //     </div>
        // )

        // approach 4:
        return (
            <div>
                
            <div className="componentName"><h1>ConditionalRendering Component [approach 4]</h1></div>

            {
                this.state.isLoggedIn && 
                <div> 
                    <h1>Welcome User</h1>
                    <button onClick={this.LogOutHandler}>LogOut</button>
                </div>
            }
            {
                !this.state.isLoggedIn && 
                <div> 
                    <h1>Welcome Guest</h1>
                    <button onClick={this.LogInHandler}>Login</button>
                </div>
            }
            </div>
        )

        // return (
        //     <div>
        //         <h1>This is ConditionalRendering</h1>

        //         <div> <h1>Welcome User</h1></div>
        //         <div> <h1>Welcome Guest</h1></div>

        //         <button onClick={this.LogInHandler}>Login</button>
        //         <button onClick={this.LogOutHandler}>LogOut</button>
        //     </div>
        // )
    }
}

export default ConditionalRendering

// ReadMe:
// Approach 1: if/else
// Approach 2: element variables
// Approach 3: ternary
// Approach 4: short circuit operators
