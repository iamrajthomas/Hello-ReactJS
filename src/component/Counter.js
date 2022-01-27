import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increament(){
        // this.setState({
        //     count : this.state.count + 1
        // }, ()=> {
        //     console.log('Calback State Value: ' + this.state.count);
        // })   
        
        this.setState((prevState, props)=> ({
            count: prevState.count + 1
        }), ()=> {
            console.log('Calback State Value: ' + this.state.count);
        })
    }

    increamentFive(){
        this.increament();
        this.increament();
        this.increament();
        this.increament();
        this.increament();
    }

    render() {
        return (
            <div>
                <div className="componentName"><h1>Counter Component</h1></div>

               <div><h1>Counter: {this.state.count}</h1></div>
               <button onClick={()=> this.increamentFive()}>Increament</button>
            </div>
        )
    }
}

export default Counter
