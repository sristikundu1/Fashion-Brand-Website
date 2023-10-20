import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Header/NavBar/NavBar";


const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
           <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/1JtcT7d/error.gif)' }}>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default ErrorPage;