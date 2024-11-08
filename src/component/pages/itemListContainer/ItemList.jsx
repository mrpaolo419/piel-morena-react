import Productorcard from "../../common/Producard/Productorcard"; // Asegúrate de que sea la ruta correcta

import "./itemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="pintarCard">
      {items.map((item) => {
        return (
          <Productorcard
            key={item.id}
            marca={item.marca}
            precio={item.precio}
            articulo={item.articulo}
            imagen={item.imagenUrl}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
