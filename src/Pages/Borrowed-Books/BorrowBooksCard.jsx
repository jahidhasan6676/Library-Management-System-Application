

const BorrowBooksCard = ({ borrow, handleDelete }) => {
    const { _id, bookName, authorName, quantity, category, image, bookId } = borrow || {};

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">

            <img
                src={image}
                alt="Book Cover"
                className="w-full h-[200px] object-cover"
            />


            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{bookName}</h3>
                <p className="text-sm text-gray-600">Author: {authorName}</p>
                <p className="text-sm text-gray-600">Category: {category}</p>
                <button
                    onClick={()=>handleDelete(_id, bookId)}
                    className="mt-4 px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-300">Return</button>
              
            </div>
        </div>
    );
};

export default BorrowBooksCard;