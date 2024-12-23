

const BorrowBooksCard = ({ borrow }) => {
    const { _id, bookName, authorName, quantity, category, image } = borrow || {};
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
                    className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">Return</button>
              
            </div>
        </div>
    );
};

export default BorrowBooksCard;