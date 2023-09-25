import { Link } from "react-router-dom";

const Donations = ({ items }) => {


    const { id, picture, category, card_bg_color, title, text_color, category_bg_color } =items;



    return (
      <Link to={`donation-details/${id}`}>
      
            <div  className="mb-5">

                <div style={{ backgroundColor: card_bg_color }} className="rounded-md">
                    <div className="rounded-md">
                        <img className="w-full" src={picture}  alt="" />
                    </div>
                    <div className="pt-3 pl-3">
                       
                            <h2 style={{ color: text_color, backgroundColor:card_bg_color}} className="w-20 rounded mb-3 mt-3 text-center "> {category}</h2>
                    
                            <p style={{color:text_color}} className="text-xl pb-3 font-bold">{title}</p>
                    

                    </div>
                </div>


            </div>
      
      </Link>
    );
};

export default Donations;