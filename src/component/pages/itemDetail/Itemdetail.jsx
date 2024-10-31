import React from "react";
import CounterConteiner from "../../common/counter/CounterConteiner";

const Itemdetail = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h1>{item.marca}</h1>
      <CounterConteiner />
    </div>
  );
};

export default Itemdetail;
