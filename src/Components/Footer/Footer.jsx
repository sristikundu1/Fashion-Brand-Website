import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";

const Footer = () => {
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
                <form>
                    <header className="footer-title text-[#004225]">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-[#FFFFDD]">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-[#016A70]">Subscribe</button>
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