
import { useEffect, useState } from "react";

import AllBooksCard from "./AllBooksCard";
import AllBooksTable from "./AllBooksTable";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const AllBooks = () => {
  // const {user} = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const [books, setBooks] = useState([]);
  const [viewMode, setViewMode] = useState("card");

  useEffect(() => {
    document.title = "All Books store | Library"
  }, [])


  useEffect(() => {
    fetchAllBooks()

  }, []);

  const fetchAllBooks = async () => {
    const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/books`)
    setBooks(data)

  }

  const filterAvailableBooks = async () => {
    const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/books?filter=true`)
    setBooks(data)
  }


  return (
    <div className=" py-20 bg-gray-1 min-h-screen">

      {/* headers */}

      <div className="w-11/12 mx-auto flex justify-between ">
        <div>
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Manage and Update Your <br />
            <span>
              Book Collection
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {/* Dropdown Menu */}
          <div className="text-center">
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
              className=" w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow focus:outline-none  focus:border-transparent transition duration-200"
            >
              <option value="card">Books in Card View</option>
              <option value="table">Books in Table View</option>
            </select>
          </div>

          {/* Filter Button */}
          <div className="text-center">
            <button
              onClick={filterAvailableBooks}
              className="border border-blue-500 text-blue-500 px-12 py-2 rounded-md hover:bg-blue-800 hover:text-white transition-all duration-300">
              Available Books
            </button>
          </div>
        </div>
      </div>

      {/* conditional rendering */}
      <div className="w-11/12 mx-auto mt-10">
        {
          viewMode === "card" ? (
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
              {
                books.map(book => <AllBooksCard key={book._id} book={book}></AllBooksCard>)
              }
            </div>
          )
            : (
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200 text-center text-[16px]">
                      <th>ID</th>
                      <th className="border py-2">BookName</th>
                      <th className="border py-2">Author Name</th>
                      <th className="border py-2">Category</th>
                      <th className="border py-2">Rating</th>
                      <th className="border py-2">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book, idx) => (
                      <AllBooksTable key={book._id} book={book} idx={idx} />
                    ))}
                  </tbody>
                </table>
              </div>

            )
        }

      </div>


    </div>
  );
};

export default AllBooks;