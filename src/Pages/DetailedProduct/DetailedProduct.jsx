import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsFillCartFill, BsClockFill, BsTruck, BsTruckFrontFill, BsStarFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import Swal from "sweetalert2";

const DetailedProduct = () => {


    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const availableSizes = ['Small', 'Medium', 'Large', 'X-Large'];
    const availableColors = ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow', 'Customized'];

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };


    const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNum(randomNumberInRange(1, 100));
    };



    const product = useLoaderData();
    const { _id, name, brandName, type, price, rating, details, photo } = product;


    const handleIconClick = () => {
        const Photo = document.getElementById('photo').getAttribute('src');
        // if (url) {
        //     const Photo = url.getAttribute('src');
        //   }
        const Name = document.getElementById('name').textContent;
        const BrandName = document.getElementById('brandName').textContent;
        const Price = document.getElementById('price').textContent;
        const Size = document.getElementById('size').textContent;
        const Colour = document.getElementById('colour').textContent;
        const Type = document.getElementById('type').textContent;

        const cartProduct = { Photo,Name, BrandName, Price, Size, Colour, Type };
        console.log(cartProduct);

         //data send in the server

         fetch("http://localhost:5000/wishproducts", {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Inside post response", data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Product added to the cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    
                }
            })

    };
    return (
        <div>
            <div className="grid grid-cols-5 gap-9 mt-6 ml-5 mr-5">
                <div className="col-span-3">
                    <img id="photo" className=" w-[800px] h-full" src={photo} alt="" />
                </div>
                <div className=" w-[500px] space-y-4">
                    <h2 id="name" className="text-5xl text-[#285430]  font-courgette my-6">{name}</h2>
                    <h2 className="text-2xl text-[#3D5656]  font-bold">Brand Of : <span id="brandName">{brandName}</span> </h2>
                    <p className="font-medium  text-[#E7B10A] text-xl">Price: <span id="price">{price}</span> </p>
                    <p>{details}</p>
                    <p className="font-bold flex gap-3 items-center space-x-2">Share:<BsFacebook className="text-[#1877f2]"></BsFacebook> <BsInstagram className="text-[#c32aa3]"></BsInstagram><BsLinkedin className="text-[#0a66c2]"></BsLinkedin><BsTwitter className="text-[#1da1f2]"></BsTwitter> </p>

                    <div className="w-full h-[1px] bg-[#1F8A70]"></div>


                    <div className="flex gap-10">
                        <div>
                            <label htmlFor="sizeDropdown" className="font-bold flex items-center gap-1"><BsStarFill className="text-red-600 text-xs"></BsStarFill>Size:</label>
                            <select
                                id="sizeDropdown"
                                value={selectedSize}
                                onChange={handleSizeChange}
                            >
                                <option value="">Select Size</option>
                                {availableSizes.map((size) => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                            <p className="mt-5 font-bold text-[#1C6758]">Selected Size: <span id="size">{selectedSize}</span> </p>
                        </div>

                        <div>
                            <label htmlFor="colorDropdown" className="font-bold flex items-center gap-1"><BsStarFill className="text-red-600 text-xs"></BsStarFill>Color:</label>
                            <select
                                id="colorDropdown"
                                value={selectedColor}
                                onChange={handleColorChange}
                            >
                                <option value="">Select Color</option>
                                {availableColors.map((color) => (
                                    <option key={color} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </select>


                            <p className="mt-5 font-bold text-[#1C6758]">Selected Color: <span id="colour">{selectedColor}</span> </p>
                        </div>

                    </div>
                    <div className="flex gap-10 item-center">
                        <div>
                            <p className="font-bold text-xl" >{num} in stock</p>
                            <button className="border w-28 text-center border-lime-800 " onClick={handleClick}>check Stock</button>
                        </div>
                        <div>
                            <p onClick={handleIconClick} className="flex item-center font-medium text-2xl mt-6 gap-3"> Add To Cart <BsFillCartFill className="text-[#81B214] text-2xl"></BsFillCartFill></p>

                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-[#1F8A70]"></div>
                    <p> <span className="font-bold mr-2">Category:</span> <span id="type">{type}</span> </p>
                </div>
            </div>

            <div className="mt-16 bg-[#F9F8EB] p-5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl text-[#672F2F] text-center h-14 border pt-3 font-courgette mb-9 bg-[#99B19C]">Reviews</h2>
                    <p className="font-bold text-xl mb-3 text-[#285430]">Give Your Valuable Review for {name}</p>
                    <p className="font-medium">It has already {rating} rating</p>


                    <div>
                        <label className="label">
                            <span className="label-text font-bold text-xl text-[#CBB279]">Review</span>
                        </label>
                        <textarea className="border p-3  outline-none border-b-4 rounded" name="review" placeholder="Write Your Review" id="" cols="150" rows="5" required></textarea>
                    </div>
                    <div className="flex gap-4  mb-3">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text font-semibold text-xl text-[#CBB279]">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className=" outline-none border-b-4 input input-bordered w-full " />
                        </div>
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text font-semibold text-xl text-[#CBB279]">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="outline-none border-b-4 input input-bordered w-full" />
                        </div>

                    </div>
                    <input className="btn mt-9 font-courgette bg-[#D8EBB5]  text-[#2C786C] " type="submit" value="Submit" />
                </div>
            </div>

            <div className="mt-16 bg-[#F9F8EB] p-5 pb-12 pt-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl text-[#672F2F] text-center h-14 border pt-3 font-courgette mb-9 bg-[#99B19C]">Shipping & Delivery</h2>
                </div>
                <div className="grid grid-cols-4 gap-5 mt-6 ml-5">
                    <div className="col-span-2">
                        <img className="rounded-md w-[600px] h-full" src="https://i.ibb.co/pdwTQS1/shipping.gif" alt="" />
                    </div>
                    <div className="w-[620px]">
                        <h2 className="font-bold text-3xl mb-3 text-[#285430]">Seamless Shipping and Speedy Delivery for Your Convenience</h2>
                        <p>Experience the epitome of convenience with our shipping and delivery services at [Your Company Name]. We take pride in our commitment to swift, secure, and efficient shipping, ensuring that your orders reach you in a timely manner. With real-time tracking, careful packaging, and dedicated customer support, we are here to make your online shopping experience seamless. Whether you are a local or international customer, we have got you covered. Your satisfaction is our priority, and we look forward to delivering exceptional service with every order you place.</p>

                        <div className="mt-5 space-y-5">
                            <div className="flex justify-between text-xl font-medium text-[#D95858]">
                                <p className="flex items-center gap-2 "><BsClockFill></BsClockFill>Any-time @ Round-the-Clock Delivery</p>
                                <small>free</small>
                            </div>
                            <div className="flex justify-between text-xl font-medium text-[#D95858]">
                                <p className="flex items-center gap-2 "><BsTruck></BsTruck>Standard Shipping & Delivery</p>
                                <small>free</small>
                            </div>
                            <div className="flex justify-between text-xl font-medium text-[#D95858]">
                                <p className="flex items-center gap-2 "><BsTruckFrontFill></BsTruckFrontFill>Quick Shipping & Superfast Delivery</p>
                                <small>free</small>
                            </div>
                            <div className="flex justify-between text-xl font-medium text-[#D95858]">
                                <p className="flex items-center gap-2 "><BiLogoTelegram></BiLogoTelegram>Ultra-Speed Shipping & Delivery</p>
                                <small>free</small>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


        </div >
    );
};

export default DetailedProduct;