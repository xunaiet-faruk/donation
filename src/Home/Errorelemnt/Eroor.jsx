import { Link } from "react-router-dom";

const Eroor = () => {
    return (
   <div className="max-w-screen-xl mx-auto">
<div className="h-[400px]  mx-auto">

                <div className="flex ml-[500px] mb-5 pt-16 mt-80 gap-4 items-center">
                    <h1 className="text-4xl font-bold">404</h1>
                    <h2 className="text-1xl text-gray-700">This page could not be found.</h2>
                </div>
                <div className="text-center">
                    <Link to='./'>
                        <button className="btn btn-secondary hover:bg-gray-500 hover:text-black px-5 rounded-xl py-3 "> Back Home </button>
                    </Link>
                </div>

</div>
   </div>



    );
};

export default Eroor;