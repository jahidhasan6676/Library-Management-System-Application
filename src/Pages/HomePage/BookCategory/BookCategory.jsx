import { Link } from "react-router-dom";


const BookCategory = () => {
    return (
        <div className="w-11/12 mx-auto  pb-20">
            {/* headers */}
            <div className="space-y-2 text-center pb-10">
                <h1 className="text-2xl lg:text-4xl  font-semibold">Explore Our Book <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"> Categories</span></h1>
                <p className="text-sm font-medium text-gray-500">Dive into a world of knowledge with books spanning various genres. <br /> Find your next favorite read today!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* card 1 */}

                <div className=" bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                    <div className="text-center bg-teal-600 text-white text-lg font-semibold py-2 px-4 rounded-t-lg">
                        History
                    </div>
                    <ul className="p-4 space-y-2">
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">The Wright Brothers</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">The Silk Roads</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">The Third Reich </li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">A People's History</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">The Civil War Era</li>
                        <Link to="/bookCategoryCard/History">
                            <li className="font-semibold text-teal-600 hover:underline cursor-pointer">
                                View All
                            </li>
                        </Link>

                    </ul>
                </div>

                {/* card 2 */}

                <div className=" bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                    <div className="text-center bg-teal-600 text-white text-lg font-semibold py-2 px-4 rounded-t-lg">
                        Thriller
                    </div>
                    <ul className="p-4 space-y-2">
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">The Great Gatsby</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">Pride and Prejudice</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">1984</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">The Catcher Arts</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">To Kill Mockingbird </li>
                        <Link to="/bookCategoryCard/Thriller">
                            <li className="font-semibold text-teal-600 hover:underline cursor-pointer">
                                View All
                            </li>
                        </Link>

                    </ul>
                </div>


                {/* card 3 */}

                <div className=" bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                    <div className="bg-teal-600 text-white text-lg font-semibold py-2 px-4 rounded-t-lg">
                        Novel
                    </div>
                    <ul className="p-4 space-y-2">
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">Dracula </li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">Jane Eyre</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">Emma </li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">Frankenstein  Arts</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">The Crusades </li>
                        <Link to="/bookCategoryCard/Novel">
                            <li className="font-semibold text-teal-600 hover:underline cursor-pointer">
                                View All
                            </li>
                        </Link>

                    </ul>
                </div>


                {/* card 4 */}

                <div className=" bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                    <div className="text-center bg-teal-600 text-white text-lg font-semibold py-2 px-4 rounded-t-lg">
                        Drama
                    </div>
                    <ul className="p-4 space-y-2">
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">Hamlet </li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">Macbeth </li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">Death of a Salesman</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">Oedipus Rex Arts</li>
                        <li className="text-gray-800 hover:text-teal-600 cursor-pointer">treetcar Named Desire</li>
                        <Link to="/bookCategoryCard/Drama">
                            <li className="font-semibold text-teal-600 hover:underline cursor-pointer">
                                View All
                            </li>
                        </Link>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default BookCategory;