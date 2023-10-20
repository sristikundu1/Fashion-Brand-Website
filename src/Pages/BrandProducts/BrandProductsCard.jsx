import { Link } from "react-router-dom";


const BrandProductsCard = ({ product }) => {

    const { _id, name, brandName, type, price, rating, details, photo } = product || {};
    return (
        <div>

            <div className="card w-96 h-[500px] mb-5 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 h-full ">
                    <img src={photo} alt="Shoes" className="rounded-xl h-full w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="flex justify-between gap-16 font-bold text-xl">
                        <h2>Brand:{brandName}</h2>
                        <h2>{type}</h2>
                    </div>
                    <p>{price}Taka</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions">
                        <Link to={`/products/productdetails/${_id}`}>
                            <button className="btn bg-[#219C90] text-white">Details</button>
                        </Link>
                        <Link to={`/products/updateproduct/${_id}`}>
                            <button className="btn bg-[#219C90] text-white">Update</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BrandProductsCard;