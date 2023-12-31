import { BsHeadset, BsTruck,  } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TiArrowLoopOutline } from "react-icons/ti";

const PageServices = () => {
    return (
        <div className="ml-36 md:flex md:justify-around md:ml-20 md:my-20 md:max-w-6xl md:mx-auto md:px-16 lg:flex gap-7 justify-around lg:ml-28 lg:my-20 lg:max-w-6xl lg:mx-auto lg:px-16 ">
            <div>
                <BsTruck className="text-6xl mb-5 text-[#205E61] ml-7"></BsTruck>
                <h2 className=" text-2xl text-[#539092] ">Free Shipping</h2>
            </div>
            <div>
               <TiArrowLoopOutline className="text-6xl mb-5 text-[#205E61] ml-7"></TiArrowLoopOutline>
                <h2 className=" text-2xl text-[#539092] ">Easy Return</h2>
            </div>
            <div>
               <BsHeadset className="text-6xl mb-5 text-[#205E61] ml-7"></BsHeadset>
                <h2 className=" text-2xl text-[#539092] ">Customer Service</h2>
            </div>
            <div>
                <RiSecurePaymentFill className="text-6xl mb-5 text-[#205E61] ml-7"></RiSecurePaymentFill>
                <h2 className=" text-2xl text-[#539092] ">Secure Payment</h2>
            </div>
            
            
        </div>
    );
};

export default PageServices;
