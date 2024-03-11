import React, { useContext } from 'react'
import CartItemList from './CartItemList'
import CartContext from '../../store/cart-context'

export const Cart = () => {
    const cartCtx = useContext(CartContext);
    const checkOutHandler = () => {
        console.log("test check out click");
    }

  return (
    <div>
        <h1>Your Cart</h1>
        <div>
            <span>Subtotal:</span>
            <span>${cartCtx.totalAmount}</span>
        </div>
        <div>
            <span>Total items:</span>
            <span>{cartCtx.numOfTotalItems}</span>
        </div>
        <CartItemList />
        <button onClick={checkOutHandler}>Continue to check out</button>
    </div>
  )
}

export default Cart;
