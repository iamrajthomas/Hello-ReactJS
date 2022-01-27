import React from 'react'

class MessageWithState extends React.Component {

    constructor(){
        super();
        this.state = {
            message: 'Hello Boy!!',
            count: 0
        }
    }

    changeMessage(){

        this.setState({
            message: this.state.count < 10 ? 'Thank you for subscribing!!' : 'Hello Boy!!',
            count: this.state.count < 10 ? this.state.count + 1 : 0
        })
    }

    // render(){
    //     return (
    //         <div>
    //             <h1>{this.state.message} </h1>
    //             {
    //                 this.state.count > 0  && 
    //                 <h1>{this.state.count } </h1>
    //             }
    //             <button onClick={()=> this.changeMessage()}>Subscribe</button>
    //         </div>
    //     )
    // }

    render(){
        const { message, count } = this.state;
        return (
            <div>
                <div className="componentName"><h1>MessageWithState Component</h1></div>

                <h1>{message} </h1>
                {
                    count > 0  && 
                    <h1>{count} </h1>
                }
                <button onClick={()=> this.changeMessage()}>Subscribe and Increament</button>
            </div>
        )
    }

}


export default MessageWithState