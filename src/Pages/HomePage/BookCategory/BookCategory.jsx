

const BookCategory = () => {
    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
            {/* card 1 */}
            <div className=" bg-white rounded-xl shadow-lg overflow-hidden ">
                {/* Image Section */}
                <div className=" bg-gray-200">
                    <img
                        src="https://hips.hearstapps.com/hmg-prod/images/1-best-thriller-books-index-comp-649d9b68c3157.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
                        alt="Category"
                        className="h-[200px] w-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                        Novel
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Discover amazing novels that inspire and entertain.
                    </p>
                    <button className="block w-full py-2 text-center bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                        Explore Novels
                    </button>
                </div>
            </div>
            {/* card 2 */}
            <div className=" bg-white rounded-xl shadow-lg overflow-hidden ">
                {/* Image Section */}
                <div className=" bg-gray-200">
                    <img
                        src="https://hips.hearstapps.com/hmg-prod/images/1-best-thriller-books-index-comp-649d9b68c3157.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
                        alt="Category"
                        className="h-[200px] w-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                       Thriller
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Discover amazing novels that inspire and entertain.
                    </p>
                    <button className="block w-full py-2 text-center bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                        Explore Novels
                    </button>
                </div>
            </div>

            {/* card 3 */}
            <div className=" bg-white rounded-xl shadow-lg overflow-hidden ">
                {/* Image Section */}
                <div className=" bg-gray-200">
                    <img
                        src="https://hips.hearstapps.com/hmg-prod/images/1-best-thriller-books-index-comp-649d9b68c3157.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
                        alt="Category"
                        className="h-[200px] w-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                       History
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Discover amazing novels that inspire and entertain.
                    </p>
                    <button className="block w-full py-2 text-center bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                        Explore Novels
                    </button>
                </div>
            </div>

            {/* card 4 */}
            <div className=" bg-white rounded-xl shadow-lg overflow-hidden ">
                {/* Image Section */}
                <div className=" bg-gray-200">
                    <img
                        src="https://hips.hearstapps.com/hmg-prod/images/1-best-thriller-books-index-comp-649d9b68c3157.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
                        alt="Category"
                        className="h-[200px] w-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                       Drama
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Discover amazing novels that inspire and entertain.
                    </p>
                    <button className="block w-full py-2 text-center bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                        Explore Novels
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCategory;