// import { TfiWorld } from "react-icons/tfi";
// import { Link } from "react-router-dom";


// const Footer = () => {
//     return (
//         <div className="w-full  py-10 bg-gray-900 ">
//             <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-6">
//                 <div>
//                     <span className="text-4xl text-blue-400 mr-1"><TfiWorld /></span>
//                     <p>
//                         ACME Industries Ltd.
//                         <br />
//                         Providing reliable tech since 1992
//                     </p>
//                 </div>
//                 <div>
//                     <h6 className="footer-title">Services</h6>
//                     <nav className="flex flex-col gap-1">
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                     </nav>

//                 </div>
//                 <div>
//                     <h6 className="footer-title">Company</h6>
//                     <nav className="flex flex-col gap-1">
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                     </nav>
//                 </div>
//                 <div>
//                     <h6 className="footer-title">Legal</h6>
//                     <nav className="flex flex-col gap-1">
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                         <Link>Home</Link>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;

import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full mx-auto py-10 bg-gray-900">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {/* Section 1 */}
                <div className="flex flex-col">
                    <span className="text-4xl text-blue-400 mr-1"><TfiWorld /></span>
                    <p className="mt-2 text-gray-200">
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </div>

                {/* Section 2 */}
                <div className="lg:text-center ">
                    <h6 className="text-lg font-semibold text-gray-400 mb-3">Services</h6>
                    <nav className="flex flex-col gap-2">
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                    </nav>
                </div>

                {/* Section 3 */}
                <div className="lg:text-center ">
                    <h6 className="text-lg font-semibold text-gray-400 mb-3">Company</h6>
                    <nav className="flex flex-col gap-2">
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                    </nav>
                </div>

                {/* Section 4 */}
                <div className="lg:text-center ">
                    <h6 className="text-lg font-semibold text-gray-400 mb-3">Legal</h6>
                    <nav className="flex flex-col gap-2">
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link className="text-gray-300 hover:text-blue-400">Home</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Footer;
