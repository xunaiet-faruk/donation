import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='flex justify-between font-semibold max-w-7xl mx-auto  p-7'>
            <div>
                <img className="w-[230px]" src="https://i.ibb.co/PZ2TCCQ/exam-8.png" alt="" />
            </div>
            <ul className='flex gap-12 mt-4 text-[#0B0B0B]'>
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
            </ul>
        </div>
    );
};

export default Navbar;