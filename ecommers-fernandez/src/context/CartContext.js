import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [items, setitems] = useState([])
    const addItem = (currentItem) => {
        if (items.some(({item}) => item.id === currentItem.item.id)) return;
            
        
        setitems([...items, currentItem])
      }

    return <CartContext.Provider value={{
        items,
        addItem
    }}>{children}</CartContext.Provider>;

}