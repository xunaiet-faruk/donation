import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";



const Mainrouter = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
    );
};

export default Mainrouter;