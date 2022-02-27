import React from 'react'
import { Link } from 'react-router-dom'

export const CheckoutOk = ({orderId}) => {
    return (
        <div>
            <h3>¡Su orden ha sido procesada exitosamente!</h3>

            <p>El código de su compra es</p>
            <p >{orderId}</p>
            <p>Asegúrese de guardarlo</p>
            <p >¡Gracias por visitarnos!</p>
            <Link to='/'>Volver</Link>
        </div>
    )
}