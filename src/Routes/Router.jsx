import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoutes from "./PrivateRoutes";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import DetailedProduct from "../Pages/DetailedProduct/DetailedProduct";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/brand.json")
            },
            {
                path: "/addproduct",
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: "products/updateproduct/:id",
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://new-brand-2no4d40p9-sristikundu2468-gmailcom.vercel.app/products/updateproduct/${params.id}`)
            },
            {
                path: "products/productdetails/:id",
                element:<PrivateRoutes><DetailedProduct></DetailedProduct></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://new-brand-2no4d40p9-sristikundu2468-gmailcom.vercel.app/products/productdetails/${params.id}`)
            },
            {
                path: "/mycart",
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: () => fetch("https://new-brand-2no4d40p9-sristikundu2468-gmailcom.vercel.app/wishproducts")

            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                // path: "/brandproducts",
                path:"/brandproducts/:brandName",
                element: <BrandProducts></BrandProducts>,
                loader:({params}) => fetch(`https://new-brand-2no4d40p9-sristikundu2468-gmailcom.vercel.app/products/${params.brandName}`)
                // loader: () => fetch("https://new-brand-swart.vercel.app/products")
            }
        ]
    }
])

export default Router;