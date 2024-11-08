import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="">
      {/* <div className="flex justify-center my-12 flex-col items-center space-y-10 ">
        <h1 className="text-7xl font-bold text-white gap-6">
          Upgrade Your Tech Accessorize <br />
          with Gadget Heaven Accessories
        </h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to="/dashboard">
          <button className="btn btn-primary bg-white rounded-full px-6">
            Shop Now
          </button>
        </Link>
      </div> */}
      <div className=" absolute -top-3/8 w-[80%] left-24">
        <div
          className="hero flex justify-center items-center mx-auto min-h-[500px] w-[80%] rounded-3xl border-t-white-400 border-t-8"
          style={{
            backgroundImage: `url(${bannerImg}`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
