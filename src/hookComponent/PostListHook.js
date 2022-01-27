import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PostListHook() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(url)
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])    

    return (
        <div>
            <div className="componentName"><h1>PostListHook Component</h1></div>
            <ul>
                { 
                    posts.map(post => {
                        return <li key={post.id}>{post.title}</li> 
                    })
                }
            </ul> 

        </div>
    )
}

export default PostListHook 
