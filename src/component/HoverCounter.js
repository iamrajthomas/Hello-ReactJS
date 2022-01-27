import React, { Component } from 'react'
import withCounter from './withCounter';

class HoverCounter extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         hasError: false,
    //         count: 0
    //     }
    // }

    // handleIncreamentCount = () => {
    //     this.setState((prevState) => ({
    //         count: prevState.count + 1
    //     }))
    // }
    

    render() {
        // const { count } = this.state;
        const { count, handleIncreamentCount } = this.props;
        

        return (
            <div>
                    <div className="componentName"><h1>HoverCounter Component [withCounter Higher Order Component]</h1></div>
                    <h2 onMouseOver={handleIncreamentCount}>Hovered {count} Times</h2>
                    <div><h1>HoveredBy: {this.props.hoveredBy}</h1></div>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)
