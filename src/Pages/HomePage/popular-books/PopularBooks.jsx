import { Link } from "react-router-dom";
import PopularBooksCard from "../../../Components/PopularBooksCard";


const PopularBooks = () => {
    const books = [
        {
            title: "Don't Turn  Around",
            subtitle: "Game. Anime. Life",
            image: "https://i.ibb.co.com/n70bbNX/image2.webp",
            bgColor: "bg-gradient-to-r from-blue-800 to-blue-600",
            link : <Link to="/bookCategoryCard/Thriller"> Explore More</Link>

            
        },
        {
            title: "Black Is The Night",
            subtitle: "New this week",
            image: "https://i.ibb.co.com/sVYszV7/image1.jpg",
            bgColor: "bg-gradient-to-r from-purple-800 to-purple-600",
            link : <Link to="/bookCategoryCard/Novel"> Explore More</Link>

        },
        {
            title: "Don't Closed Eyes",
            subtitle: "Drama bestsellers",
            image: "https://i.ibb.co.com/xX2Lhpc/image3.jpg",
            bgColor: "bg-gradient-to-r from-green-700 to-green-500",
            link : <Link to="/bookCategoryCard/Drama"> Explore More</Link>

        },
    ];

    return (
        <div className="w-11/12  mx-auto flex  flex-col">
            <div>
                <h1 className="text-3xl md:text-4xl font-semibold text-center ">
                    Popular Books
                </h1>
                <p className="text-sm text-center font-medium text-gray-500 mb-12 mt-2">
                    Explore our most loved and trending books. Pick your favorite and start reading today!
                </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book, index) => (
                    <PopularBooksCard key={index} {...book} />
                ))}
            </div>
        </div>
    );

};

export default PopularBooks;