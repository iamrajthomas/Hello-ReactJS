import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userForm : {
                 userId: '',
                 title: '',
                 body: ''
             }
        }
    }

    handleInputChange = (event) => {

        const { userForm } = this.state;

        userForm[event.target.name] = event.target.value;
        this.setState({userForm})
    }

    handleSubmit = (event) => {
        const apiURL= 'https://jsonplaceholder.typicode.com/posts';

        axios.post(apiURL, this.state.PostForm)
             .then(response => {
                 if(response.status === 200 || response.status === 201){
                     alert('Data Post Successfully. Resposne Returned POst Id: ' + response.data.id)
                 }
             })
             .catch(error => {
                alert(error)
             })
        console.log(this.state)
        event.preventDefault();
    }

    
    render() {

        const { userForm : { userId, title, body } } = this.state;

        return (
            <div>
                <div className="componentName"><h1>PostForm Component</h1></div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User Id: </label>
                        <input 
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Title: </label>
                        <input 
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Body: </label>
                        <input 
                            type="text"
                            name="body"
                            value={body}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <button type="submit">Submit UserData</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default PostForm


// README
// npm install axios
