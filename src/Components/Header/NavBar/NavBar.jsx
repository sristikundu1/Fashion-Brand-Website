import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BsPersonCircle } from "react-icons/bs";

const NavBar = () => {

   

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })

    }

    const navLinks = <>
        <ul className="flex gap-9 text-lg font-semibold">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#C64756] bg-[#F6C7C7] italic" : ''
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/addproduct"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#C64756] bg-[#F6C7C7] italic" : ''
                    }
                >
                    Add Product
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/mycart"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "text-[#C64756] bg-[#F6C7C7] italic" : ''
                    }
                >
                    My Cart
                </NavLink>
            </li>
        </ul>

        {/* <NavLink className="mr-9 text-lg font-semibold" to="/">Home</NavLink> */}
        {/* <NavLink className="mr-9 text-lg font-semibold" to="/addproduct">Add Product</NavLink>
        <NavLink className="mr-9 text-lg font-semibold" to="/mycart">My Cart</NavLink> */}
    </>
    return (
        <div>
            <div className="navbar bg-[#F9F9F9] px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex ">
                        <img className="w-10" src="https://i.ibb.co/3Ct59Kb/download.jpg" alt="" />
                        <h2 className="btn btn-ghost font-courgette font-bold text-xl text-[#01937C]">ElysianWardrobe</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <p>{user?.displayName}</p>
                            <img className="w-12 mx-2 rounded-full" src={user?.photoURL} alt="" />

                            <button onClick={handleLogOut} className="bg-[#219C90]  border rounded-lg h-10 w-28 py-1 px-9 font-semibold text-white">LogOut</button>

                        </>
                            :
                            <>
                                <BsPersonCircle className="text-5xl mr-4 text-[#C37B89]"></BsPersonCircle>
                                <Link to="/login">
                                    <button className="btn bg-[#91C788] text-white">Login</button>
                                </Link>
                            </>
                    }
                </div>

               
            </div>
        </div>
    );
};

export default NavBar;
