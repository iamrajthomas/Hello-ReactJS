import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PostHook() {

    const [post, setPost] = useState({});
    const [color, setColor] = useState('#66c4ff');
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`;
        axios.get(url)
            .then(res => {
                // console.log(res);
                setPost(res.data);
            })
            .catch(error =>{
                console.error(error)
                setPost(null);
            })
    }, [idFromButtonClick])

    const fetchPostData = () => {
        // setIdFromButtonClick(id);

        setIdFromButtonClick((PrevIdFromButtonClick) => { 
            return PrevIdFromButtonClick !== id ? id: PrevIdFromButtonClick
        })
    }

    return (
        <div>
            <div className="componentName"><h1>PostHook Component</h1></div>
            <div>
                <label>Pick A Color: </label>
                <input type="color" value={color} onChange={e => {setColor(e.target.value)}}/>
                <div>Color Hex Code: {color}</div>
            </div>
            <div>
                <label>Post ID: </label>
                <input type="number" value={id} onChange={event => { setId(event.target.value)}}/>
            </div>
            
            <button type="button" onClick={fetchPostData}>Fetch Post</button>
            {
                post &&
                <div><b>ID:</b> {post.id} ---- <b>Title:</b> {post.title}</div>
            }
        </div>
    )
}

export default PostHook