import React from "react";
import "./Cart.css";

const Cart = ({ cart, eliminarProducto, limpiar, total }) => {
  return (
    <div>
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
      <div>Total = $ {total}</div>
    </div>
  );
};

export default Cart;
