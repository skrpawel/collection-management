import axios from "axios";
import { createContext, useEffect, useState } from "react"

const url = 'http://localhost:5001/api/auth'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = async inputs => {
        const res = await axios.post(url + '/login', inputs, { withCredentials: true });

        setCurrentUser(res.data);
    }

    const logout = async () => {
        await axios.post(url + '/logout', '', { withCredentials: true });
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
    )
};