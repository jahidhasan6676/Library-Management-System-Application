import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full mx-auto pt-16 bg-gray-900">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Section 1 */}
                <div className="flex flex-col">
                    <img className='w-[80px]' src={logo} alt="" />
                    <p className="mt-2 text-gray-200">
                        Books Lovers Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>

                    {/* social icon */}
                    <div className="flex space-x-4 text-xl mt-4 text-white">
                        <Link to="#" className="">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to="#" className="">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="#" className="">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="#" className="">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="">
                    <h6 className="text-lg font-semibold text-gray-400 mb-3">Our Campus</h6>
                    <nav className="flex flex-col gap-2">
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">All Books</Link>
                        <Link className="text-gray-300 hover:text-blue-400">And Books</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Borrowed Books</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Help center</Link>

                    </nav>
                </div>

                {/* Section 3 */}
                <div className=" text-white">
                    <h6 className="text-lg font-semibold text-gray-400 mb-3">Contact Us</h6>
                    <nav className="flex flex-col gap-2">
                        <p className="text-gray-300 hover:text-blue-400">
                            <i className="fas fa-phone"></i> +123 456 7890
                        </p>
                        <p className="text-gray-300 hover:text-blue-400">
                            <i className="fas fa-envelope"></i> books@librarywebsite.com
                        </p>
                        <p className="text-gray-300 hover:text-blue-400">
                            <i className="fas fa-map-marker-alt"></i> 123 Street, Dhaka, Bangladesh
                        </p>
                        <p className="text-gray-300 hover:text-blue-400">
                            <i class="fa-solid fa-hourglass-half"></i> Sunday-Wednesday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-300 hover:text-blue-400">
                            <i class="fa-solid fa-hourglass-half"></i> Sunday-Wednesday: 9:00 AM - 6:00 PM
                        </p>
                    </nav>
                </div>

                {/* Section 4 */}
                <div className='flex justify-end items-end'>
                    
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="text-lg font-semibold text-gray-400 mb-3">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Send</button>
                        </div>
                    </fieldset>
                </div>
            </div>
           
            <div className="text-center block w-full mt-8 pb-3">
            <div className="divider w-11/12 mx-auto"></div>
                <p className="text-sm text-gray-400 pb-3">
                    &copy; {new Date().getFullYear()} Books Lovers. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
