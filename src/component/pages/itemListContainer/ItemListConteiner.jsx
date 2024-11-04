import { useState, useEffect } from "react";
import { products } from "../../../productMock";
import ItemList from "./ItemList";
import "./itemListConteiner.css";
import { useParams } from "react-router-dom";

const ItemListConteiner = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const productsFiltrados = products.filter(
      (product) => product.categoria === categoria
    );
    const getProducts = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(categoria ? productsFiltrados : products);
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
  }, [categoria]);

  return <ItemList items={items} />;
};

export default ItemListConteiner;
