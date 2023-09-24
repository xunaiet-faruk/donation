import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Singledetails from "./Singledetails";


const Donationdetails = () => {
    const [cards, setcards] = useState({});

    const single =useParams();  
   const donationdetails =useLoaderData();
 


   useEffect(()=>{


    const findid =donationdetails.find(card => card.id == single.id)
    setcards(findid)


   },[single.id, donationdetails])


    return (
        <div>
            
<Singledetails cards={cards}></Singledetails>
          
        </div>
    );
};

export default Donationdetails;