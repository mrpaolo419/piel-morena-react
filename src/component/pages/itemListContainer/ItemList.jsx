import Productorcard from "../../common/Producard/Productorcard";
import "./itemListConteiner.css";

const ItemList = ({ items }) => {
  console.log(items);
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
          />
        );
      })}
    </div>
  );
};

export default ItemList;
