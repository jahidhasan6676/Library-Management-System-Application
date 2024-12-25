
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";

import UseAuth from "../Hooks/UseAuth";
import { toast } from "react-toastify";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";


const CategoryCardDetails = () => {
    const { user } = UseAuth();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [book, setBook] = useState({});
    const borrowDate = new Date().toLocaleDateString();
    const axiosSecure = UseAxiosSecure();

    useEffect(() => {
        document.title = "Books Category Details | Library"
    }, [])

    useEffect(() => {
        fetchBookDetailsData()


    }, [id]);

    const fetchBookDetailsData = async () => {
        const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/books/${id}`);
        setBook(data)

    }

    const handleBorrowedData = async e => {
        e.preventDefault();
        const form = e.target;
        const bookName = form.bookName.value;
        const email = user?.email;
        const name = user?.displayName;
        const returnDate = form.returnDate.value;
        const bookId = book._id;
        const image = book.image;
        const category = book.category;


        const borrowedData = {
            bookName,
            email,
            name,
            image,
            category,
            returnDate,
            borrowDate,
            bookId,
            owner: book.email

        }
        try {
            await axiosSecure.post(`${import.meta.env.VITE_API_URL}/borrow`, borrowedData);
            form.reset();
            toast.success("Book Borrow successfully done");
            fetchBookDetailsData()
            // navigate()
        } catch (err) {
            // console.log(err)
            toast.error(err.response.data)
        }
    }

    return (
        <div className=" py-16 bg-gray-50 ">
            <div className=" w-7/12 mx-auto bg-gray-100 rounded-md py-6">
                <h2 className="text-2xl font-semibold text-center">Discover the Details of Your Next Favorite Book </h2>
                <div className="overflow-hidden md:flex  space-y-8 md:space-y-0  p-4 md:p-10 lg:p-20 ">
                    <div className="flex-1">
                        <img
                            src={book.image}
                            alt="Book Cover"
                            className="w-4/5 h-[350px] object-cover rounded-md"
                        />
                    </div>


                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{book.bookName}</h2>
                        <p className="text-lg text-gray-600 mb-2"><span className="font-semibold">Author:</span> {book.authorName} </p>
                        <p className="text-lg text-gray-600 mb-2"><span className="font-semibold">Category:</span> {book.category}</p>
                        <p className="text-lg text-gray-600 mb-2"><span className="font-semibold">Stock Quantity:</span> {book.quantity}</p>


                        <div className=" mb-4">
                            <div className="flex items-center gap-3 ">  <Rating
                                style={{ maxWidth: 100 }}
                                value={book.rating}
                                readOnly
                            />{book.rating}</div>
                        </div>

                        <p className="text-lg text-gray-600 mb-4">
                            {book.description}
                        </p>


                        <button
                            disabled={book?.quantity <= 0}
                            onClick={() => setShowModal(true)}
                            className="disabled:cursor-not-allowed w-fit px-6 py-3 text-white font-semibold bg-pink-500 rounded-full hover:bg-pink-600 focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition-all duration-300 "
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
                        <form onSubmit={handleBorrowedData} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Book Name</label>
                                <input
                                    type="text"
                                    name="bookName"
                                    defaultValue={book.bookName}
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