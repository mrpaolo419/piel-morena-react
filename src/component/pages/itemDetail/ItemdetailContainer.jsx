import React, { useEffect, useState } from "react";
import { products } from "../../../productMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const product = products.find((product) => product.id === parseInt(id));
    if (product) {
      setItem(product);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
