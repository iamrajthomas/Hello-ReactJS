import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Rajesh Thomas',
        }
        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log('LifecycleB getSnapshotBeforeUpdate ');
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate');
    }
    
    render() {
        console.log('LifecycleB render');

        return (
            <div>
                <div className="componentName"><h1>LifecycleB Component</h1></div>
                <p>Check Console Logs For This LifecycleB Component Output</p>               
            </div>
        )
    }
}

export default LifecycleB
