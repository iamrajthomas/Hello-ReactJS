import React, { Component } from 'react'

class RenderPropsCounter extends Component {

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
                <div className="componentName"><h1>RenderPropsCounter Component [used with render prop]</h1></div>
                {this.props.render(this.state.count, this.handleIncreamentCount)}
            </div>
        )
    }
}

export default RenderPropsCounter
