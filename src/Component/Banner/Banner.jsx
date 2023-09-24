

const Banner = () => {
    return (
        <div>
            <div className="hero  h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/nLB0zB1/women-support-group.jpg)' }}>
                <div className="hero-overlay bg-opacity-90 bg-white"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-black">
                        <h1 className="text-5xl mb-10 font-bold">I Grow By Helping People In Need</h1>
                               <div className="flex justify-center items-center">
                                
                            <input type="text" placeholder="Search here...." className="input rounded-tr-none rounded-br-none input-bordered  w-full max-w-xs" />
          
                            <button className="btn rounded-tl-none rounded-bl-none text-white bg-[#FF444A] px-5">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;