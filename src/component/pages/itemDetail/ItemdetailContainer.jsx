import React, { useEffect, useState } from "react";
import { products } from "../../../productMock";

const Itemdetail = () => {
  const [item, setItem] = useState({});
  const id = "1";

  useEffect(() => {
    products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, []);

  return <Itemdetail item={item} />;
};

export default Itemdetail;
