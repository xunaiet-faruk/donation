import { Link } from 'react-router-dom';
const Donationlocal = ({ donation }) => {

    const { picture, button_bg_color, title, price, text_color, category, card_bg_color } = donation;
    return (
        <div className='flex gap-5 items-center rounded-lg h-44' style={{ backgroundColor: card_bg_color }}>

            <div>
                <img className='h-44' src={picture} alt="" />
            </div>
            <div className='w-2/3'>
                <h2 style={{ color: text_color, backgroundColor: card_bg_color }} className="w-20 rounded mb-3  text-center "> {category}</h2>
                <p style={{ color: text_color }} className="text-xl  font-bold">{title}</p>
                <p style={{ color: text_color }} className='font-semibold pb-3'>${price}.00 </p>
                <Link to='/'>

                    <button style={{ backgroundColor: button_bg_color }} className='font-bold px-3 rounded-md py-1 text-white '>View Details</button>
                </Link>
            </div>


        </div>
    );
};

export default Donationlocal;