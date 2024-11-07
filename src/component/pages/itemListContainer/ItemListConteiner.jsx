import { useState, useEffect } from "react";
import { products } from "../../../productMock";
import ItemList from "./ItemList";
import "./itemListConteiner.css";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const ItemListConteiner = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();
  useEffect(() => {
    let productscollection = collection(db, "products");
    let consulta = productscollection;

    if (categoria) {
      let productsCollectionFiltered = query(
        productscollection,
        where("categoria", "==", categoria)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta).then((res) => {
      let array = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });

      setItems(array);
    });
  }, [categoria]);

  return <ItemList items={items} />;
};

export default ItemListConteiner;
