
import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import BorrowBooksCard from "./BorrowBooksCard";
import { toast } from "react-toastify";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";



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
            // console.log(data)
            fetchBorrowBooks()
            toast.success("Book Successfully Returned");

        } catch (err) {
            // console.log(err)
            toast.error(err.message)
        }
    }
    return (
        <div className="bg-gray-100 min-h-[calc(100vh-355px)] py-20">
            <h2 className="text-center text-2xl font-semibold mb-10">Your Borrowed Books Dashboard</h2>
            

            <div className="overflow-x-auto overflow-hidden w-11/12 mx-auto">
                <table className="table table-zebra w-full border-collapse border border-gray-300">
                    {/* head */}
                    <thead className="bg-gray-200 text-center text-[16px]">
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>BookName</th>
                            <th>Category</th>
                            <th>Borrow Date</th>
                            <th>Return Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            borrowBooks.map((borrow,index) => <BorrowBooksCard key={borrow._id} index={index} borrow={borrow} handleDelete={handleDelete}></BorrowBooksCard>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BorrowedBooks;