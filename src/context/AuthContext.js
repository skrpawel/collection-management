import axios from "axios";
import { createContext, useEffect, useState } from "react"


const URL = 'https://itransistion-project-be.herokuapp.com/api/auth'

// const URL = 'http://localhost:5001/api/auth'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);


    const login = async inputs => {
        console.log('Hello', inputs);

        const res = await axios.post(URL + '/login', inputs, { withCredentials: true });
        setCurrentUser(res.data);
    }

    const logout = async () => {
        try {
            await axios.post(URL + '/logout', '', { withCredentials: true });
        } catch (err) {
            console.log(err);
        }

        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
    )
};