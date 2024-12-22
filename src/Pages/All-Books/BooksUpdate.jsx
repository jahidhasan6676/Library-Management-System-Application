import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const BooksUpdate = () => {
    
  const {id} = useParams(); 

  const [book, setBook] = useState({});
  useEffect(()=>{
    fetchBookData()
     

  },[id]);

  const fetchBookData = async ()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/books/${id}`);
    setBook(data)
   
  }

    // update book data
  const handleUpdateBookData = async e =>{
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
        const bookName = form.bookName.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const bookData = {
            image,
            bookName,
            authorName,
            category,
            rating,
            
        }

        // data update backend
      try{
        await axios.put(`${import.meta.env.VITE_API_URL}/update-book/${id}`, bookData)
        form.reset()
        toast.success("Data Update Successfully");
        // navigate("/my-posted-jobs")
      }
      catch (err){
        console.log(err)
        toast.error(err.message)
      }
  }
 
    return (
        <div className=" py-20 bg-gray-50">
            <div className="max-w-2xl mx-auto  p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update a Book</h2>
                <form onSubmit={handleUpdateBookData} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Book Cover Image:</label>
                        <input
                            type="url"
                            name="image"
                            defaultValue={book.image}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Book Name:</label>
                        <input
                            type="text"
                            name="bookName"
                            defaultValue={book.bookName}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-medium">Author Name:</label>
                        <input
                            type="text"
                            name="authorName"
                            defaultValue={book.authorName}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Category:</label>
                        <select
                            name="category"
                            defaultValue={book.category}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        >
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-medium">Rating:</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            defaultValue={book.rating}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
                
            </div>
        </div>
        
    );
};

export default BooksUpdate;