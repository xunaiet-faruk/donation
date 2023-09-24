import { useEffect, useState } from "react";
import Donations from "./Donations";



const Donationcards = () => {

    const [donets, setdonates] =useState([]);
    useEffect(()=>{

        fetch('donation.json')
        .then(res => res.json())
        .then(data => setdonates(data))

    },[])

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2  max-w-screen-xl mx-auto mt-20 gap-5">
           
           {

donets.map(items =><Donations key={items.id} item={items}></Donations>)

           }
        </div>
    );
};

export default Donationcards;