import React, { useContext, useEffect, useState } from "react";
import { products } from "../../../productMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { collection, doc, getDoc } from "firebase/firestore";

import { db } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { agregarAlCarrito } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    let productCollection = collection(db, "productos");
    let refDoc = doc(productCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      setItem({ ...res.data(), id: res.id });
      console.log("Producto cargado:", res.data());
    });
  }, [id]);

  console.log("Item en ItemDetailContainer:", item);

  const onadd = (cantidad) => {
    const productoParaElCarrito = { ...item, cantidad };
    agregarAlCarrito(productoParaElCarrito);
  };

  return <ItemDetail item={item} onadd={onadd} />;
};

export default ItemDetailContainer;
