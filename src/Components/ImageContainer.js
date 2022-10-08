import { useState } from "react";


const ImageContainer = () => {

    const [title, setTitle] = useState('');
    const [collection, setCollection] = useState('');
    const [author, setAuthor] = useState('');


    return (
        <div className='w-96 h-96 sm:w-48 sm:h-64 bg-white rounded-lg'>
            <h1>Name:  {title}</h1>
            <h2>Collections: {collection}</h2>
            <h3>Authors: {author}</h3>
        </div>);
}

export default ImageContainer;