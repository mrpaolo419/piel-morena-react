import { useState, useEffect } from "react";
import { products } from "../../../productMock";
import ItemList from "./ItemList";
import "./itemListConteiner.css";

const ItemListConteiner = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      let isLogued = true; // Cambia esto a false para probar el catch
      if (isLogued) {
        res(products);
      } else {
        rej({ message: "algo salió mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entro en el catch", error);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListConteiner;
