import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";
import Swal from "sweetalert2";

const Cart = ({ cart, eliminarProducto, limpiar, total }) => {
  const handleCheckout = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "¡Oops!",
        text: "Agrega productos al carrito para poder comprar.",
        confirmButtonColor: "#ff69b4",
      });
    }
  };

  return (
    <div className="carritos">
      {cart.length === 0 ? (
        <h2 className="empty-cart">El carrito está vacío</h2>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
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
        <button onClick={handleCheckout}>Finalizar Compra</button>
      </Link>
      <div>Total = $ {total}</div>
    </div>
  );
};

export default Cart;
