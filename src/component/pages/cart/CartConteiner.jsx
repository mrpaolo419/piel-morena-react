import React, { useContext } from "react";

import Cart from "./Cart";
import { CartContext } from "../../contextCart/cartContext";

const CartContainer = () => {
  const { cart, eliminarProducto, limpiarCart, getTotal } =
    useContext(CartContext);
  let total = getTotal();
  return (
    <Cart
      cart={cart}
      eliminarProducto={eliminarProducto}
      limpiar={limpiarCart}
      total={total}
    />
  );
};

export default CartContainer;
