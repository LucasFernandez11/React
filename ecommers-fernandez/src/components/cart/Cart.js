import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { items } = useContext(CartContext);
  console.log(items)


  return (
    <div>
      <ul>
        {items.map(( item ) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;