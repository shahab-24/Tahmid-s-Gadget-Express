import bannerImg from '../assets/banner.jpg'
const Banner = () => {
        return (
                <div className=' absolute -top-3/8 w-[80%] left-28'>
                        <div
  className="hero flex justify-center items-center mx-auto min-h-[500px] w-[80%] rounded-3xl border-t-white-400 border-t-8"
  style={{
    backgroundImage: `url(${bannerImg}`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    
  </div>
</div>

                </div>
        );
};

export default Banner;