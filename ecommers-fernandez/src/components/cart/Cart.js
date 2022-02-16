import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { items, total } = useContext(CartContext);
  
  console.log(items)


  return (    
    <div>  
      <h1>En tu carrito</h1>   
        {items.map(( item ) => (
          <div key={item.id} className="contentProduct container" >
          <h3> {item.name}</h3>
        <div className="row d-flex align-items-center"> 
          <div className="imagenProducto col-md-4 "><img src={item.imagen} alt={item.name}/></div>
          <h2 className="fs-4 my-2 col-md-8">Descripción: {item.description} </h2>
          <h3> ${item.price}</h3>         
               
          {/* <h2 className="fs-5 my-2">Stock disponible: {item.stock}</h2> */}
        </div>      
      </div>

          
        ))}     
    </div>
  );
};

export default Cart;