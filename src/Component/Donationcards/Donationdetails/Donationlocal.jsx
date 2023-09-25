import React from 'react';
import { Link } from 'react-router-dom';

const Donationlocal = ({ donate}) => {

    const { picture, title, price, category } = donate;

    return (
        <div className='flex gap-5 items-center rounded-lg'>

            <div className='w-1/3'>
                 <img src={picture} alt="" />
            </div>
            <div className='w-2/3'>
                <h2>{category}</h2>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='font-semibold'>{price} </p>
<Link to='/'>

                    <button className='font-bold'>View Details</button>
</Link>             
            </div>

            
        </div>
    );
};

export default Donationlocal;