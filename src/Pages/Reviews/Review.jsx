// import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Review = () => {
    const reviewProducts = useLoaderData();

   
    // const [reviewProducts, setReviewProducts] = useState(loadedReviewProducts);
    return (
        <div>

<div className="overflow-x-auto">
                <table className="flex flex-col lg:table">
                    {/* head */}
                    <thead  className="md:font-bold md:text-xl lg:font-bold text-xl">
                        <tr>
                            
                           
                            <th>Product Name</th>
                            <th>Reviewed By</th>
                            <th>Email</th>
                            <th>Review</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            reviewProducts.map(reviewProduct => <tr key={reviewProduct._id}>
                                
                                {/* <td><img className="w-72 h-64" src={reviewProduct.Photo} alt="" /></td> */}
                                <td>{reviewProduct.Product}</td>
                                <td>{reviewProduct.userName}</td>
                                <td>{reviewProduct.userEmail}</td>
                                <td>{reviewProduct.review}</td>
                                
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Review;