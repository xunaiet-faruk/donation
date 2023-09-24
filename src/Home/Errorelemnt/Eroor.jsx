import { Link } from "react-router-dom";


const Eroor = () => {
    return (
        <div>
            <h1 className="text-4xl font-black text-center mt-52"> Opps Sorryy !!!!!!!!!!!!!! </h1>
            <div className="text-center mt-5">
                <Link to='./'>
                <button className="btn bg-green-200 px-5 rounded-xl py-3"> Home </button>
                </Link>
            </div>
        </div>
    );
};

export default Eroor;