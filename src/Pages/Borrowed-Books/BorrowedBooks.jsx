import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import BorrowBooksCard from "./BorrowBooksCard";


const BorrowedBooks = () => {
    const {user} = UseAuth();
    const [borrowBooks, setBorrowBooks] = useState([]);
    useEffect(()=>{
      fetchBorrowBooks()
       
    },[user?.email]);
  
    const fetchBorrowBooks = async ()=>{
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/borrow/${user?.email}`)
      setBorrowBooks(data)
     
    }
  console.log(borrowBooks)
    return (
        <div className="bg-gray-100 py-16">
            <h2 className="text-center text-2xl font-bold">My all borrow books</h2>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {
                    borrowBooks.map(borrow => <BorrowBooksCard key={borrow._id} borrow={borrow}></BorrowBooksCard>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;