import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
const BookCategorySingleCard = ({ book }) => {
    const { _id, bookName, authorName, quantity, category, rating, image } = book || {};


    return (
        <div className="hover:bg-white p-6 rounded-lg overflow-hidden ">
            <div className="">
                <img
                    src={image}
                    alt="Book Cover"
                    className="w-full h-[300px] object-cover rounded-lg"
                />

            </div>

            <div className="mt-3">
                <h3 className="text-xl font-semibold text-gray-800 ">{bookName}</h3>


                <p className="text-sm text-gray-600 mt-1">Author: <span className="font-medium">{authorName}</span></p>
                <p className="text-sm text-gray-600 mt-1">Category: <span className="font-medium">{category}</span></p>



                <p className="text-sm text-gray-600 mt-1">Quantity: <span className="font-medium">{quantity}</span></p>

                <div className="flex items-center">
                    {/* Here you can display the rating */}
                    {/* <ReactStars count={5} value={numericRating} size={20} edit={false} /> */}
                    <span className="text-sm text-yellow-500 font-semibold">{rating}</span>
                </div>


                <Link to={`/categoryCardDetails/${_id}`} className="w-full">
                    <button className="mt-4  px-6 py-3 font-semibold text-blue-600 border border-blue-600 rounded-lg bg-white shadow-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 ease-in-out active:scale-95">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCategorySingleCard;
