import { Button, Input, CircularProgress } from "@mui/material";
import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../context/cartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import "./checKout.css";

const ChecKout = () => {
  const [user, setUser] = useState({ name: "", telefono: "", email: "" });
  const { cart, getTotal, limpiarCart } = useContext(CartContext);
  const [ordenId, setOrdenId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let total = getTotal();
    const orden = {
      buyer: user,
      items: cart,
      total: total,
    };
    let refCollection = collection(db, "ordenes");
    addDoc(refCollection, orden)
      .then((res) => {
        setOrdenId(res.id);
        limpiarCart();
      })
      .finally(() => {
        setLoading(false);
      });

    orden.items.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.cantidad,
      });
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="checkout-form">
      {ordenId ? (
        <h1>Gracias por su compra, número de orden: {ordenId}</h1>
      ) : loading ? (
        <div>
          <CircularProgress />
          <p>Procesando su orden...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="name"
            required
          />
          <Input
            type="text"
            placeholder="Teléfono"
            onChange={handleChange}
            name="telefono"
            required
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            required
          />
          <Button type="submit">Comprar</Button>
        </form>
      )}
    </div>
  );
};

export default ChecKout;
