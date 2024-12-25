
import Marquee from 'react-fast-marquee';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ClientReview = () => {

    return (
        <div className='w-11/12 mx-auto  pb-20'>
            <div className='mb-10'>
                <h2 className='text-3xl font-semibold'>What Client Says</h2>
            </div>

            {/* review card */}

            <div className=' mx-auto bg-orange-100/40 rounded-lg'>
                <Marquee pauseOnHover={true}>
                    <div className='flex gap-6 p-20 -ml-[136px]'>

                        {/* review card 1 */}
                        <div className=" p-8 space-y-3 bg-white w-[300px] rounded-lg">
                            <div>
                                <h4 className="font-semibold mb-1">JM Jahid Hasan</h4>
                                <div className='flex justify-between items-center'>
                                    <Rating
                                        style={{ maxWidth: 70 }}
                                        value={`4`}
                                        readOnly
                                    />
                                    <p className='text-gray-500 text-xs'>12-10-2024</p>
                                </div>
                                <div className="divider h-1"></div>
                                <div>
                                    <h4 className='font-medium mb-2'>A Paradise of Knowledge</h4>
                                    <p className="text-sm font-medium text-gray-500">An amazing space for book love offering the latest and most high-quality titles across genres.</p>
                                </div>
                            </div>
                        </div>
                        {/* review card 2 */}
                        <div className=" p-8 space-y-3 bg-white w-[300px] rounded-lg">
                            <div>
                                <h4 className="font-semibold mb-1">Mumtahina Al Marjan</h4>
                                <div className='flex justify-between items-center'>
                                    <Rating
                                        style={{ maxWidth: 70 }}
                                        value={`5`}
                                        readOnly
                                    />
                                    <p className='text-gray-500 text-xs'>12-1-2024</p>
                                </div>
                                <div className="divider h-1"></div>
                                <div>
                                    <h4 className='font-medium mb-2'>Best Bookshop ever!</h4>
                                    <p className="text-sm font-medium text-gray-500">I am so happy to find a site where I can shop for unusual items. The packaging was phenomenal and my book arrived on time in perfect condition.</p>
                                </div>
                            </div>
                        </div>
                        {/* review card 3 */}
                        <div className=" p-8 space-y-3 bg-white w-[300px] rounded-lg">
                            <div>
                                <h4 className="font-semibold mb-1">Carlos Gomez</h4>
                                <div className='flex justify-between items-center'>
                                    <Rating
                                        style={{ maxWidth: 70 }}
                                        value={`3`}
                                        readOnly
                                    />
                                    <p className='text-gray-500 text-xs'>22-5-2024</p>
                                </div>
                                <div className="divider h-1"></div>
                                <div>
                                    <h4 className='font-medium mb-2'>A Haven for Book Lovers</h4>
                                    <p className="text-sm font-medium text-gray-500">Every visit is an immersion into the world of knowledge. Quality books and attentive customer service.</p>
                                </div>
                            </div>
                        </div>
                        {/* review card 4 */}
                        <div className=" p-8 space-y-3 bg-white w-[300px] rounded-lg">
                            <div>
                                <h4 className="font-semibold mb-1">Billal Hossain</h4>
                                <div className='flex justify-between items-center'>
                                    <Rating
                                        style={{ maxWidth: 70 }}
                                        value={`5`}
                                        readOnly
                                    />
                                    <p className='text-gray-500 text-xs'>2-12-2024</p>
                                </div>
                                <div className="divider h-1"></div>
                                <div>
                                    <h4 className='font-medium mb-2'>Great Books, Excellent Service</h4>
                                    <p className="text-sm font-medium text-gray-500">Not only diverse books but also friendly and helpful staff. A memorable book shopping experience!.</p>
                                </div>
                            </div>
                        </div>
                        {/* review card 5 */}
                        <div className=" p-8 space-y-3 bg-white w-[300px] rounded-lg">
                            <div>
                                <h4 className="font-semibold mb-1">Samuel Lee</h4>
                                <div className='flex justify-between items-center'>
                                    <Rating
                                        style={{ maxWidth: 70 }}
                                        value={`4`}
                                        readOnly
                                    />
                                    <p className='text-gray-500 text-xs'>8-08-2024</p>
                                </div>
                                <div className="divider h-1"></div>
                                <div>
                                    <h4 className='font-medium mb-2'>Great for Kids' Books</h4>
                                    <p className="text-sm font-medium text-gray-500">Bought books for my kids and they loved them. The recommendations were spot on!</p>
                                </div>
                            </div>
                        </div>
                        {/* review card 6 */}
                        <div className=" p-8 space-y-3 bg-white w-[300px] rounded-lg">
                            <div>
                                <h4 className="font-semibold mb-1">Maria Ivanova</h4>
                                <div className='flex justify-between items-center'>
                                    <Rating
                                        style={{ maxWidth: 70 }}
                                        value={`5`}
                                        readOnly
                                    />
                                    <p className='text-gray-500 text-xs'>12-10-2025</p>
                                </div>
                                <div className="divider h-1"></div>
                                <div>
                                    <h4 className='font-medium mb-2'>Great system borrow the Books</h4>
                                    <p className="text-sm font-medium text-gray-500">This is an amazing system where books can be borrowed. I borrow books for free and read them!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Marquee>
            </div>

        </div>
    );
};

export default ClientReview;