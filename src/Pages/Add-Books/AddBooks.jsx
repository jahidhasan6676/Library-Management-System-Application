

const AddBooks = () => {
    const handleAddBookSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const bookName = form.bookName.value;
        const quantity = parseInt(form.quantity.value);
        const authorName = form.authorName.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const bookData = {
            image,
            bookName,
            quantity,
            authorName,
            category,
            description,
            rating
        }
        console.log(bookData)
    }
    return (
        <div className=" py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto  mt-10 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add a New Book</h2>
                <form onSubmit={handleAddBookSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Book Cover Image:</label>
                        <input
                            type="url"
                            name="image"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Book Name:</label>
                        <input
                            type="text"
                            name="bookName"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Quantity:</label>
                        <input
                            type="number"
                            name="quantity"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Author Name:</label>
                        <input
                            type="text"
                            name="authorName"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Category:</label>
                        <select
                            name="category"
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
                        <label className="block text-gray-700 font-medium">Short Description:</label>
                        <textarea
                            name="description"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Rating:</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Add Book
                    </button>
                </form>
                <div className="mt-6 text-center text-gray-600">
                    <p>Add the details of the book you want to share. Provide accurate information to help readers find the right book!</p>
                </div>
            </div>
        </div>
    );

};

export default AddBooks;