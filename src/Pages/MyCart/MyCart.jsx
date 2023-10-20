import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {
    const loadedwishProduct = useLoaderData();

   
    const [wishProducts, setWishProduct] = useState(loadedwishProduct);

    const handleDelete = _id => {
        // console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://new-brand-swart.vercel.app/wishproducts/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {

                        //delete one data use deletedCount > 0
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )

                            //delete from the UI

                            const remainingUsers = wishProducts.filter(cof => cof._id !== _id);// dont delete which id is not matched
                            setWishProduct(remainingUsers);
                        }
                    })

            }
        })

    }
    return (
        <div>
            {/* <h2>mauy cart{loadedwishProduct.length}</h2> */}

            <div className="overflow-x-auto">
                <table className="flex flex-col lg:table">
                    {/* head */}
                    <thead  className="md:font-bold md:text-xl lg:font-bold text-xl">
                        <tr>
                            
                            <th>Product</th>
                            <th>Product Name,Size,Colore</th>
                            <th></th>
                            <th></th>
                            <th>Price</th>
                            <th>Brand Name</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            wishProducts.map(wishProduct => <tr key={wishProduct._id}>
                                
                                <td><img className="w-72 h-64" src={wishProduct.Photo} alt="" /></td>
                                <td>{wishProduct.Name}</td>
                                <td>{wishProduct.Size}</td>
                                <td>{wishProduct.Colour}</td>
                                <td>{wishProduct.Price}</td>
                                <td>{wishProduct.BrandName}</td>
                                <td>{wishProduct.Type}</td>
                                <td>
                                    <button onClick={() => handleDelete(wishProduct._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;