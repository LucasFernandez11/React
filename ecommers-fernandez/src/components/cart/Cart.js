import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import { Loader } from "../Loader/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";
import { ButtonBase } from "@material-ui/core";

const Cart = () => {
  const [loading, setLoading] = useState(true)
  const {cart, removeItem, clear, totalCart} = useContext(CartContext)

  useEffect(() => {
    setTimeout(()=>{
       setLoading(false)
    }, 1000)
  }, [])
    
  return (
    <div className=" container pb-5">
     { loading ? <Loader/> 
      : 
       <>
         {!cart.length ? <div>
                       <h2>Tu carrito esta vacio</h2>
                              <Link to='/'>
                                 <Button>Ir al Catalogo </Button>
                               </Link>
                         </div> 
                          :
                    <>
                       <h2>Tu compra</h2>
                       
                      {cart.map(( itemCart ) => (
                       
                        <div key={itemCart.item.id} className="contentProduct container my-5">
                          <h3> {itemCart.item.name}</h3>
                          <div className="row d-flex align-items-center"> 
                            <div className="imagenProducto col-md-4 "><img src={itemCart.item.imagen} alt=  {itemCart.item.name}/></div>
                            <h2 className="fs-4 my-2 col-md-8">Descripción: {itemCart.item.descripcion} </h2>
                            <h3> ${itemCart.item.price}</h3>
                            <p className="cartItemPrice">Precio: ${(itemCart.item.price * itemCart.quantity).toFixed(2)}</p>
                          </div>      
                            <Button className="mx-2" variant="outline-danger" size="lg" onClick={()=> removeItem(itemCart.item.id)}> Eliminar del carrito <FontAwesomeIcon icon={faTrash}/></Button>  
                        </div>
                    
                    
                      ))}
                        <div>
                          <p>Total compra: ${totalCart().toFixed(2)}</p>
                        </div>
                        <div className=" container mx-auto">
                
                          <Button className="mx-4"  variant="warning"  onClick={()=> clear()}>Vaciar carrito</Button>
                          
                        
                            <Link className="text-decoration-none"  to={'/Checkout'}>
                               <Button variant="success">Finalizar compra</Button>      
                            </Link>
                                                         
                        </div>
                    </>
             }
          </>
      }
      
      
      </div>
  )
  
};

export default Cart;