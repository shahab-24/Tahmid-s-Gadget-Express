import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.product_id !== productId));
  }


  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.product_id !== productId));
  }

//   useEffect(()=> {
//         const savedCart = JSON.parse(localStorage.getItem("cart")) || []
//         const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || []
//         setCart(savedCart);
//         setWishlist(savedWishlist)

// //   },[])
// useEffect(() => {
//         try {
//             const savedCart = localStorage.getItem("cart") ;
           
//             const savedWishlist = localStorage.getItem("wishlist");
//             setCart(savedCart);
//             setWishlist(savedWishlist);
//             return savedCart ? JSON.parse(savedCart) : [] ;
//             return savedWishlist ? JSON.parse(savedWishlist) : [] ;
//         } catch (error) {
//             console.error("Failed to parse cart or wishlist data:", error);
//             setCart([]);  
//             setWishlist([]);
//         }
//     }, []);

//   useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart))
//   },[cart])

//   useEffect(() => {
//         localStorage.setItem('wishlist', JSON.stringify(wishlist))
//   },[wishlist])

  return (
    <CartContext.Provider value={{ cart, setCart, wishlist, setWishlist, removeFromCart, removeFromWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
