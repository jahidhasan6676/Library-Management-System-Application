import React from 'react';
import { Link } from 'react-router-dom';

const PopularBooksCard = ({ title, subtitle, image, bgColor, link }) => {
    return (
        <div
            className={`rounded-lg shadow-lg p-6 ${bgColor} text-white flex justify-between items-center gap-4`}
        >
            <div>
                <img src={image} alt={title} className="h-40 animate__animated animate__zoomIn animate__slow animate__infinite  shadow-lg" />
            </div>
            <div>
                <p className="text-sm opacity-80">{subtitle}</p>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>

                <div className=''>
                    <Link>
                        <button className="bg-white text-black px-4 py-2 rounded-lg mt-auto">
                            {link}
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default PopularBooksCard;