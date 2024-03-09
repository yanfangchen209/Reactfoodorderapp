import React from 'react'
import classes from './Cart.module.css'

export const Cart = () => {
    const cartItems = [{id: 'e3', name: "chips", description: "uyg ggdsg dgdg dg", price: 30.45}].map(item => <li>{item.name}</li>)

  return (
    <>
        <ul className={classes['cart-items']}>
            {cartItems}
        </ul>
        <div>
            <span>Total Amount:</span>
            <span>$30.45</span>
        </div>
        <div>order</div>
    </>

  )
}

export default Cart
