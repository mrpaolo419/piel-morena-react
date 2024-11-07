import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { collection, doc, getDoc } from "firebase/firestore";

import { db } from "../../../firebaseConfig";
import ItemDetail from "./Itemdetail";

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
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error fetching document: ", error);
      }
    };

    if (id) {
      getProduct();
    }
  }, [id]);

  console.log("Item en ItemDetailContainer:", item);

  const onadd = (cantidad) => {
    const productoParaElCarrito = { ...item, cantidad };
    agregarAlCarrito(productoParaElCarrito);
  };

  return <ItemDetail item={item} onadd={onadd} />;
};

export default ItemDetailContainer;
