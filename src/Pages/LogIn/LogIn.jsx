import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = () => {

    const { logIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const [success, setSuccess] = useState("");
    const [logINError, setLogInError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLogInError('');
        setSuccess('');

        if ((email, password)) {
            logIn(email, password)
                .then((result) => {
                    console.log(result.user);
                    setSuccess("user loged successfully");

                    navigate(location?.state ? location.state : "/")
                })
                .catch(error => {
                    console.error(error);
                    setLogInError(error.message);
                })
        }

    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/XV0Z96T/login.jpg)' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-[#537188] rounded-md">

                        <form className="card-body" onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl text-[#CBB279]">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your email" name="email" className="lg:w-[500px]   input input-bordered  text-black" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-bold text-xl text-[#CBB279]">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    placeholder="Enter Your password"
                                    className="lg:w-[500px] input input-bordered  text-black" name="password" required />
                                <span className='absolute top-14 right-2' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash className="text-black"></FaEyeSlash> : <FaEye className="text-black"></FaEye>}
                                </span>
                            </div>
                            <p className="mt-3">Do not Have Any Account?  <Link className="font-bold text-[#FFDBAA] underline" to="/register">Register</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#EEEEEE] text-[#125B50]">Login</button>
                            </div>
                        </form>

                        {
                            logINError && <p>{logINError}</p>

                        }
                        {
                            success && <p>{success}</p>

                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;




