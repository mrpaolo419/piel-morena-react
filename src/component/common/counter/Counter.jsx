import { useState } from "react";

const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <h1>contador: {contador}</h1>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
    </div>
  );
};

export default Counter;
