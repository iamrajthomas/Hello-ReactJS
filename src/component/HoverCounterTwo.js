import React, { Component } from 'react'

class HoverCounterTwo extends Component {

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
                <div>
                    <div className="componentName"><h1>HoverCounterTwo Component</h1></div>
                    <h2 onMouseOver={handleIncreamentCount}>Hovered {count} Times</h2>
                </div>
            </div>
        )
    }
}

export default HoverCounterTwo
