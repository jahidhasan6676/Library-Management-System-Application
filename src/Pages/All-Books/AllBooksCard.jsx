import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";


const AllBooksCard = ({ book }) => {
    const { _id, bookName, authorName, category, rating, image } = book || {};




    return (
        <div className="bg-white rounded-lg overflow-hidden ">
            <div className=" bg-gray-100 flex justify-center items-center">
                <img
                    src={image}
                    alt={bookName}
                    className="h-[250px] w-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {bookName}
                </h3>
                <p className="text-gray-600 mt-1">
                    <span className="font-medium">Author:</span> {authorName}
                </p>
                <p className="text-gray-600 mt-1">
                    <span className="font-medium">Category:</span> {category}
                </p>

                <div className=" mt-2">

                    <div className="flex items-center gap-3 ">  <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />{rating}</div>
                </div>

                <div className="mt-6">
                    <Link to={`/updateBook/${_id}`} >
                        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow hover:from-purple-500 hover:to-blue-500 transition-all duration-300">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllBooksCard;