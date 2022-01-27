import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello...........'
        }

        // Approach - 3 
        // Bind the function on the constructor and call the handler without () 
        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler(){
    //     // this.setState({
    //     //     message: 'How Are You!!!!!!!!!!!!!!!!'
    //     // })

    //     this.setState((prevState, props)=> ({
    //         message: prevState.message === 'Hello...........' ? 'How Are You!!!!!!!!!!!!!!!!' : 'Hello...........'
    //     }),
    //     ()=>{

    //     })

    //     console.log(this);
    // }

    clickHandler = () => {

        //     // this.setState({
        //     message: 'How Are You!!!!!!!!!!!!!!!!'
        // })

        this.setState((prevState, props) => ({
            message: prevState.message === 'Hello...........' ? 'How Are You!!!!!!!!!!!!!!!!' : 'Hello...........'
        }),
        ()=>{

        })

        console.log(this);
    }
    
    render() {
        return (
            <div>
                <div className="componentName"><h1>EventBind Component</h1></div>

                <div><h2>{this.state.message}</h2></div>
                {/* This will not work */}
                {/* ERROR MESSAGE: Uncaught TypeError: Cannot read properties of undefined (reading 'setState') AND this: undefined */}
                {/* <button onClick={this.clickHandler}>Click Here EventBind To Chnage Message</button> */}
                
                {/* Approach - 1 */}
                {/* This has perf implications in case of child components to rerender again on every call and new bind will happen */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click Here EventBind To Chnage Message</button>  */}

                {/* Approach - 2 */}
                {/* This has perf implications in case of child components to rerender again */}
                {/* <button onClick={() => this.clickHandler() }>Click Here EventBind To Chnage Message</button>  */}
                
                {/* Approach - 3 */}
                {/* Bind the function on the constructor and call the handler without () */}
                {/* React Official Doc Recommendation */}
                {/* <button onClick={this.clickHandler}>Click Here EventBind To Chnage Message</button>  */}
                
                {/* Approach - 4 */}
                {/* clickHandler with an Arrow Function (class property approach) and this.clickHandler without () */}
                <button onClick={this.clickHandler}>Click Here EventBind To Change Message</button> 

            </div>
        )
    }
}

export default EventBind

// ReadME:
// There are 4 approaches to EventBind
// 1. onClick={this.clickHandler.bind(this)}
// 2. onClick={() => this.clickHandler}
// 3. onClick={this.clickHandler} and in constructor: this.clickHandler = this.clickHandler.bind(this)
// 4. onClick={() => this.clickHandler} and create handler as an arrow function (class property approach)
