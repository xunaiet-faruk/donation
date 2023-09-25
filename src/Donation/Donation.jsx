import React, { useEffect, useState } from 'react';
import Donationlocal from '../Component/Donationcards/Donationdetails/Donationlocal';
import { useLoaderData } from 'react-router-dom';

const Donation = () => {
    const [donate , setdonate] =useState([]);
    const [show, setshow] =useState(4);

    useEffect(()=>{

        const dontaionItems =JSON.parse(localStorage.getItem('card'));
        if(dontaionItems){
            setdonate(dontaionItems);
        }

    },[])

    return (
      <div className='max-w-screen-xl mx-auto my-16'>

            <div className='grid lg:grid-cols-2 gap-5 '>
                {

                    donate.slice(0,show).map(donates => <Donationlocal key={donates.id} donate={donates}></Donationlocal>)

                }
            </div>
            <div className={ donate.length > 4 ? '' : 'hidden'}>
                <div className={show === donate.length && 'hidden'}>
                <div className='text-center mt-8'>
                
                <button onClick={() =>setshow(donate.length)} className='bg-[#009444] px-5 py-3 text-white rounded-md'> Show All</button>
                </div>
                </div>
            </div>

      </div>
    );
};

export default Donation;