
import { useEffect, useState } from "react";
import Donations from "../Component/Donationcards/Donations";


const Home = () => {

    const [donets, setDonates] = useState([]);

    const handlebtn = e => {
        e.preventDefault();
        const inputValue = e.target.text.value;
        const searchData = donets.filter(data => data.category === inputValue)
        setDonates(searchData)
    }

    useEffect(() => {

        fetch('../../../public/donation.json')
            .then(res => res.json())
            .then(data => setDonates(data))

    }, [])


    return (
        <div>
            <div>
                <div className="hero  h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/D5DQdvr/383314042-993914288548846-1091373714914908118-n.png)' }}>
                    <div className="hero-overlay bg-opacity-90 bg-[#FFFFFFF2]"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="text-black">
                            <h1 className="text-5xl mb-10 font-bold">I Grow By Helping People In Need</h1>
                            <form onSubmit={handlebtn} className="flex justify-center items-center">
                                <input type="text" placeholder="Search here...." name="text" className="input input-bordered rounded-tr-none rounded-br-none md:w-[470px]" />
                                <input className="btn bg-[#FF444A] text-white rounded-tl-none rounded-bl-none" type="submit" value="Search" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="grid lg:grid-cols-4 md:grid-cols-2  max-w-screen-xl mx-auto mt-20 gap-5">

                {

                    donets.map(items => <Donations key={items.id} items={items}></Donations>)

                }
            </div>
           
        </div>
    );
};

export default Home;