import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import AllBooksCard from "./AllBooksCard";
import AllBooksTable from "./AllBooksTable";


const AllBooks = () => {
  // const {user} = UseAuth();

  const [books, setBooks] = useState([]);
  const [viewMode, setViewMode] = useState("card");
  useEffect(() => {
    fetchAllBooks()

  }, []);

  const fetchAllBooks = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books`)
    setBooks(data)

  }

  const filterAvailableBooks = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books?filter=true`)
    setBooks(data)
  }

  return (
    <div className=" py-16 bg-gray-100 min-h-[calc(100vh-355px)]">
      <h2 className="text-2xl text-center font-bold">My All Added Books</h2>

      {/* Dropdown Menu */}
      <div className="text-center my-4">
        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {/* Filter Button */}
      <div className="text-center my-4">
        <button
          onClick={filterAvailableBooks}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Show Available Books
        </button>
      </div>

      {/* conditional rendering */}
      <div className="w-11/12 mx-auto mt-10">
        {
          viewMode === "card" ? (
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
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