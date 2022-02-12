import React, { useEffect, useState } from "react";

const ItemCounter = ({ stock, setStockSelected,onAdd }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setStockSelected(counter);
  }, [counter]);

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <button className="buttonCounter1" onClick={minusCounter}>-</button>
        <span>{counter}</span>
        <button  className="buttonCounter2" onClick={plusCounter}>+</button>
      </div>
      <button onClick={onAdd}>Agregar a carrito</button>
    </>
  );
};

export default ItemCounter;