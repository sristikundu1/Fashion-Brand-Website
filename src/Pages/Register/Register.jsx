import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {

    const { googleSignIn } = useContext(AuthContext);
    const { register } = useContext(AuthContext);


    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickGoogle = () => {
        googleSignIn().then((result) => {
            console.log(result.user);
        })
    }

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setRegisterError('');
        setSuccess('');

        if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&@? "])[a-zA-Z0-9!#$%&@?]{6,15}$/.test(password)) {
            setRegisterError("please give strong password");
            return;
        }
        else {
            register(email, password).then((result) => {
                console.log(result.user);
                setSuccess("user created successfully");
            })
        }


    }
    return (
        <div className=" lg:w-[900px] p-14 lg:ml-56 bg-[#DFD8CA] my-9">
            <h2 className=" font-courgette font-bold text-xl text-[#004445] text-center my-7" style={{ textShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>Register To ElysianWardrobe</h2>
            <form onSubmit={handleRegister}>
                <div className="w-full flex flex-col">
                    <input className="w-full my-2 p-3  outline-none border-b-4 rounded" placeholder="Your Name" type="text" name="name" id="" required />
                    <input className="w-full my-2 p-3 outline-none border-b-4 rounded" placeholder="Your Email" type="email" name="email" id="" required />
                    <div className='relative'>
                        <input className="w-full my-2 p-3 outline-none border-b-4 rounded"
                            placeholder="Your Password"
                            type={showPassword ? "text" : "password"}
                            name="password" id="" required />
                        <span className='absolute top-6 right-2' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                        </span>
                    </div>

                </div>

                <div className="w-full flex flex-col my-4">
                    <button className="w-full h-12 bg-[#219C90] text-white font-semibold  border rounded-md flex justify-center text-center items-center">Register</button>
                </div>
            </form>
            {
                registerError && <p>{registerError}</p>

            }
            {
                success && <p>{success}</p>

            }

            <div className="w-full flex items-center justify-center relative py-9">
                <div className="w-full h-[1px] bg-[#630000]"></div>
                <p className="text-lg absolute text-[#419197] font-semibold m-4 bg-[#DFD8CA]">OR</p>

            </div>

            <Link to="/">
                <button onClick={handleClickGoogle} className="btn btn-outline w-full capitalize text-[#183D3D] mb-5">
                    <FaGoogle className="text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></FaGoogle>
                    Login With Google
                </button>

            </Link>

            <div className="w-full flex items-center justify-center">
                    <p className="text-sm font-normal">Already Have An Account? <Link className="font-bold text-[#176B87] underline" to="/login">Log In</Link> </p>
                </div>
        </div>
    );
};

export default Register;