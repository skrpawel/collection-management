import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import CollectionForm from "./CollectionForm";
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';



const EditCollection = () => {

    const options = [
        { value: 'shoes', label: 'shoes' },
        { value: 'whiskey', label: 'whiskey' },
        { value: 'books', label: 'books' }
    ];

    const { currentUser } = useContext(AuthContext);


    const state = useLocation().state;

    const userID = currentUser.id;
    const postID = state.idcollections;


    const [name, setName] = useState(state.name);
    const [description, setDescription] = useState(state.description);
    const [topic, setTopic] = useState(state.topic);
    const [img, setImg] = useState(state.img);


    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5001/api/posts/${postID}`, { name, description, topic, img, postID, userID });
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <CollectionForm
            handleSubmit={handleSubmit}
            nameValue={name}
            nameChange={(e) => setName(e.target.value)}
            descriptionValue={description}
            descriptionChange={setDescription}
            selectOptions={options}
            selectValue={{ label: topic, value: topic }}
            selectChange={(e) => setTopic(e.value)}
            imgChange={setImg}
            buttonText={'Update collection'}
        />
    );
}

export default EditCollection;