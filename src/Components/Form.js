import Input from "./Input";
import Button from './Button'
import InputFile from "./InputFile";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";
import { FileBase } from 'react'

const Form = () => {

    const [postData, setPostData] = useState({ name: '', description: '', topic: '', tags: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postData)
        dispatch(createPost(postData));
    }

    return (
        <form className="mx-3 flex flex-col gap-2" onSubmit={handleSubmit}>
            <Input value={postData.name} type='text' placeholder='name' id='input-name' onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
            <Input value={postData.description} type='text' placeholder='description' id='input-description' onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
            <Input value={postData.topic} type='text' placeholder='topic' id='input-topic' onChange={(e) => setPostData({ ...postData, topic: e.target.value })} />
            <Input value={postData.tags} type='text' placeholder='tags' id='input-tags' onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
            <InputFile />
            <Button color='fdb422'>Add post</Button>
        </form>

    );
}

export default Form;