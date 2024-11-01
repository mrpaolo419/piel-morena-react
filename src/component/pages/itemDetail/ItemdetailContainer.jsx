import React, { useEffect, useState } from "react";
import { products } from "../../../productMock";
import Itemdetail from "./Itemdetail"; // Asegúrate de que la ruta sea correcta

const ItemdetailContainer = () => {
  const [item, setItem] = useState({});
  const id = "1";

  useEffect(() => {
    // Usa la variable `product` correctamente
    const product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, []);

  return <Itemdetail item={item} />; // Asegúrate de que el componente esté importado
};

export default ItemdetailContainer;
