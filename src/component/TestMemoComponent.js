import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

class TestMemoComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Raj Thomas'
       }
    }
    
    componentDidMount(){
        //Uncomment this to check console output for understanding Memo Component
        
        // setInterval(()=>{ 
        //     this.setState({ name: 'Raj Thomas'})
        // }, 2000)
    }

    render() {
        console.log('**************** TestMemo Component render ****************')
        return (
            <div>
                <div className="componentName"><h1>TestMemo Component</h1></div>
                <MemoComponent name={this.state.name}></MemoComponent>
            </div>
        )
    }
}

export default TestMemoComponent
