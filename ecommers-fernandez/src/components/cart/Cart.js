import React, { useContext } from 'react';
import {CartContext} from '../../context/CartContext';


const Cart = () => {
     const {items} = useContext(CartContext)


  return (
    <div>
      <h1>cart</h1>
      {/* <CartContext/> */}
    </div>
  )
}

export default Cart
