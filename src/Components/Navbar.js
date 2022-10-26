import { useContext, useState } from 'react';
import Icon from '../assets/logo.jpeg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { AuthContext } from '../context/AuthContext';



const Navbar = () => {
    const [nav, setNav] = useState(true);

    const { currentUser, logout } = useContext(AuthContext);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <nav className="flex justify-between items-center mb-8">
            <div className='hidden sm:flex'>
                <img src={Icon} className='w-10 self-start mr-8' alt='logo' />
                {[
                    ['Home', '/'],
                    ['Posts', '/posts'],
                    ['Dashboard', '/dashboard'],
                ].map(([title, url]) => (
                    <a href={url} className="rounded-lg px-3 py-2 text-[#fca311] font-medium hover:text-[#e5e5e5]">{title}</a>
                ))}
                {currentUser &&
                    <>
                        <a href='/add_post' className="rounded-lg px-3 py-2 text-[#fca311] font-medium hover:text-[#e5e5e5]">Add post</a>
                        <a href='/edit_collection' className="rounded-lg px-3 py-2 text-[#fca311] font-medium hover:text-[#e5e5e5]">Your collection</a>
                    </>}
            </div>
            <div onClick={handleNav} className='block sm:hidden'>
                {!nav ? <AiOutlineClose size={20} color='white' /> : <AiOutlineMenu size={20} color='white' />}
            </div>
            <div className='space-x-4'>
                {currentUser ?
                    <a href='/logout' onClick={logout} className="rounded-lg px-3 py-2 text-[#14213d] font-medium bg-[#e5e5e5] hover:bg-[#f6f6f6] hover:text-[#14213d]">Logout</a> :
                    <>
                        <a href='/login' className="rounded-lg px-3 py-2 text-[#14213d] font-medium bg-[#e5e5e5] hover:bg-[#f6f6f6] hover:text-[#14213d]">Login</a>
                        <a href='/signup' className="rounded-lg px-3 py-2 text-[#f0ebd8] font-medium bg-[#fca311] hover:bg-[#eb9200] hover:text-[#e0dac7]">Sign up</a>
                    </>}
            </div>
        </nav>
    );
}

export default Navbar;
