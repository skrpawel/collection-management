import { AuthContext } from '../context/AuthContext';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';
import Input from "./Input";
import MDEditor from '@uiw/react-md-editor';
import Select from 'react-select'




const ManageCollection = () => {

    const { currentUser } = useContext(AuthContext);

    const userID = currentUser.id;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [topic, setTopic] = useState('');
    const [img, setImg] = useState('');


    const [posts, setPosts] = useState([]);

    const options = [
        { value: 'shoes', label: 'Shoes' },
        { value: 'whiskey', label: 'Whiskey' },
        { value: 'books', label: 'Books' }
    ];

    const handleSubmit = async e => {
        e.preventDefault();
        const inputs = {
            description,
            topic,
            img
        };

        try {
            await axios.post('http://localhost:5001/api/posts', { name, description, topic, img, userID });
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        console.log(currentUser.id);

        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/posts');
                console.log(res.data)
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-6">
                    <label htmlFor="inputName" className="form-label inline-block mb-2 text-white">Name of collection</label>
                    <Input type='text' placeholder='Enter name of collection' id='inputName' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group mb-6">
                    <MDEditor
                        value={description}
                        onChange={setDescription}
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="inputTopic" className="form-label inline-block mb-2 text-white">Topic</label>
                    <Select options={options} onChange={(e) => setTopic(e.value)} />
                </div>

                <div className="form-group mb-6">
                    <label htmlFor="inputImg" className="form-label inline-block mb-2 text-white">Select image</label>
                    <Input type='file' placeholder='Image' id='inputImg' name='img' onChange={setImg} />
                </div>

                <Button type='submit'>Create new collection</Button>

                <p className="text-white mt-6 text-center">{''} <a href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">{''}</a>
                </p>
            </form>
            <div className='my-4'>

            </div>
            <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Topic
                        </th>
                        <th>
                            Edit

                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-50'>
                    {posts.map(post => {
                        return (
                            <tr key={post.id} className='bg-white'>
                                <td className='px-6 py-4'>{post.id}</td>
                                <td className='px-6 py-4'>{post.name}</td>
                                <td className='px-6 py-4'>{post.description}</td>
                                <td className='px-6 py-4'>{post.topic}</td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a
                                        className="text-green-500 hover:text-green-700"
                                        href="#"
                                    >
                                        Edit
                                    </a>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a
                                        className="text-red-500 hover:text-red-700"
                                        href="#"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ManageCollection;