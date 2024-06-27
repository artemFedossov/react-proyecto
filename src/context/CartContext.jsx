import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const handleAdd = (product) => {
        setCart([...cart, product])
      }

    return (
        <CartContext.Provider value={{ cart, handleAdd }}>{children}</CartContext.Provider>
    )
}
