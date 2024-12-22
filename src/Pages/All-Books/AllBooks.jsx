import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import AllBooksCard from "./AllBooksCard";


const AllBooks = () => {
    // const {user} = UseAuth();

    const [books, setBooks] = useState([]);
  useEffect(()=>{
    fetchAllBooks()
     
  },[]);

  const fetchAllBooks = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/books`)
    setBooks(data)
   
  }

    return (
        <div className=" py-16 bg-gray-100 min-h-[calc(100vh-355px)]">
           <h2 className="text-2xl text-center font-bold">My All Added Books</h2>

           <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {
                    books.map(book => <AllBooksCard key={book._id} book={book}></AllBooksCard>)
                }
           </div>
        </div>
    );
};

export default AllBooks;