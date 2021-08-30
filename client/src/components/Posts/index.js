import React, { useState, useEffect } from 'react'
import { CreatePosts } from './createPosts';
import * as api from "../../api"
import CreateComment from './Comments/createComment';
import Comments from './Comments';

export const Posts = () => {
  const [posts, setPosts] = useState({})

  const getPosts = async () => {
    const res = await api.fetchPosts();
    // console.log("fetch posts: ", res.data)
    setPosts(res.data)
  }

  useEffect(() => {
    getPosts();
  }, [])

  // console.log(posts)
  //! converting the object to an array by calling Object.values(posts);

  const renderedPosts = Object.values(posts).map(post => {
    return (<div key={post.id} className="card mb-2 p-2">
      <h3>{post.title}</h3>
      <Comments postId={post.id} />
      <hr />
      <CreateComment postId={post.id} />
    </div>)
  })
  return (
    <div className="col-4">
      <CreatePosts />
      <hr />
      <h1>Posts</h1>
      <div>{renderedPosts}</div>
    </div>

  )
}