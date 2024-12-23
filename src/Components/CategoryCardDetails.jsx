import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";

import UseAuth from "../Hooks/UseAuth";
// import Rating from "react-rating";


const CategoryCardDetails = () => {
    const { user } = UseAuth();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [book, setBook] = useState({});
    useEffect(() => {
        fetchBookDetailsData()


    }, [id]);

    const fetchBookDetailsData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books/${id}`);
        setBook(data)

    }

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
                            {/* <ReactStars
                                count={5}
                                size={24}
                                isHalf={true}
                                value={book?.rating || 0}
                                edit={false}
                                activeColor="#ffd700"
                            /> */}

                            {/* <Rating
                                initialRating={book?.rating || 0}
                                readonly
                                emptySymbol="far fa-star" 
                                fullSymbol="fas fa-star" 
                                fractions={2} 
                            /> */}
                            <span className="ml-2 text-gray-600">{book.rating}</span>
                        </div>

                        <p className="text-lg text-gray-600 mb-4">
                            {book.description}
                        </p>


                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
                        >
                            Borrow
                        </button>
                    </div>
                </div>
            </div>


            {/* Modal for Borrowed book */}
            {showModal && (
                <div className="modal modal-open pt-20">
                    <div className="modal-box  relative">
                        <button
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                            onClick={() => setShowModal(false)}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg mb-4">Borrowed Book User</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Book Name</label>
                                <input
                                    type="email"
                                    name="bookName"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={user?.displayName}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Return Date
                                </label>
                                <input
                                    type="date"
                                    name="returnDate"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <button className="btn btn-primary w-full mt-4" type="submit">
                                Submission
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>

    );
};

export default CategoryCardDetails;