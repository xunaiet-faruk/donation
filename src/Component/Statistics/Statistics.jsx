import { useEffect, useState } from "react";
import PieChartStyle from "./PieChart";
import { getData } from "../Localstore/Localstore";
import { useLoaderData } from "react-router-dom";
const Statistics = () => {
    const [donation,setDonation] = useState(0)
    const [totalDonation,setTotalDonation] = useState(0)
  const Piedata =useLoaderData();

    useEffect(()=>{
        const getDonationId =getData();
        setDonation(getDonationId.length);
        const donationAll = Piedata.length - getDonationId.length;
        setTotalDonation(donationAll)
    }, [Piedata])

   

    return (
        <div className=" max-w-screen-xl mx-auto gap-4 px-6">
           
           <PieChartStyle donation={donation} totalDonation={totalDonation}></PieChartStyle>
        </div>
    );
};

export default Statistics;