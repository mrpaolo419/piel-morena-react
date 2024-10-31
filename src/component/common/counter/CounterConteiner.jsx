import React, { useState } from "react";
import Counter from "./counter";

const CounterConteiner = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
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
  };

  return <Counter {...childProps} />;
};

export default CounterConteiner;
