import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../../Component/Firebase/Context";



const Navbar = () => {
    const { logout,users } = useContext(Authcontext);
    

const handlebtn = () =>{
    logout()
    .then(res => {
        console.log(res.user)
    })
    .catch(error =>{
        console.log(error)
    })
    
}

    return (
        <div className='flex flex-wrap  justify-between font-semibold max-w-screen-xl mx-auto p-7'>
            <div>
                <img className="lg:w-[230px] w-[200px] ml-20" src="https://i.ibb.co/PZ2TCCQ/exam-8.png" alt="" />
            </div>
            <ul className='flex  gap-12 pl-5 text-xl mt-4 text-[#0B0B0B]'>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                    Login
                    </NavLink>
                </li>
                <li>
             {
                        users?.email ? <button onClick={handlebtn} className="btn btn-secondary">Sign out</button>
                        :
                        <button className="btn btn-secondary">Login</button>
             }
                </li>
            </ul>
        </div>
    );
};

export default Navbar;