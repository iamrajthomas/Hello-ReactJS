import React, { Component } from 'react'

export class IntervalClassCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            counter: 0         
        }
    }
    

    tick = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    }

    componentDidMount(){
       this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {


        return (
            <div>
            <div className="componentName"><h1>IntervalClassCounter Component</h1></div>
            <h2>
                ClassCounter: {this.state.counter}
            </h2>
                
            </div>
        )
    }
}

export default IntervalClassCounter
