import axios from 'axios';

const url = "http://localhost:8000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const fetchComments = (id) => axios.get(`http://localhost:8001/posts/${id}/comments`);
export const createComment = (id, content) => axios.post(`http://localhost:8001/posts/${id}/comments`, { content })