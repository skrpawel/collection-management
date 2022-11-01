import axios from "axios";

const URL = 'https://itransistion-project-be.herokuapp.com/posts'

export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
