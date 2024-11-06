import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import AllCategoriesCard from "./AllCategoriesCard";
import Footer from "./Footer";

const Home = () => {
        const categories = useLoaderData();
        
        return (
                <div className="mx-auto">
                        
                        <div className="flex justify-center my-12 flex-col items-center space-y-10">
                        <h1 className="text-7xl font-bold text-white gap-6">
                        Upgrade Your Tech Accessorize <br />
                        with Gadget Heaven Accessories
                        </h1>
                        <p>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary bg-white rounded-full px-6">Shop Now</button>
                        </div>
                        <div className="">
                        <Banner></Banner>
                        
                        
                        
                        </div>
                        <div className="mt-[550px] container mx-auto ">
                        
                        <AllCategoriesCard categories={categories.categories}></AllCategoriesCard>
                        </div>
                        <div className="mt-16 w-[100%]">
                        <Footer></Footer>
                        </div>
                </div>
        );
};

export default Home;