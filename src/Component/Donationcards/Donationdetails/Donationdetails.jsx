import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Singledetails from "./Singledetails";
// jjjjjjjjjjjjjjjjj
const Donationdetails = () => {
    const [cards, setCards] = useState({});
    const params = useParams();
    const donationdetails = useLoaderData();
    useEffect(() => {

        const findid = donationdetails?.find(card => card.id == params.id)
        setCards(findid)
    }, [params.id, donationdetails])

    return (
        <div>

            <Singledetails cards={cards}></Singledetails>

        </div>
    );
};

export default Donationdetails;