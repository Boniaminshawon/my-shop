import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const Root = () => {
    return (
        <div>
            <div className="lg:h-[74px] h-[64px] md:h-[0px]">

                <Navbar></Navbar>
            </div>

            <div className="lg:container md:mx-1  lg:mx-auto " >
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;