import { createContext } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [info, setinfo] = useState("hola coders")
    return <CartContext.Provider value={info}>{children}</CartContext.Provider>;

}