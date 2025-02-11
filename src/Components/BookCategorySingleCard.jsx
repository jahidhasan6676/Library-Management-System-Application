import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const BookCategorySingleCard = ({ book }) => {
    const { _id, bookName, authorName, quantity, category, rating, image } = book || {};


    return (
        <div className="hover:bg-white border p-6 rounded-lg overflow-hidden ">
            <div className="">
                <img
                    src={image}
                    alt="Book Cover"
                    className="w-[100px] h-[150px] mx-auto object-cover"
                />

            </div>

            <div className="mt-3">
                <h3 className="text-xl font-semibold text-gray-800 ">{bookName}</h3>


                <p className="text-sm text-gray-600 mt-1">Author: <span className="font-medium">{authorName}</span></p>
                <p className="text-sm text-gray-600 mt-1">Category: <span className="font-medium">{category}</span></p>



                <p className="text-sm text-gray-600 mt-1">Quantity: <span className="font-medium">{quantity}</span></p>

                <div className="flex items-center">
                    <div className=" mt-2">

                        <div className="flex items-center gap-3 ">  <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />{rating}</div>
                    </div>
                   
                </div>


                <Link to={`/categoryCardDetails/${_id}`} className="w-full">
                    <button className="mt-4  px-6 py-3 font-semibold text-blue-500 border border-b-blue-600 rounded-lg bg-white hover:bg-blue-800 hover:text-white">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCategorySingleCard;
