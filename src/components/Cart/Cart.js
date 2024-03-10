import React from 'react'
import CartItem from './CartItem'

export const Cart = () => {
  return (
    <div>
        <CartItem />
        <div>
            <span>Subtotal:</span>
            <span>$243.44</span>
        </div>
        <div>
            <span>Total items:</span>
            <span>5</span>
        </div>
        <button>Continue to check out</button>
    </div>
  )
}

export default Cart;
