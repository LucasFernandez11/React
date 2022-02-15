import { createContext, useState } from "react";
import Cart from "../components/cart/Cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (currentItem) => {

    const indice = isInCart(currentItem); 
    
    if (indice === -1) {
      setItems([...items, currentItem]); 
    } else {
      const cantidadVieja = items[indice].cantidad
      items[indice].cantidad = cantidadVieja + currentItem.cantidad
      setItems([...items])
    }      
     
  };

  const isInCart = (itemNuevo)=> {
    const item = items.find(item => item.id === itemNuevo.id)
    return items.indexOf(item)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};