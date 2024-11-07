import React from "react";
import "./Cart.css";
import ChecKout from "../checkout/ChecKout";
import { Link } from "react-router-dom";

const Cart = ({ cart, eliminarProducto, limpiar, total }) => {
  return (
    <div className="carritos">
      {cart.length === 0 ? (
        <h2 className="empty-cart">El carrito está vacío</h2>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            {" "}
            {/* Asegúrate de usar product.id aquí */}
            <img src={product.imagenUrl} alt={product.articulo} />
            <div className="product-info">
              <h2>{product.marca}</h2>
              <p>Artículo: {product.articulo}</p>
              <p>Precio: ${product.precio}</p>
              <p>Cantidad: {product.cantidad}</p>
            </div>
            <button
              className="remove-button"
              onClick={() => eliminarProducto(product.id)}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
      <button onClick={limpiar}>Limpiar carrito</button>
      <Link to="/checKout">
        <button onClick={ChecKout}>Finalizar Compra</button>
      </Link>
      <div>Total = $ {total}</div>
    </div>
  );
};

export default Cart;
