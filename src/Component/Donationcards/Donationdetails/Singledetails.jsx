import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setData } from '../../Localstore/Localstore';
const Singledetails = ({ cards }) => {
   console.log(cards)
    const { id, picture, title, button_bg_color, description, price } = cards;

    const handlebtn = () => {
    
        setData(id);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    
    
    
    }

  
    return (
        <div className='max-w-screen-xl mx-auto mt-16'>

            <div>
                <div className='relative'>
                    <img className=' w-full  md:h-[700px] h-[300px]' src={picture} alt="" />
                </div>
                <div className='absolute bg-gray-400 mix-blend-multiply lg:px-[640px] md:px-[384px] px-[212px] py-12 -mt-24'>
                </div>
                <Link to={'/'}>
                    <button style={{backgroundColor:button_bg_color}} onClick={handlebtn} className='absolute -mt-[68px] ml-5  text-[#FFFFFF] px-6 rounded-md py-3'>Donate ${price}</button>
                </Link>
            <div className='lg:text-left text-center'>
                    <h2 className='text-4xl mt-10  font-bold text-[#0B0B0B]'> {title}</h2>
                    <p className='text-[#0B0B0BB2] mt-10 mb-32'>{description}</p>
            </div>
            </div>


        </div>
    );
};
Singledetails.propTypes = {
    cards: PropTypes.object
}

export default Singledetails;