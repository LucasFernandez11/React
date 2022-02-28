import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { getFirestore, collection, addDoc} from "firebase/firestore";
import { Link } from 'react-router-dom'

const Checkout = () => {
    const {cart, clear, totalCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(0)
    const [buyer, setBuyer]= useState({
        name: '',
        phone: '',
        email: '',
    })

    // const updateOrder = ()=>{
    //     const db = getFirestore();
    //     const docRef = doc(db, "Productos", id )
    //     updateDoc(docRef, {stock: 5 })
    // }

    const sendOrder = () => {
        const order = {
            buyer,
            item: cart, 
            total: totalCart(),
            
        }        
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then(({id})=> setOrderId(id));
        clear();
        
    }
    // console.log(orderId) 
    
  return (
      <div>      
         
          {
            orderId === 0 ?                
             <>
              <Form className='container row justify-content-center mx-auto w-50 py-5'>
                 <Form.Group className="mb-3" value={buyer.name}>
                 <Form.Label>Nombre</Form.Label>
                 <Form.Control  type="name" placeholder="Nombre" onChange={(e)=> setBuyer({...buyer, name: e.target.value})} />                
                 </Form.Group>
                <Form.Group className="mb-3" value={buyer.phone}>
                <Form.Label>Telefono</Form.Label>
                <Form.Control  type="Tel" placeholder="Telefono"  onChange={(e)=> setBuyer({...buyer, phone: e.target.value})}/>
                </Form.Group>            
                <Form.Group className="mb-3" value={buyer.email}>
                <Form.Label>Email</Form.Label>
                <Form.Control  type="email" placeholder="email@example" onChange={(e)=> setBuyer({...buyer, email: e.target.value})}/>                
                </Form.Group>
                <Button variant="primary" onClick={sendOrder}>Comprar</Button>              
              </Form>
             </>
                :
             <>
                {orderId &&(
                  <div>
                    <h3>¡Su orden ha sido procesada exitosamente!</h3>        
                    <p>El código de su compra es</p>
                    <p >{orderId}</p>
                    <p>Asegúrese de guardarlo</p>
                    <p >¡Gracias por visitarnos!</p>
                    <Link to='/'>Volver</Link>
                  </div>
                  )}  
            </>
          }       
    </div>
        
        
  )
}

export default Checkout