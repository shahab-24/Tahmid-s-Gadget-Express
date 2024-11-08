import { useContext, useState } from "react";
import { CartContext } from "../CartProvider";

const Dashboard = () => {
        const [activeTab, setActiveTab] = useState("cart")
        const {cart, removeFromCart} = useContext(CartContext)
        const{ wishlist, removeFromWishlist }= useContext(CartContext)
        const [isSortedAscending, setSortedAscending] = useState(true)
        
        const handleTabChange = (tab) => {
                console.log('hello tab')
                setActiveTab(tab)
        }

        const renderItemCard = (item, removeFunction) => (
                <div className="card w-[80%] bg-base-100 shadow-xl my-4 p-4 flex flex-row">
                  <img src={item.product_image} alt={item.product_title} className=" h-48 object-cover rounded w-[30%]" />
                  <div className="card-body flex flex-row">
                   <div className="flex gap-6 flex-col justify-start items-center w-[50%]">
                   <div>
                   <h2 className="card-title text-start">{item.product_title}</h2>
                   </div>
                   <div className="text-start">
                   <h2 className="card-title">{item.other}</h2>
                   </div>
                  <div className="text-start">
                  <p>Price: ${item.price}</p>
                  </div>
                   </div>
                   <div className="flex items-center justify-between ml-36">
                   <button onClick={() => removeFunction(item.product_id)} className="btn  mt-4 items-center">
                      <img src="https://img.icons8.com/?size=48&id=9lB4p3bBjCNX&format=png" alt="" />
                    </button>
                   </div>
                  </div>
                </div>
              );

              const handleSortedItemsToggle = () => {
                setSortedAscending( ! isSortedAscending)
              }





              const calculateTotalPrice = () => {
                return cart.reduce((total,item) => total + (item.price || 0) , 0)
              }
              const calculateTotalPriceWishlist = () => {
                return wishlist.reduce((total,item) => total + (item.price || 0) , 0)
              }

              const handleSortByPrice = () => {
                setSortedAscending(prev => !prev); 
            };

              const sortedItemsByPrice = (items) => {
                console.log("hello form sort", items)
                console.log(items.price);
                return[...items, items].sort((a, b) => {
                        console.log('Item A:', a.price, 'Item B:', b.price);
                        isSortedAscending  ?  b.price - a.price : a.price - b.price;

                        
                        
                })
                
              }


              const displayedItems = activeTab === "cart" ? sortedItemsByPrice(cart) : sortedItemsByPrice(wishlist);


              
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
      <div className="flex gap-6 justify-between mr-10 mb-6 my-10">
        <div>
        <h2 className="text-3xl font-bold text-white ml-4">{
        activeTab === "cart" ? "Cart" : "Wishlist"}</h2>
        </div>
        <div className="flex gap-10">
        <h3 className="text-3xl font-semibold text-black">Total Cost: <span>
           ${activeTab === "cart" &&  `${calculateTotalPrice()}` || (activeTab === "wishlist" && `${calculateTotalPriceWishlist()}`)}
          </span></h3>
        <button onClick={handleSortByPrice} className="btn btn-outline bg-white opacity-55 rounded-full text-purple-700 text-xl font-semibold">Sort By Price  <img className="w-[10%]" src="https://img.icons8.com/?size=50&id=21890&format=png" alt="" /></button>
        <button className="btn btn-outline  text-white text-xl font-semibold">Purchase</button>
        </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-6">
        {displayedItems.length > 0
          ? displayedItems.map(item => renderItemCard(item, activeTab === "cart" ? removeFromCart : removeFromWishlist))
          : <p className="text-xl text-center">No items in {activeTab}</p>}
      </div>
      {/* <div className="mt-4 flex flex-wrap justify-center gap-6">
        {activeTab === "cart" && (cart.length > 0 ? sortedItemsByPrice(cart).map(item =>renderItemCard(item, removeFromCart)) : "")}

        {
                activeTab === "wishlist" && (wishlist.length > 0 ? sortedItemsByPrice(wishlist).map(item => renderItemCard(item, removeFromWishlist)) : "")
        }
      </div> */}

    
    </div>
  );
};

export default Dashboard;
