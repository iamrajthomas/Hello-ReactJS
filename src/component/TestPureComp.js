import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

class TestPureComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Raj Thomas'
        }
    }
    
    componentDidMount(){
        //Uncomment this to check console output for differentiating Pure and Regular Component

        // setInterval(()=>{ 
        //     this.setState({ name: 'Raj Thomas'})
        // }, 2000)
    }

    render() {
        console.log('**************** TestPure Component render ****************')
        return (
            <div>
                <div className="componentName"><h1>Parent Component</h1></div>
                <PureComp name={this.state.name}></PureComp>
                <RegularComponent name={this.state.name}></RegularComponent>
            </div>
        )
    }
}

export default TestPureComp
