import { useLoaderData } from "react-router-dom";
import Brands from "../../Components/Brands/Brands";
import Banner from "../../Components/Header/Banner/Banner";
import PageServices from "../../Components/PageServices/PageServices";
import DealOfTheDay from "../../Components/DealOfTheDay/DealOfTheDay";
import { useState } from "react";
import { BsMoon, BsFillBrightnessHighFill } from "react-icons/bs";


const Home = () => {
    const brands = useLoaderData();

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const pageStyle = {
        backgroundColor: isDarkMode ? '#222' : '#fff',
    };
    return (
        <div  style={pageStyle} className=" text-black"
        >
           
            <div className="relative">
                <Banner></Banner>
                <PageServices></PageServices>
                <Brands brands={brands}></Brands>
                <DealOfTheDay duration={2 * 24 * 60 * 60 * 1000}></DealOfTheDay>


                <button
                    onClick={toggleDarkMode}
                    className="inline-block p-2 rounded-full hover:bg-gray-300 absolute top-[-54px] right-4"
                >
                    {isDarkMode ? <BsFillBrightnessHighFill></BsFillBrightnessHighFill> : <BsMoon></BsMoon>}
                </button>

            </div>



        </div>
    );
};

export default Home;





