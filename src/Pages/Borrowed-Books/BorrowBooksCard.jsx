

const BorrowBooksCard = ({ borrow, handleDelete }) => {
    const { _id, bookName, category, image, bookId, returnDate, borrowDate } = borrow || {};
    

    return (
        <div className="bg-gray-50  rounded-lg overflow-hidden ">

            <div className="p-4 rounded-md overflow-hidden">
                <div className="relative overflow-hidden rounded-md">
                    <img
                        src={image}
                        alt="Book Cover"
                        className="w-full h-[200px] object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>


            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{bookName}</h3>

                <p className="text-gray-600 mt-1">
                    <span className="font-medium">Category:</span> {category}
                </p>
                <p className="text-gray-600 mt-1">
                    <span className="font-medium">BorrowDate:</span> {borrowDate}
                </p>
                <p className="text-gray-600 mt-1">
                    <span className="font-medium">ReturnDate:</span> {returnDate}
                </p>

                <div className="flex justify-end">
                    <button
                        onClick={() => handleDelete(_id, bookId)}
                        className="mt-4 px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-300">Return</button>

                </div>
            </div>
        </div>
    );
};

export default BorrowBooksCard;