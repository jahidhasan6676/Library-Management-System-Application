import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const CategoryCardDetails = () => {
    const { id } = useParams();

    const [book, setBook] = useState({});
    useEffect(() => {
        fetchBookDetailsData()


    }, [id]);

    const fetchBookDetailsData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books/${id}`);
        setBook(data)

    }
    console.log(book)
    return (
        <div className=" py-16 bg-gray-50 ">
            <div className=" w-11/12 mx-auto bg-gray-100 rounded-md py-6">
                <h2 className="text-2xl font-semibold text-center">Book Details: </h2>
                <div className="overflow-hidden md:flex gap-8 space-y-8 md:space-y-0 lg:gap-14 p-4 md:p-10 lg:p-20">
                    <div className="flex-1">
                        <img
                            src={book.image}
                            alt="Book Cover"
                            className="w-full h-[320px] object-cover rounded-md "
                        />
                    </div>


                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{book.bookName}</h2>
                        <p className="text-lg text-gray-600 mb-2"><span className="font-semibold">Author:</span> {book.authorName} </p>
                        <p className="text-lg text-gray-600 mb-2"><span className="font-semibold">Category:</span> {book.category}</p>
                        <p className="text-lg text-gray-600 mb-2"><span className="font-semibold">Stock Quantity:</span> {book.quantity}</p>


                        <div className="flex items-center mb-4">
                            <ReactStars
                                count={5}
                                size={24}
                                isHalf={true}
                                value={book.rating}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <span className="ml-2 text-gray-600">{book.rating}</span>
                        </div>

                        <p className="text-lg text-gray-600 mb-4">
                            {book.description}
                        </p>


                        <button
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
                        >
                            Borrow
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CategoryCardDetails;