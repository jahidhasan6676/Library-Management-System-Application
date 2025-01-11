import logo from '../../assets/logo.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import { useState } from "react";
import UseAuth from "../../Hooks/UseAuth";



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, signOutUser, loading, setLoading } = UseAuth();
    
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
        navigate("/login")
    }
    

    return (
        <nav className="py-5 bg-gray-800 text-white w-full  fixed top-0 z-50">

            <div className="w-11/12 mx-auto lg:flex lg:justify-between lg:items-center ">
                {/* logo and name */}
                <div className="flex justify-between items-center">
                    <div className="   flex items-center cursor-pointer">
                        <img className='w-[45px]' src={logo} alt="" />
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 hover:scale-110 transition-transform duration-300 cursor-pointer">Books Lovers</h2>

                    </div>
                    <div onClick={() => setOpen(!open)} className="lg:hidden cursor-pointer text-3xl ">
                        <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </div>
                </div>
                {/* page name */}
                <ul className={`lg:flex lg:items-center lg:static absolute lg:z-auto z-[-1] bg-gray-800  w-full left-0 lg:w-auto lg:pb-0 pb-6 lg:pl-0 pl-7 transition-all duration-500 ease-in  ${open
                    ? "top-[76px] opacity-100 "
                    : "hidden"
                    }`}>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`} >Home</NavLink>
                    </li>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/about" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`} >About us</NavLink>
                    </li>
                    {
                        user ? <><li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/allBooks" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`} >All Books</NavLink>
                    </li>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/addBooks" className={({ isActive }) => `${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`} >Add Books</NavLink>
                    </li>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/borrowBooks" className={({ isActive }) => `${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`} >Borrowed Books</NavLink>
                    </li></> : ""
                    }
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/helpCenter" className={({ isActive }) => `${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`} >Help Center</NavLink>
                    </li>

                    {
                        user ?

                            <div className='flex justify-between gap-2'>
                                <img
                                    data-tooltip-id="user-tooltip"
                                    data-tooltip-content={user?.displayName}
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                    src={user?.photoURL}
                                    referrerPolicy='no-referrer'
                                    alt="User image"
                                />
                                <Tooltip id="user-tooltip" place="top" />

                                <button onClick={handleSignOut} className=" px-4 py-2 text-blue-500 font-semibold border border-gray-500 rounded-full hover:bg-gray-800  transition duration-300">LogOut</button>

                            </div>

                            :
                             
                            <div className="flex justify-between gap-2">
                                <Link to="/login">
                                    <button className=" px-4 py-2 text-blue-500 font-semibold border border-gray-500 rounded-full hover:bg-gray-800  transition duration-300">Login</button>
                                </Link>
                                <Link to="/register">
                                    <button className=" px-4 py-2 text-blue-500 font-semibold border border-gray-500 rounded-full hover:bg-gray-800  transition duration-300">Register</button>
                                </Link>
                            </div>

                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;