import { Link } from "react-router-dom";


const AllBooksTable = ({ book, idx }) => {
    const {_id, bookName, authorName, category, rating } = book || {};
    return (
        <tr>
            <td className="text-center"> {idx + 1} </td>
            <td className="border text-center py-2">{bookName}</td>
            <td className="border text-center py-2">{authorName}</td>
            <td className="border text-center py-2">{category}</td>
            <td className="border text-center py-2">{rating}</td>
            <td className="text-center py-2">
                <Link to={`/updateBook/${_id}`}>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md shadow hover:from-purple-500 hover:to-blue-500 transition-all duration-300">Update</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllBooksTable;