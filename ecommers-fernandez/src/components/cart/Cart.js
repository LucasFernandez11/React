import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import { Loader } from "../Loader/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  const [loading, setLoading] = useState(true)
  const {cart, removeItem, clear, totalCart} = useContext(CartContext)

  useEffect(() => {
    setTimeout(()=>{
       setLoading(false)
    }, 1000)
  }, [])
    
  return (
    <div className="cartContainer">
     { loading ? <Loader/> 
      : 
       <>
         {!cart.length ? <div>
                       <h2>Tu carrito esta vacio</h2>
                            <button>
                              <Link to='/'>Ir al Catalogo</Link>
                            </button>
                         </div> 
                          :
                    <>
                       <h2>Tu compra</h2>
                      {cart.map(( itemCart ) => (
                        <div key={itemCart.item.id} className="contentProduct container-fluid">
                          <h3> {itemCart.item.name}</h3>
                          <div className="row d-flex align-items-center"> 
                            <div className="imagenProducto col-md-4 "><img src={itemCart.item.imagen} alt=  {itemCart.item.name}/></div>
                            <h2 className="fs-4 my-2 col-md-8">Descripción: {itemCart.item.descripcion} </h2>
                            <h3> ${itemCart.item.price}</h3>
                            <p className="cartItemPrice">Precio: ${(itemCart.item.price * itemCart.quantity).toFixed(2)}</p>
                            <button onClick={()=> removeItem(itemCart.item.id)}><FontAwesomeIcon icon={faTrash}/></button>  
                          </div>      
                        </div>
                    
                    
                      ))}
                        <div>
                          <p>Total compra: ${totalCart().toFixed(2)}</p>
                        </div>
                        <div>
                          <button onClick={()=> clear()}>Vaciar carrito</button>
                          <button><Link to={'/Checkout'}>Finalizar compra</Link></button>      
                        </div>
                    </>
             }
          </>
      }
      
      
      </div>
  )
  
};

export default Cart;