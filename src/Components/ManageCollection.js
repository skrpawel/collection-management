import { AuthContext } from '../context/AuthContext';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import CollectionForm from './CollectionForm';
import { Link } from 'react-router-dom';




const ManageCollection = () => {

    const URL = 'https://itransistion-project-be.herokuapp.com/'

    const { currentUser } = useContext(AuthContext);

    const userID = currentUser.id;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [topic, setTopic] = useState('');
    const [img, setImg] = useState('');


    const [posts, setPosts] = useState([]);

    const options = [
        { value: 'shoes', label: 'shoes' },
        { value: 'whiskey', label: 'whiskey' },
        { value: 'books', label: 'books' }
    ];

    const handleSubmit = async e => {
        e.preventDefault();

        const obj = {
            name,
            description,
            topic,
            img,
            userID
        }

        try {
            const res = await axios.post('http://localhost:5001/api/posts', obj);
            console.log(res);
        } catch (err) {
            return err;
        }
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            await axios.delete('http://localhost:5001/api/posts/' + id, { withCredentials: true });
        } catch (err) {
            return err;
        }

        setPosts(posts.filter(post => post.idcollections !== id))
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios.post(`${URL}/api/posts/test`, { id: userID }, { withCredentials: true });
                setPosts(res.data);

            } catch (err) {
                return err;
            }
        }
        fetchData();
    }, [userID])


    return (
        <div>
            <CollectionForm
                handleSubmit={handleSubmit}
                nameValue={name}
                nameChange={(e) => setName(e.target.value)}
                descriptionValue={description}
                descriptionChange={setDescription}
                selectOptions={options}
                selectValue={topic}
                selectChange={(e) => setTopic(e.value)}
                imgChange={setImg}
                buttonText={'Create new collection'}
            />
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
                            <tr key={post.idcollections} className='bg-white'>
                                <td className='px-6 py-4'>{post.idcollections}</td>
                                <td className='px-6 py-4'>{post.name}</td>
                                <td className='px-6 py-4'>{post.description}</td>
                                <td className='px-6 py-4'>{post.topic}</td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <Link to={`/edit_collection?${post.idcollections}`} state={post} options={options}>

                                        <li
                                            id={'edit_' + post.idcollections}
                                            className="text-green-500 hover:text-green-700"

                                        >
                                            Edit
                                        </li>
                                    </Link>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <li
                                        onClick={(e) => handleDelete(e, post.idcollections)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </li>
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