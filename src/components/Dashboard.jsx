import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const { cart, removeFromCart } = useContext(CartContext);
  const { wishlist, removeFromWishlist } = useContext(CartContext);

  const [sortedItems, setSortedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sortedItemsByPrice(activeTab === "cart" ? cart : wishlist);
  }, [activeTab, cart, wishlist]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    sortedItemsByPrice(tab === "cart" ? cart : wishlist);
  };

  const renderItemCard = (item, removeFunction) => (
    <div className="card w-[80%] bg-base-100 shadow-xl my-4 p-4 flex flex-row">
      <img
        src={item.product_image}
        alt={item.product_title}
        className=" h-48 object-cover rounded w-[30%]"
      />
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
          <button
            onClick={() => removeFunction(item.product_id)}
            className="btn  mt-4 items-center"
          >
            <img
              src="https://img.icons8.com/?size=48&id=9lB4p3bBjCNX&format=png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price || 0), 0);
  };

  const calculateTotalPriceWishlist = () => {
    return wishlist.reduce((total, item) => total + (item.price || 0), 0);
  };

  const sortedItemsByPrice = (items) => {
    console.log("hello form sort", items);
    console.log(items.price);
    const products = items.sort((a, b) => b.price - a.price);
    setSortedItems(products);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePurchase = () => {
    toggleModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div>
      <div>
        <Helmet>
          <title>
            Dashboard || Ts Gadgets Express
          </title>
        </Helmet>
      </div>
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
          <button
            onClick={() => handleTabChange("cart")}
            className={`tab tab-xl btn btn-outline text-white text-xl rounded-xl px-8 ${
              activeTab === "cart"
                ? "btn btn-outline focus:bg-white text-white focus:text-purple-700 font-semibold text-xl rounded-xl px-8 tab"
                : ""
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleTabChange("wishlist")}
            className={`tab tab-xl btn btn-outline text-white text-xl rounded-xl px-8 ${
              activeTab === "wishlist"
                ? "btn btn-outline focus:bg-white text-white focus:text-purple-700 font-semibold text-xl rounded-xl px-8 tab"
                : ""
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="flex gap-6 justify-between mr-10 mb-6 my-10">
        <div>
          <h2 className="text-3xl font-bold text-white ml-4">
            {activeTab === "cart" ? "Cart" : "Wishlist"}
          </h2>
        </div>
        <div className="flex gap-10">
          <h3 className="text-3xl font-semibold text-black">
            Total Cost:{" "}
            <span>
              $
              {(activeTab === "cart" && `${calculateTotalPrice()}`) ||
                (activeTab === "wishlist" &&
                  `${calculateTotalPriceWishlist()}`)}
            </span>
          </h3>
          <button
            onClick={() =>
              sortedItemsByPrice(activeTab === "cart" ? cart : wishlist)
            }
            className="btn btn-outline bg-white opacity-55 rounded-full text-purple-700 text-xl font-semibold"
          >
            Sort By Price{" "}
            <img
              className="w-[10%]"
              src="https://img.icons8.com/?size=50&id=21890&format=png"
              alt=""
            />
          </button>
          <button
            onClick={handlePurchase}
            className="btn btn-outline  text-white text-xl font-semibold"
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-6">
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          {(activeTab === "cart" ? cart : wishlist).length > 0 ? (
            sortedItems.map((item) =>
              renderItemCard(
                item,
                activeTab === "cart" ? removeFromCart : removeFromWishlist
              )
            )
          ) : (
            <p className="text-xl text-center">No items in {activeTab}</p>
          )}
        </div>
      </div>
      <div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-box bg-white p-8 rounded-lg shadow-xl flex  flex-col items-center justify-center">
              {" "}
              <img
                src="https://img.icons8.com/?size=48&id=6ruaPLCTqzNl&format=png"
                alt=""
              />
              <h3 className="font-bold text-xl text-black mt-2">
                Payment Successfully
              </h3>
              <p className="py-4 font-2xl">Thanks for Purchasing.</p>
              <p className="py-2">Total Price: ${calculateTotalPrice()}.</p>
              <div className="flex gap-4 justify-center items-center mx-auto bg-purple-700 text-white font-semibold w-[80%] rounded-full mt-2">
                <button
                  className="btn btn-outline w-[100%] rounded-full py-2 text-black"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
