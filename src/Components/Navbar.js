import Icon from '../assets/logo.jpeg'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center space-x-4 p-8">
            <div className='flex'>
                <img src={Icon} className='w-10 self-start mr-8' alt='logo' />
                {[
                    ['Home', '/dashboard'],
                    ['Team', '/team'],
                    ['Projects', '/projects'],
                    ['Reports', '/reports'],
                ].map(([title, url]) => (
                    <a href={url} className="rounded-lg px-3 py-2 text-[#fca311] font-medium hover:text-[#e5e5e5]">{title}</a>
                ))}
            </div>
            <div className='space-x-4'>
                <a href='/login' className="rounded-lg px-3 py-2 text-[#14213d] font-medium bg-[#e5e5e5] hover:bg-[#f6f6f6] hover:text-[#14213d]">Login</a>
                <a href='/signup' className="rounded-lg px-3 py-2 text-[#f0ebd8] font-medium bg-[#fca311] hover:bg-[#eb9200] hover:text-[#e0dac7]">Sign up</a>
            </div>
        </nav>
    );
}

export default Navbar;
