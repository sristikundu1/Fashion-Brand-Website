import BrandCard from "./BrandCard";

const Brands = ({ brands }) => {
    return (
        <div>
            <h2 className="text-4xl font-courgette text-center my-4 text-[#004445]" style={{ textShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>Divine Designery</h2>

            <div className="grid grid-cols-1 ml-14 md:grid-cols-2 ml:16 lg:grid-cols-3 my-8 lg:ml-24 ">
                {
                    brands.map(brand => <BrandCard key={brand.id} brand ={brand}></BrandCard>)
                }
            </div>

        </div>
    );
};

export default Brands;