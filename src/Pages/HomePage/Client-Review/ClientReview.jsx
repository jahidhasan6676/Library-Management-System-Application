import React, { useEffect, useState } from 'react';
import ClientReviewCard from './ClientReviewCard';
import Marquee from 'react-fast-marquee';

const ClientReview = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/public/ReviewData.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='w-11/12 mx-auto  pb-20'>
            <div className='mb-10'>
                <h2 className='text-3xl font-semibold'>What Client Says</h2>
            </div>

            {/* review card */}

            <div className=' mx-auto bg-orange-100/40 rounded-lg'>
                <Marquee pauseOnHover={true}>
                    <div className='flex gap-6 p-20 -ml-[136px]'>
                        {
                            data.map((detailsData, index) => <ClientReviewCard key={index} detailsData={detailsData}></ClientReviewCard>)
                        }
                    </div>
                </Marquee>
            </div>

        </div>
    );
};

export default ClientReview;