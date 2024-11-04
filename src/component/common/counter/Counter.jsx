import { useState } from "react";
import "./counter.css";
import { Button } from "@mui/material";

const Counter = ({ contador, sumar, restar, agregarAlCarrito }) => {
  return (
    <div className="contador">
      <button onClick={restar}>Restar</button>
      <h1>Contador: {contador}</h1>
      <button onClick={sumar}>Sumar</button>
      <button className="agregar-carrito" onClick={agregarAlCarrito}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Counter;
