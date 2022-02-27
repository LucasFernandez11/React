import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  

  
  const addItem = (newItem, newQuantity) => {

    const { quantity = 0} = cart.find(e => e.item.id === newItem.id) || {}
    const newCart = cart.filter(el => el.item.id !== newItem.id)
    setCart([...newCart, {item: newItem, quantity: quantity + newQuantity}])
    
}
// console.log(cart)

  const removeItem = (itemId) => {
    setCart(cart.filter(el => el.item.id !== itemId))
}

const clear = ()=>{
    setCart([])
}

const totalCart = ()=> {
  const prueba = cart.reduce((acc, itemCart) => (acc += (itemCart.quantity * itemCart.item.price)),0)
  // console.log(prueba);
    return prueba
}    

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,        
        totalCart,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};