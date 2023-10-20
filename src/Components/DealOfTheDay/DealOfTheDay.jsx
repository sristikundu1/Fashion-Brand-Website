import { useEffect, useState } from "react";


const DealOfTheDay = ({ duration }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000);
    }, [time]);

    const getFormattedTime = (miliseconds) => {
        let total_seconds = parseInt(Math.floor(miliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return `${days}: ${hours}: ${minutes}: ${seconds}`;

    }
    return (
        // <div className="flex justify-between bg-[#A6FFF2] p-16 ">
        //     <div className="flex flex-col space-y-7">
        //         <div className="text-center" >
        //             <h2 className="text-3xl text-[#CD5C08] font-courgette mb-4">Flash Sale Extravaganza!</h2>
        //             <p className="text-[#6A9C89] text-left">Get ready for a shopping spree like never before with our exclusive Flash Sale Extravaganza! At ElysianWardrobe, we are turning up the heat on savings with limited-time discounts that are too hot to handle. Do not miss this opportunity to score incredible deals on the latest fashion trends.</p>
        //         </div>
        //         <div className="font-bold text-8xl text-[#89375F] text-center">
        //             {getFormattedTime(time)}

        //         </div>

        //     </div>
        //     <div>
        //         <img className=" rounded-md h-full" src="https://i.ibb.co/HxnC0My/sell.jpg" alt="" />
        //     </div>

        // </div>

        <div className="hero min-h-[850px]" style={{ backgroundImage: 'url(https://i.ibb.co/HxnC0My/sell.jpg)' }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" space-y-7">
                    <h2 className="text-5xl text-[#F8B400] font-courgette mb-4">Flash Sale Extravaganza!</h2>
                    <p className="text-[#F1E3CB] font-semibold text-left text-xl mb-8">Get ready for a shopping spree like never before with our exclusive Flash Sale Extravaganza! At ElysianWardrobe, we are turning up the heat on savings with limited-time discounts that are too hot to handle. Do not miss this opportunity to score incredible deals on the latest fashion trends.</p>
                    <div className="text-4xl text-center md:text-8xl md:text-center lg:font-bold lg:text-9xl mt-6 text-[#FCF8F3] lg:text-center">
                        {getFormattedTime(time)}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealOfTheDay;
