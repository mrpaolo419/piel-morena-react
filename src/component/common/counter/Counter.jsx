import { Button } from "@mui/material";
import "./counter.css";

const Counter = ({ contador, sumar, restar, onadd }) => {
  return (
    <div className="contador">
      <Button variant="outlined" onClick={restar}>
        Restar
      </Button>
      <h1>Contador: {contador}</h1>
      <Button variant="outlined" onClick={sumar}>
        Sumar
      </Button>
      <Button
        className="agregar-carrito"
        variant="contained"
        onClick={() => onadd(contador)} // Aquí pasa el contador al agregar al carrito
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default Counter;
