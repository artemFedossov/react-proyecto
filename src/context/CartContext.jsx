import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleDelete = (id) => {
    setCart((prod) => prod.filter((item) => item.id != id));
  };

  const calculateAmount = () => {
    return cart.reduce((total, prod) => total + prod.amount, 0);
  };

  const calculate = () => {
    let total = 0;
    cart.map((prod) => (total = prod.precio * prod.amount + total));

    return total;
  };

  const emptyCart = () => {
    setCart([]);
  };

  const handleAdd = (product) => {
    setCart((prod) => {
      const existingProduct = prod.findIndex((item) => item.id === product.id);
      if (existingProduct >= 0) {
        const updatedCart = prod.map((item, index) =>
          index === existingProduct
            ? { ...item, amount: item.amount + 1 }
            : item
        );
        return updatedCart;
      } else {
        return [...prod, { ...product, amount: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAdd,
        handleDelete,
        calculate,
        calculateAmount,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/*Se utiliza 'createContext' de React para crear un contexto llamado 'CartContext', que proporciona el estado y funciones relacionadas con el carrito de compras (cart, handleAdd, handleDelete, calculate, calculateAmount, emptyCart). 

Define varias funciones para manejar el carrito:
  handleDelete: Elimina un producto del carrito según su id.
  calculateAmount: Calcula la cantidad total de productos en el carrito sumando los valores de 'amount' de cada producto.
  calculate: Calcula el monto total de la compra sumando el precio de cada producto multiplicado por su cantidad (amount).
  emptyCart: Vacía completamente el carrito.
  handleAdd: Añade un producto al carrito. Si el producto ya está en el carrito, aumenta su cantidad; de lo contrario, añade el producto con una cantidad inicial de 1.
*/