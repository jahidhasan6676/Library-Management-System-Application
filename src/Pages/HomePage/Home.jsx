import React from 'react';
import Banner from './Banner/Banner';
import BookCategory from './BookCategory/BookCategory';

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <BookCategory></BookCategory>
        </div>
    );
};

export default Home;