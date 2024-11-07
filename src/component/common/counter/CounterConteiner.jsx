import React, { useState } from "react";
import Counter from "./Counter";

const CounterConteiner = ({ onadd, stock }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  let childProps = {
    contador: contador,
    sumar: sumar,
    restar: restar,
    onadd: onadd,
  };

  return <Counter {...childProps} />;
};

export default CounterConteiner;
