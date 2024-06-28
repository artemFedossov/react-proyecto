import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    
    const [cart, setCart] = useState([]);

    const handleDelete = (id) => {
        setCart(prod => prod.filter(item => item.id != id)) 
      }

    const calculateAmount = () => {
        let total = 0;
        cart.map( prod => total += prod.amount);

        return total
    }

    const handleCalculate = () => {
        let total = 0;
        cart.map( prod => total = (prod.precio * prod.amount) + total);

        return total
    }

    const emptyCart = () => {
        setCart([])
    }
   
    
    const handleAdd = (product) => {

        setCart( (prod) => {
            const existingProduct = prod.findIndex( (item) => item.id === product.id )
            if (existingProduct >= 0) {
                const updatedCart = prod.map((item, index) =>
                    index === existingProduct ? { ...item, amount: item.amount + 1 } : item
                  );
                  return updatedCart;
            }
            else {
                return [...prod, {...product, amount: 1}]
            }

        }
            
        )
      }

    

    return (
        <CartContext.Provider value={{ cart, handleAdd, handleDelete, handleCalculate, calculateAmount, emptyCart }}>{children}</CartContext.Provider>
    )
}
