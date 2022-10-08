import Button from "./Button";
import Input from "./Input";

const Login = (props) => {
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-transparent border-2 w-96">
            <form>
                <div className="form-group mb-6">
                    <label htmlFor="inputEmail" className="form-label inline-block mb-2 text-white">Email address</label>
                    <Input type='email' placeholder='Enter email' id='inputEmail' />

                </div>
                <div className="form-group mb-6">
                    <label htmlFor="inputPassword" className="form-label inline-block mb-2 text-white">Password</label>
                    <Input type='password' placeholder='Password' id='inputPassword' />
                </div>
                <Button />
                <p className="text-white mt-6 text-center">{props.text} <a href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">{props.link}</a>
                </p>
            </form>
        </div>
    );
}

export default Login;