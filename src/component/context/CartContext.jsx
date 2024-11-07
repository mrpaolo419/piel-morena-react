import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const limpiarCart = () => {
    setCart([]);
  };

  const eliminarProducto = (id) => {
    const arrayFiltrado = cart.filter((product) => product.id !== id);
    setCart(arrayFiltrado);
  };

  const getTotal = () => {
    let totalCart = cart.reduce((acc, product) => {
      return acc + product.precio * product.cantidad;
    }, 0);
    return totalCart;
  };

  const data = {
    cart,
    agregarAlCarrito,
    limpiarCart,
    eliminarProducto,
    getTotal,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
