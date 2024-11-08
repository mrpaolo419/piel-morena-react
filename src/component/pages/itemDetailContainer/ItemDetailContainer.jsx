import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import { db } from "../../../firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { agregarAlCarrito } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ ...docSnap.data(), id: docSnap.id });
        } else {
        }
      } catch (error) {}
    };

    if (id) {
      getProduct();
    }
  }, [id]);

  const onadd = (cantidad) => {
    const productoParaElCarrito = { ...item, cantidad };
    agregarAlCarrito(productoParaElCarrito);
  };

  return <ItemDetail item={item} onadd={onadd} />;
};

export default ItemDetailContainer;
