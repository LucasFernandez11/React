import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';
import "./cartWidge.css"; 
import { Link } from 'react-router-dom';



const CartWidge = () => {
    const {cart, totalCart} = useContext(CartContext)
  return (
      <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cartWidge"/>            
            <span>{Number(cart.reduce((acc, el) => acc + el.quantity, 0))}</span>

            <p className='cartW-precio'>${totalCart().toFixed(2)}</p>
      </Link>
  )
}

export default CartWidge