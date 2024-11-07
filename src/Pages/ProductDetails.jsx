import { useContext, useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { CartContext } from "../CartProvider";
import { addToCart } from "../localStorage";

const ProductDetails = () => {
  const data = useLoaderData();
  // console.log(data.product_title)
  const { id } = useParams();
  const [product, setProduct] = useState({ });
  const {cart, setCart, wishlist, setWishlist} = useContext(CartContext)
 
  useEffect(() => {
    const p = data.find((item) => item.product_id=== id);
    setProduct(p);
  }, [data, id]);

  
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleAddToCart = (product, ) => {
    if(!cart.some(item => item.product_id === product.product_id)){
      setCart([...cart, product])
    }
    else{
      alert("already exists")
    
    }
  
  }

  const handleAddToWishlist = (product) => {
    if(!wishlist.some(item => item.product_id === product.product_id)){
      setWishlist([...wishlist, product])
    }
    else{
      alert("already added to wishlist")
    }
  }
   

  const {product_image, product_title, price, category, rating, specification, other} = product;

  
  return (
    <div>
    <div className="flex justify-center flex-col items-center space-y-4 my-4">
    <h2 className="text-4xl text-white font-bold">Product Details</h2>
    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    </div>
        
      <div className="h-full">
        <div className="card bg-base-100  shadow-xl flex flex-row items-center w-[90%]  border-2 border-purple-600 h-full p-10  container mx-auto space-x-4">
          <div className="w-[60%]">
          <figure className="w-[100%] mb-6 container mx-auto ">
            <img
              className="object-cover h-full w-full rounded-xl"
              src={product_image}
              alt={product_title}
            />
          </figure>
          </div>
          <div className="card-body border-2 border-gray-700 rounded-xl space-y-6 w-[40%] h-full p-10 my-10">
            <div className="flex flex-col h-full">
              <h2 className="card-title text-4xl font-bold">{product_title}!</h2>
              <p>{other}</p>
              <p className="text-2xl font-semibold">Price: $ {price}</p>
              <p>{category}</p>
              
              <p className="text-white text-xl font-semibold mt-4">Specification: </p>
                <ul>
                {Array.isArray(specification) && specification.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
              
                
                </ul>

                <p className="text-xl font-semibold text-white mt-6">Rating: </p>
                <div className="flex items-center gap-4 justify-centre ">
                
                <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  /> <h2 className="bg-slate-50 opacity-55 rounded-full w-auto px-2 text-black"> {rating}</h2>
                </div>
                  
                
              
                
            </div>

            <div className="card-actions justify-start flex items-center">
            <button onClick={()=> handleAddToCart(product)} className="btn bg-purple-600 rounded-full text-white font-semibold text-xl px-4">
              Add to Cart
               <img src="https://img.icons8.com/?size=24&id=85080&format=png" alt="" />
            </button>

            <button onClick={()=> handleAddToWishlist(product)} className="btn bg-white opacity-55 rounded-full"><img src="https://img.icons8.com/?size=24&id=85038&format=png" alt="" /></button>
          </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default ProductDetails;
