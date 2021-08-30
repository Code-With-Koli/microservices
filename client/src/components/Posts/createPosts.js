import React, { useState } from 'react'
import * as api from "../../api"

export const CreatePosts = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.createPost({ title })
    } catch (error) {
      console.log(error)
    }

    setTitle('');
  }
  return (
    <>
      <h2>Create a post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
