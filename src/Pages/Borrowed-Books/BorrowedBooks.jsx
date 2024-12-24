
import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import BorrowBooksCard from "./BorrowBooksCard";
import { toast } from "react-toastify";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const BorrowedBooks = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const [borrowBooks, setBorrowBooks] = useState([]);

    useEffect(() => {
        document.title = "Borrow Books | Library"
    }, [])

    useEffect(() => {
        fetchBorrowBooks()

    }, [user?.email]);

    const fetchBorrowBooks = async () => {
        const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/borrow/${user?.email}`)
        setBorrowBooks(data)

    }

    // delete user add borrow books
    const handleDelete = async (id, bookId) => {
        try {
            const { data } = await axiosSecure.delete(`${import.meta.env.VITE_API_URL}/borrow/${id}?bookId=${bookId}`)
            console.log(data)
            fetchBorrowBooks()
            toast.success("Book Successfully Returned");

        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }
    return (
        <div className="bg-gray-100 min-h-[calc(100vh-355px)] py-16">
            <h2 className="text-center text-2xl font-semibold">Your Borrowed Books Dashboard</h2>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {
                    borrowBooks.map(borrow => <BorrowBooksCard key={borrow._id} borrow={borrow} handleDelete={handleDelete}></BorrowBooksCard>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;