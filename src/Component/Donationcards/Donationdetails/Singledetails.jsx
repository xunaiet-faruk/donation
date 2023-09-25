
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Singledetails = ({ cards }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_color, button_bg_color, description, price } = cards;

    const handlebtn = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'you have successfully Donasion ..',
            showConfirmButton: false,
            timer: 1500

        })
        const checkArray = [];
        const donationGet = JSON.parse(localStorage.getItem('card'))
        if (!donationGet) {
            checkArray.push(cards);
            localStorage.setItem('card', JSON.stringify(checkArray))

        }
        else {

            const existarray = donationGet.find((cards) => cards.id === id)

            if (!existarray) {
                checkArray.push(...donationGet, cards);
                localStorage.setItem('card', JSON.stringify(checkArray))



            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Sorry Already selected!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }
    }


    return (
        <div className='max-w-screen-xl mx-auto mt-16'>

            <div>
                <div className='relative'>
                    <img className=' w-full  h-[700px]' src={picture} alt="" />
                </div>
                <div className='absolute bg-gray-500 mix-blend-multiply px-[630px] py-12 -mt-24'>

                </div>



                <Link to={'/'}>

                    <button onClick={handlebtn} className='absolute -mt-[68px] ml-5 bg-[#FF444A] text-[#FFFFFF] px-6 rounded-md py-3'>Donate ${price}</button>


                </Link>


                <h2 className='text-4xl mt-10 font-bold text-[#0B0B0B]'> {title}</h2>
                <p className='text-[#0B0B0BB2] mt-10 mb-32'>{description}</p>
            </div>


        </div>
    );
};

export default Singledetails;