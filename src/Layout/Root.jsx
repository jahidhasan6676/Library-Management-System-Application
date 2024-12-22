import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Footer from "./footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="mb-[75px]">
                <Navbar></Navbar>
            </div>
           <div className="min-h-[calc(100vh-353px)]">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;