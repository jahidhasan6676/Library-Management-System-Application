import { Link } from "react-router-dom";


const AllBooksCard = ({ book }) => {
    const { _id, bookName, authorName, category, rating, image } = book || {};

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
            <div className=" bg-gray-100 flex justify-center items-center">
                <img
                    src={image}
                    alt={bookName}
                    className="h-[200px] w-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {bookName}
                </h3>
                <p className="text-gray-600 mt-1">Author: {authorName}</p>
                <p className="text-gray-600 mt-1">Category: {category}</p>
                <div className="flex items-center mt-3">
                    <span className="bg-yellow-500 text-white text-sm font-medium py-1 px-3 rounded-full">
                        {rating} ★
                    </span>
                </div>

                <Link to={`/updateBook/${_id}`}>
                    <button className="w-full bg-blue-500 text-white font-medium py-2 mt-4 rounded-lg hover:bg-blue-600">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default AllBooksCard;