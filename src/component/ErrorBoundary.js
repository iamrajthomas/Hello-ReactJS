import React, { Component } from 'react'
import '../css/appStyles.css'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            hasError: false
        }
    }
    

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }

    render() {

        if(this.state.hasError){
            return(
                <div>
                    <h1 className="error">Something Went Wrong!!! One or more component(s) broke!!</h1>
                </div>
            )
        }
        return (
            <div>
                <div className="componentName"><h1>ErrorBoundary Component</h1></div>
                {
                    this.props.children && 
                    <div>
                        {this.props.children}
                    </div>
                }
            </div>
        )
    }
}

export default ErrorBoundary
