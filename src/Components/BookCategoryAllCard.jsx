import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCategorySingleCard from "./BookCategorySingleCard";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";


const BookCategoryAllCard = () => {
    const [books, setBooks] = useState([]);
    const {category} = useParams();
    // const axiosSecure = UseAxiosSecure();

    useEffect(() => {
        document.title = "Books Category | Library"
      }, [])

    useEffect(() => {
        fetchCategoryBooks()

    }, []);

    const fetchCategoryBooks = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books/book/${category}`)
        setBooks(data)

    }
    // console.log(books)
    return (
        <div className="bg-gray-100 min-h-[calc(100vh-355px)] py-16">
              <h1 className="text-2xl font-bold text-center mb-6">Browse Our Collection by Category</h1>
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                {
                    books.map(book => <BookCategorySingleCard key={book._id} book={book}></BookCategorySingleCard>)
                }
            </div>
        </div>
    );
};

export default BookCategoryAllCard;