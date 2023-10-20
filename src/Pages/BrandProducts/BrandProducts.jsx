import { useLoaderData } from "react-router-dom";
import BrandProductsCard from "./BrandProductsCard";


const BrandProducts = () => {
    const products = useLoaderData()
    return (
        <div>
           

            <div className="carousel w-full h-[600px]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/ccr10T5/ad5.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/T0KBJXz/ad6.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/SNWfpYY/ad3.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/GchXh3C/ad1.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <div className="grid grid-cols-1 ml-6 md:grid-cols-2 gap-5 md:ml-1 lg:grid-cols-2 lg:ml-48  mt-9 max-w-6xl mx-auto">
                {
                   products.length && products?.map(product =><BrandProductsCard
                        key={product._id}
                        product={product}
                    ></BrandProductsCard>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;