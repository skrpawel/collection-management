import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const URL = 'https://itransistion-project-be.herokuapp.com/api/auth/register';
    // const URL = 'http://localhost:5001/api/auth/register';

    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [err, setErr] = useState(null)

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post(URL, inputs);
            navigate('/login');
        } catch (err) {
            setErr(err.response.data);
        }
    }


    return (
        <div className="block p-6 rounded-lg shadow-lg bg-transparent border-2 w-96">
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-6">
                    <label htmlFor="inputName" className="form-label inline-block mb-2 text-white">Name</label>
                    <Input
                        type='text'
                        placeholder='Enter name'
                        id='inputName'
                        name='username'
                        value={inputs.name}
                        onChange={handleChange} />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="inputEmail" className="form-label inline-block mb-2 text-white">Email address</label>
                    <Input
                        type='email'
                        placeholder='Enter email'
                        id='inputEmail'
                        name='email'
                        value={inputs.email}
                        onChange={handleChange} />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="inputPassword" className="form-label inline-block mb-2 text-white">Password</label>
                    <Input
                        type='password'
                        placeholder='Password'
                        id='inputPassword'
                        name='password'
                        value={inputs.password}
                        onChange={handleChange} />
                </div>
                {err && <div className="form-group mb-6 text-[#ff0000]"><p>{err}</p></div>}
                <Button>Register</Button>
                <p className="text-white mt-6 text-center">Already a member?
                    <a href="#!" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
}

export default Register;