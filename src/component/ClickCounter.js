import React, { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         hasError: false,
    //         count: 0
    //     }
    //     this.handleIncreamentCount = this.handleIncreamentCount.bind(this);
    // }
    
    // handleIncreamentCount() {

    //     this.setState((prevState) => ({
    //         count: prevState.count + 1
    //     }));
    // }

    render() {
        // const { count } = this.state;
        const { count, handleIncreamentCount } = this.props;

        return (
            <div>
                    <div className="componentName"><h1>ClickCounter Component [withCounter Higher Order Component]</h1></div>
                    <button onClick={handleIncreamentCount}>Clicked {count} Times</button>
                    <div><h1>ClickOwner: {this.props.clickOwner}</h1></div>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 100)


// README 
// Higher Order Component (HOC)
// const IronMan = withSuit(TonyStark)
// const EnhancedComponent = higherOrderComponent(OriginalComponent)
