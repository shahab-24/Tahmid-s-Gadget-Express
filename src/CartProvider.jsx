import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

        const [cart, setCart] = useState([]);
        const [wishlist, setWishlist] = useState([])
        return (
                <CartContext.Provider value={{cart, setCart, wishlist, setWishlist}}>

                        {children}
                        
                </CartContext.Provider>
        );
};

export default CartProvider;