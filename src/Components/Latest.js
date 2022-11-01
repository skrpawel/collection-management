import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ImageContainer from "./ImageContainer";
// import { useSelector } from 'react-redux';
const Latest = (props) => {
    const URL = 'https://itransistion-project-be.herokuapp.com'
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${URL}/api/posts`);
                setPosts(res.data);
            } catch (err) {
                console.log('blad', err);
            }
        }

        const fetch = async () => {
            try {
                const res = await axios.get(`${URL}/api/posts`);
                console.log(res.data);
            } catch (err) {
                // console.log('blad', err);
            }
        }
        fetch();
        fetchData();
    }, [])


    return (<div className='min-w-full max-w-lg'>
        <h1 className='text-white py-5 text-xl text-left font-bold uppercase border-t-2 border-white'>{props.title}</h1>
        <div className='flex flex-wrap justify-center items-center gap-8 pt-8'>
            {
                posts.map(post => {
                    return <ImageContainer name={post.name} collection={post.topic} author={post.author} img={post.img} />
                })
            }
        </div>
    </div>);
}

export default Latest;