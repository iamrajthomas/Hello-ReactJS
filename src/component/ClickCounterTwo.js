import React, { Component } from 'react'

class ClickCounterTwo extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // handleIncreamentCount = () =>{
    //     this.setState((prevState) => ({
    //         count: prevState.count + 1 
    //     }))
    // }
    
    render() {
        // const { count } = this.state;
        
        const { count, handleIncreamentCount } = this.props;

        return (
            <div>
                <div className="componentName"><h1>ClickCounterTwo Component</h1></div>
                <button onClick={handleIncreamentCount}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
