import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import BookCategory from './BookCategory/BookCategory';
import PopularBooks from './popular-books/PopularBooks';
import ClientReview from './Client-Review/ClientReview';

const Home = () => {
    useEffect(() => {
        document.title = "Home | Library"
      }, [])
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <BookCategory></BookCategory>
            <PopularBooks></PopularBooks>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;