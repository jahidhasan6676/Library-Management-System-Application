import React from 'react';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ClientReviewCard = ({ detailsData }) => {
    const { name, date, review, rating, title } = detailsData;
    return (
        <div className=" p-8 space-y-3 bg-white w-[300px] rounded-lg    ">

            <div>
                <h4 className="font-semibold mb-1">{name}</h4>
                <div className='flex justify-between items-center'>
                    <Rating
                        style={{ maxWidth: 70 }}
                        value={rating}
                        readOnly
                    />
                    <p className='text-gray-500 text-xs'>{date}</p>
                </div>

                <div className="divider h-1"></div>

                <div>
                <h4 className='font-medium mb-2'>{title}</h4>
                <p className="text-sm font-medium text-gray-500">{review}</p>
                </div>

            </div>
            


        </div>
    );
};

export default ClientReviewCard;