import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ResizeComponent = () => {

  const {items} = useContext(CartContext);   
  
  return (
  <div>Resize component
    {/* <h2>{info}</h2> */}
     </div>
    
  )
}

export default ResizeComponent
