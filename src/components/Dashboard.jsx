import { useContext, useState } from "react";
import { CartContext } from "../CartProvider";

const Dashboard = () => {
        const [activeTab, setActiveTab] = useState("cart")
        const {cart, removeFromCart} = useContext(CartContext)
        const{ wishlist, removeFromWishlist }= useContext(CartContext)
        
        const handleTabChange = (tab) => {
                console.log('hello tab')
                setActiveTab(tab)
        }

        const renderItemCard = (item, removeFunction) => (
                <div className="bg-base-100 shadow-xl my-4 p-4 flex flex-row">
                  <img src={item.product_image} alt={item.product_title} className=" h-48 object-cover rounded" />
                  <div className="card-body flex flex-row">
                   <div className="flex gap-4 justify-between items-center">
                   <h2 className="card-title">{item.product_title}</h2>
                   <p>Price: ${item.price}</p>
                   </div>
                   <div>
                   <button onClick={() => removeFunction(item.product_id)} className="btn bg-red-600 text-white mt-4 items-center">
                      Remove
                    </button>
                   </div>
                  </div>
                </div>
              );
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-60 bg-purple-700">
        <div>
          <h3 className="text-4xl text-white font-bold my-8 text-center">
            Dashboard
          </h3>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="flex gap-6 my-10">
          <button onClick={() => handleTabChange("cart")} className={`tab tab-xl btn btn-outline text-white text-xl rounded-xl px-8 ${activeTab === "cart" ? "btn btn-outline focus:bg-white text-white focus:text-purple-700 font-semibold text-xl rounded-xl px-8 tab" : ""}`}>
            Cart
          </button>
          <button onClick={() => handleTabChange("wishlist")} className={`tab tab-xl btn btn-outline text-white text-xl rounded-xl px-8 ${activeTab === "wishlist" ? "btn btn-outline focus:bg-white text-white focus:text-purple-700 font-semibold text-xl rounded-xl px-8 tab" : ""}`}>
                Wishlist
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-6">
        {activeTab === "cart" && (cart.length > 0 ? cart.map(item =>renderItemCard(item, removeFromCart)) : "")}

        {
                activeTab === "wishlist" && (wishlist.length > 0 ? wishlist.map(item => renderItemCard(item, removeFromWishlist)) : "")
        }
      </div>

    
    </div>
  );
};

export default Dashboard;
