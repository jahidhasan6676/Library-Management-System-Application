import logo from '../../assets/logo.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import { useState } from "react";
import UseAuth from "../../Hooks/UseAuth";



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, signOutUser } = UseAuth();
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
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 hover:scale-110 transition-transform duration-300 cursor-pointer">Books Lovers</h2>

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
                        <NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >Home</NavLink>
                    </li>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/allBooks" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >All Books</NavLink>
                    </li>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/addBooks" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >Add Books</NavLink>
                    </li>
                    <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/borrowBooks" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >Borrowed Books</NavLink>
                    </li>
                    {/* <li className="mx-4 my-4 lg:my-0">
                        <NavLink to="/g" className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}`} >Home</NavLink>
                    </li> */}

                    {
                        user ?

                            <div className='flex justify-between gap-2'>
                                <img
                                    data-tooltip-id="user-tooltip"
                                    data-tooltip-content={user?.displayName}
                                    className="w-12 h-12 rounded-full cursor-pointer"
                                    src={user?.photoURL}
                                    referrerPolicy='no-referrer'
                                    alt="User image"
                                />
                                <Tooltip id="user-tooltip" place="top" />

                                <button onClick={handleSignOut} className=" text-white bg-gradient-to-r from-teal-500 to-cyan-500 py-2 px-4 rounded-lg font-bold hover:from-teal-600 hover:to-cyan-600">LogOut</button>

                            </div>

                            :

                            <div className="flex justify-between gap-2">
                                <Link to="/login">
                                    <button className=" text-white bg-gradient-to-r from-teal-500 to-cyan-500 py-2 px-4 rounded-lg font-bold hover:from-teal-600 hover:to-cyan-600">Login</button>
                                </Link>
                                <Link to="/register">
                                    <button className=" text-white bg-gradient-to-r from-teal-500 to-cyan-500 py-2 px-4 rounded-lg font-bold hover:from-teal-600 hover:to-cyan-600">Register</button>
                                </Link>
                            </div>

                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;