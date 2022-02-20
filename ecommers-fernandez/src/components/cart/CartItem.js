import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const CartItem = ({item, remove}) => {

    return (
        <div className="cartItem" key={item.item.id}>
            <div className="cartItemInfo">
                <img src={item.item.img} alt={item.item.title}/>
                <div>
                    <p className="cartItemTitle">{item.item.title}</p>
                    <p className="cartItemQuantity">Cantidad: {item.item.quantity}</p>
                </div>
            </div>
            <p className="cartItemPrice">Precio: ${(item.item.price * item.item.quantity).toFixed(2)}</p>
            <button onClick={()=> remove(item.item.id)}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
    )
}