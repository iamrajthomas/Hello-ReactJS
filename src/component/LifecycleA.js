import React, { Component } from 'react'

import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Rajesh Thomas'
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate');
    }

    handleChangeState = () => {
        this.setState({
            name: 'RT'
        })
    }

    //Unmounting
    componentWillUnmount(){
        //console.log('LifecycleA componentWillUnmount');
    }

    
    //Error Handling
    static getDerivedStateFromError(error){
        console.log('LifecycleA getDerivedStateFromError');
    }

    componentDidCatch(error, info){
        console.log('LifecycleA componentDidCatch');
    }
    
    render() {
        console.log('LifecycleA render');

        return (
            <div>
                <div className="componentName"><h1>LifecycleA Component</h1></div>
                <p>Check Console Logs For This LifecycleA Component Output</p>
                <button onClick={this.handleChangeState}>Change State</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA


// README
// Component Lifecycle Methods - Introduction 
// 	- Mounting 
// 	- Updating 
// 	- UnMounting 
// 	- Error Handling 

// 	Mounting
// 	 - constructor 
// 	 - static getDerivedStateFromProps
// 	 - render 
// 	 - componentDidMount
	 
// 	Updating
// 	 - static getDerivedStateFromProps
// 	 - shouldComponentUpdate 
// 	 - render 
// 	 - getSnapshotBeforeUpdate 
// 	 - componentDidUpdate

// 	Unmounting 
// 	 - componentDidUnmount
	 
// 	Error Handling
// 	 - static getDerivedStateFromError
// 	 - componentDidCatch 