
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";
import Swal from "sweetalert2";

const Footer = () => {

    const handleSubscribe = e => {
        e.preventDefault();

        const form = e.target;
       
      
        const email = form.email.value;


        const userEmail = { email };
        console.log(userEmail);

        //data send in the server

        fetch("https://new-brand-swart.vercel.app/send-email", {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(userEmail)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Inside post response", data);
                if (data.success) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Thank You For Your subscription',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                }
                form.reset();
            })
    };

    return (
        <div>
            <footer className="footer p-10 bg-[#8BCFCC] text-base-content font-semibold">
                <nav className="">
                    <header className="footer-title text-[#004225]">Services</header>
                    <a className="link link-hover text-[#FFFFDD]">Branding</a>
                    <a className="link link-hover text-[#FFFFDD]">Design</a>
                    <a className="link link-hover text-[#FFFFDD]">Marketing</a>
                    <a className="link link-hover text-[#FFFFDD]">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title text-[#004225]">Follow Us Now </header>
                    <a className="link link-hover flex gap-2 justify-center items-center text-[#FFFFDD]"><BsFacebook className="text-[#4267B2]"></BsFacebook> Facebook</a>
                    <a className="link link-hover flex gap-2 justify-center items-center text-[#FFFFDD]"><BsTwitter className="text-[#1da1f2]"></BsTwitter> Twitter</a>
                    <a className="link link-hover flex gap-2 justify-center items-center text-[#FFFFDD]"><BsInstagram className="text-[#c32aa3]"></BsInstagram>Instagram</a>
                    <a className="link link-hover flex gap-2 justify-center items-center text-[#FFFFDD]"><BsPinterest className="text-[#bd081c]"></BsPinterest> Pinterest</a>
                </nav>
                <nav>
                    <header className="footer-title text-[#004225]">Legal</header>
                    <a className="link link-hover text-[#FFFFDD]">Terms of use</a>
                    <a className="link link-hover text-[#FFFFDD]">Privacy policy</a>
                    <a className="link link-hover text-[#FFFFDD]">Cookie policy</a>
                </nav>
                <form onSubmit={handleSubscribe}>
                    <header className="footer-title text-[#004225]">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-[#FFFFDD]">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="email" placeholder="username@email.com" name="email" className="input input-bordered w-full pr-16" required/>
                            {/* <button  type="submit" className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-[#016A70]">Subscribe</button> */}
                            <input className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-[#016A70]"type="submit" value="Subscribe" />
                        </div>
                    </fieldset>
                </form>

               
            </footer>
            <footer className="footer footer-center p-4 bg-[#AEE8E6] text-base-content">
                    <aside>
                        <p className="text-[#1572A1] font-courgette">Copyright © 2023 - All right reserved by ElysianWardrobe</p>
                    </aside>
                </footer>
        </div>
    );
};

export default Footer;