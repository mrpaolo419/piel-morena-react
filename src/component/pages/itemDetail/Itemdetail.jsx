import React from "react";
import CounterConteiner from "../../common/counter/CounterConteiner";
import "./itemDetail.css";

const ItemDetail = ({ item, onadd }) => {
  return (
    <div className="item-detail">
      <h1>{item.marca}</h1>
      <p>Artículo: {item.articulo}</p>
      <p>Precio: ${item.precio}</p>
      <p>Stock: {item.stock}</p>
      <p>Categoría: {item.categoria}</p>
      <img src={item.imagenUrl} alt={item.marca} />
      <CounterConteiner onadd={onadd} stock={item.stock} />
    </div>
  );
};

export default ItemDetail;
