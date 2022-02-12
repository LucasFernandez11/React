import React from 'react'
import { CartContext } from '../../context/CartContext'

const ComponentConsumer = () => {
  return (
    <div>
      <h3>informacion desde el consumidor</h3>
      {/* <CartContext.Consumer>{({items})=> <p>{items}</p>}</CartContext.Consumer> */}
    </div>
  )
}

export default ComponentConsumer
