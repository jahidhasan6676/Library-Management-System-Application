import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { motion } from 'framer-motion';

const AllBooksCard = ({ book }) => {
    const { _id, bookName, authorName, category, rating, image } = book || {};




    return (
        <motion.div
            className="border p-4 rounded-sm overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
        >
            <div className=" flex justify-center items-center">
                <img
                    src={image}
                    alt={bookName}
                    className="h-[170px] w-[100px] mx-auto object-cover"
                />
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {bookName}
                </h3>
                <p className="text-gray-600 mt-1">
                    <span className="font-medium">Author:</span> {authorName}
                </p>
                <p className="text-gray-600 mt-1">
                    <span className="font-medium">Category:</span> {category}
                </p>

                <div className=" mt-2">

                    <div className="flex items-center gap-3 ">  <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />{rating}</div>
                </div>

                <div className="mt-6">
                    <Link to={`/updateBook/${_id}`} >
                        <button className="border px-4 py-2 rounded-md bg-black text-white">Update</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default AllBooksCard;