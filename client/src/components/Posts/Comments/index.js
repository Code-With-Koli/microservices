import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([])

  const getComments = async (postId) => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
    // console.log("comments:", res.data);
    setComments(res.data);
  }

  useEffect(() => {
    getComments(postId);
  }, [postId])

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>
  })
  return (
    <ul>
      {renderedComments}
    </ul>
  )
}

export default Comments
