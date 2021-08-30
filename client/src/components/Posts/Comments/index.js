import React, { useState, useEffect } from 'react';
import * as api from "../../../api"

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([])

  const getComments = async (postId) => {
    try {
      const res = await api.fetchComments(postId)
      console.log("comments:", res.data);
      setComments(res.data);
    } catch (error) {
      console.log(error)
    }
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
