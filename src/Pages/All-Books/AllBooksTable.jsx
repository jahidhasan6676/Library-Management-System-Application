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
                    <button className="btn btn-neutral">Update</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllBooksTable;