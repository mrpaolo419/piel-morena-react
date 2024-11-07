import { useState } from "react";
import "./counter.css";
import { Button } from "@mui/material";

const Counter = ({ contador, sumar, restar, agregarAlCarrito, onadd,  }) => {
  return (
    <div className="contador">
      <button onClick={restar}>Restar</button>
      <h1>Contador: {contador}</h1>
      <button onClick={sumar}>Sumar</button>
      <button
        className="agregar-carrito"
        variant="outlined"
        onClick={() => onadd(contador)}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Counter;
