

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[650px]">


                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero  bg-[url(https://i.ibb.co/kBBsv3S/covver1.gif)]">
                        {/* <div className="hero-overlay bg-opacity-40"></div> */}

                        {/* <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-12 text-5xl font-bold text-[#AACDBE] ">Fashion is the Armor to Survive <br /> the Reality of Everyday Life.</h1>
                                <p className="mb-5 text-[#F38181] font-bold">Embrace the transformative power of fashion and armor yourself with confidence for life is adventures.</p>

                            </div>
                        </div> */}
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero bg-[url(https://i.ibb.co/cc0jNXZ/banner2.jpg)]">
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-12 text-5xl font-bold text-[#AACDBE]">Slay the Day, <br />  Your Way.</h1>
                                <p className="mb-5 text-[#F38181] font-bold">Step out in style and slay every day with our trendsetting fashion and apparel. Be unapologetically you.</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero bg-[url(https://i.ibb.co/mBvdP6J/covver2.gif)]">
                        {/* <div className="hero-overlay bg-opacity-40"></div> */}
                        <div className="hero-content text-center text-neutral-content">

                            <div className="max-w-md">
                                <h1 className="mb-12 text-5xl font-bold text-[#AACDBE]">Elegance is Timeless,  <br /> Fashion is Forever.</h1>
                                <p className="mb-5 text-[#F38181] font-bold">Discover the timeless elegance of our fashion and apparel. It is the key to a forever fashionable you.</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero bg-[url(https://i.ibb.co/4287KSt/banner-4.jpg)]">
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-12 text-5xl font-bold text-[#AACDBE]">Your Style,  <br /> Your Statement.</h1>
                                <p className="mb-5 text-[#F38181] font-bold">Unleash your unique style and make a statement with our curated fashion and apparel pieces. It is all about you!</p>

                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;