import React, { Component } from 'react'

class RenderPropsCounter2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    handleIncreamentCount = () =>{
        this.setState((prevState) => ({
            count: prevState.count + this.props.increamentWith 
        }))
    }

    render() {

        return (
            <div>
                <div className="componentName"><h1>RenderPropsCounter2 Component [used with children prop]</h1></div>
                {this.props.children(this.state.count, this.handleIncreamentCount)}
            </div>
        )
    }
}

export default RenderPropsCounter2
