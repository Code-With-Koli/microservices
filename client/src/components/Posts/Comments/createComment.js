import React, { useState } from 'react';
import axios from 'axios'

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
    } catch (error) {
      console.log(error)
    }
    setContent('')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add a Comment</label>
          <input value={content} onChange={(e) => setContent(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </>
  )
};
export default CreateComment
