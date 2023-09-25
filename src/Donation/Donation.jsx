import React, { useEffect, useState } from 'react';
import Donationlocal from '../Component/Donationcards/Donationdetails/Donationlocal';
import { getData } from '../Component/Localstore/Localstore';
import { useLoaderData } from 'react-router-dom';


const Donation = () => {
 
    const [storageD, setStorageD] = useState([])
    const [showAll, setShowAll] = useState(false);

    const founds = useLoaderData();

    useEffect(() => {
        const storedId = getData();
        if (founds.length > 0) {
            const findDonate = founds.filter(found => storedId.includes(found.id))
            setStorageD(findDonate)

        }
    }, [founds])


    return (
     
  <div className="max-w-screen-xl mx-auto my-20">
            <div className="grid md:grid-cols-2 gap-6">
                {
                    showAll ? storageD.map(donation => <Donationlocal key={donation.id} donation={donation}></Donationlocal>)
                        :
                        storageD.slice(0, 4).map(donation => <Donationlocal key={donation.id} donation={donation}></Donationlocal>)
                }

            </div>

            <div className={`flex justify-center mt-10 ${showAll ? 'hidden' : ''}`}>
                {
                    storageD.length > 4 && <button onClick={() => setShowAll(!showAll)} className="bg-[#009444] px-5 py-3 text-white rounded-lg">
                        {showAll ? '' : 'See All'}
                    </button>
                }
            </div>
        </div>

    );
};

export default Donation;