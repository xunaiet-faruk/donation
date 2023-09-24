import { Link } from "react-router-dom";

const Donations = ({item}) => {

    console.log(item)
    const {id, picture, category, card_bg_color, title } =item;
    return (
      <Link to={`donation-details/${id}`}>
      
            <div className="mb-5">

                <div className="card  bg-base-100">
                    <div className="rounded-md">
                        <figure><img src={picture} alt="" /></figure>
                    </div>
                    <div className="pt-3">
                        <h2 className="card-title "> {category}</h2>
                        <p className="text-xl font-bold">{title}</p>

                    </div>
                </div>


            </div>
      
      </Link>
    );
};

export default Donations;