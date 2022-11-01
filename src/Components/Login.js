import { useState, useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { useTranslation } from 'react-i18next';


const Login = (props) => {
    const navigate = useNavigate()
    const { i18n } = useTranslation();
    const { login } = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const [err, setErr] = useState(null)


    const handleLogin = async e => {
        e.preventDefault();
        try {
            await login(inputs)
            navigate('/');
        } catch (err) {
            setErr(err.response.data);
        }

        i18n.changeLanguage('en')
    }


    return (
        <div className="block p-6 rounded-lg shadow-lg bg-transparent border-2 w-80 sm:w-96">
            <form onSubmit={handleLogin}>
                <div className="form-group mb-6">
                    <label htmlFor="inputEmail" className="form-label inline-block mb-2 text-white">Email address</label>
                    <Input type='email' placeholder='Enter email' id='inputEmail' name='email' onChange={handleChange} />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="inputPassword" className="form-label inline-block mb-2 text-white">Password</label>
                    <Input type='password' placeholder='Password' id='inputPassword' name='password' onChange={handleChange} />
                </div>
                {err && <div className="form-group mb-6 text-white">{err}</div>}
                <Button color="fdb422">Submit</Button>
                <p className="text-white mt-6 text-center">{props.text} <a href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">{props.link}</a>
                </p>
            </form>
        </div>
    );
}

export default Login;