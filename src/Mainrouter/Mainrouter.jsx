import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Banner from "../Component/Banner/Banner";


const Mainrouter = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Banner></Banner>
          <Outlet></Outlet>
        </div>
    );
};

export default Mainrouter;