import React, { useState } from 'react';
import * as api from "../../../api"

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createComment(postId, content)

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
