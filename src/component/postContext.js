import React from "react";

const apiURL = 'https://jsonplaceholder.typicode.com/posts'
const PostContext = React.createContext(apiURL);

const PostProvider = PostContext.Provider
const PostConsumer = PostContext.Consumer

export { PostProvider, PostConsumer }

export default PostContext
