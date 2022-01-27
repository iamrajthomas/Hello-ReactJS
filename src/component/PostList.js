import React, { Component } from 'react'
import axios from 'axios'
import PostContext, { PostConsumer } from './postContext';

class PostList extends Component {

    static contextType = PostContext;

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             hasError : false
        }
    }

    componentDidMount(){
        // const url = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(this.context)
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ hasError: true })
            })
    }
    
    render() {
        const { posts, hasError } = this.state;
        const postRender = posts.length > 0 ? posts.map(post => <div key={post.id}><b>Title: </b>{post.title}</div>) : null
        const errorRender = hasError ? <div>Error While Fetching Data</div> : null
        return (
            <PostConsumer>
                {
                    (apiURL) => {
                        
                        return(
                            <div>
                                <div className="componentName"><h1>PostList Component</h1></div>
                                API URL: { apiURL }
                                { postRender }
                                { errorRender }
                            </div> 
                        )
                    }
                }
            </PostConsumer>

        )
    }
}

// PostList.contextType = PostContext

export default PostList


// README
// npm install axios
