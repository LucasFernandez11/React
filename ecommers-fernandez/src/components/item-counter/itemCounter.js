import React, { useEffect, useState } from "react";

const ItemCounter = ({ stock, setSotckSelected }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setSotckSelected(counter);
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
    </>
  );
};

export default ItemCounter;