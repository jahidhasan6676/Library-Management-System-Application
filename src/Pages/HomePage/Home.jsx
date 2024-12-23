import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import BookCategory from './BookCategory/BookCategory';

const Home = () => {
    useEffect(() => {
        document.title = "Home | Library"
      }, [])
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <BookCategory></BookCategory>
        </div>
    );
};

export default Home;