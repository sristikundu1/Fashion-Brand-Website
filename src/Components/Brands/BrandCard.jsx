import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
    const { brandName, brandImage } = brand || {}


    return (
        <div>
            <Link to={`/brandproducts/${brandName}`}>
            {/* <Link to="/brandproducts"> */}
            <div className="card w-80 h-96 mb-5 bg-[#F2F2F2] shadow-xl">
                <figure className="border h-full "><img className="w-full h-full" src={brandImage} alt="Shoes" /></figure>
                <div className=" p-6 px-6 py-14 md:px-12">
                    
                    <h2 className="card-title font-extrabold text-3xl text-center text-[#2F5D62]">{brandName}</h2>

                </div>
            </div>
            </Link>

        </div>

        
    );
};

export default BrandCard;



