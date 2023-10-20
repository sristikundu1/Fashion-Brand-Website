import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();

    const { _id, name, brandName, type, price, rating, details, photo } = product;


    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const photo = form.photo.value;


        const updateProduct = { name, brandName, type, price, rating, details, photo };
        console.log(updateProduct);

        //data send in the server

        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Inside post response", data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div>
            <div className="card card-compact  shadow-xl bg-[#F4F3F0] p-16 mt-12 mx-44 mb-24 w-[1000px]">
                <figure><img className="w-full" src="https://i.ibb.co/hgbBjhd/update.gif" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-5xl text-[#004445] text-center mb-5 font-courgette" style={{ textShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>Update Information Of:{name}</h2>
                    <form onSubmit={handleUpdateProduct}>
                        <div className="flex gap-4  mb-3">
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Enter product name" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Brand Name</span>
                                </label>
                                <input type="text" name="brand" defaultValue={brandName} placeholder="Enter brand name " className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-3">
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Type</span>
                                </label>
                                <input type="text" name="type" defaultValue={type} placeholder="Enter product type" className="input input-bordered w-full " />
                            </div>
                         
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="Enter product price" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-3">
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Rating</span>
                                </label>
                                <input type="text" name="rating" defaultValue={rating} placeholder="Enter product rating" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Short description</span>
                                </label>
                                <input type="text" name="details"  defaultValue={details} placeholder="Enter product details" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-3">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Photo</span>
                                </label>
                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full " />
                            </div>

                        </div>


                        <input type="submit" value="Submit" className="btn btn-block mt-9 font-courgette bg-[#D8EBB5]  text-[#2C786C] " />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;