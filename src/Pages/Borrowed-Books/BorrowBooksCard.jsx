

const BorrowBooksCard = ({ borrow, index, handleDelete }) => {
    const { _id, bookName, category, image, bookId, returnDate, borrowDate } = borrow || {};


    return (
        <tr>
            <td className=" text-center">{index + 1}</td>
            <td className="border text-center py-2">
                <div className="mask mask-squircle w-12 h-12 mx-auto">
                    <img
                    
                        src={image}
                        alt="Book" />
                </div>
            </td>
            <td className="border text-center py-2">
                {bookName}
            </td>
            <td className="border text-center py-2">{category}</td>
            <td className="border text-center py-2">{borrowDate}</td>
            <td className="border text-center py-2">{returnDate}</td>
            <td className="border text-center py-2">
            <button onClick={()=> handleDelete(_id,bookId)} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md shadow hover:from-purple-500 hover:to-blue-500 transition-all duration-300"> Return </button>
            </td>
        </tr>
    );
};

export default BorrowBooksCard;