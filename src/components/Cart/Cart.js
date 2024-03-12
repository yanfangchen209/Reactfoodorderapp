import React, { useContext } from 'react'
import CartItemList from './CartItemList'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'

export const Cart = () => {
    const cartCtx = useContext(CartContext);
    const checkOutHandler = () => {
        console.log("test check out click");
    }

  return (
    <div className={classes.shoppingcart}>
        <h1>Your Cart</h1>
        <div className={classes.summary}>
            <div className={classes.subtotal}>
                <span>Subtotal:</span>
                <span>${cartCtx.totalAmount}</span>
            </div>
            <div className={classes.totalitem}>
                <span>Total items:</span>
                <span>{cartCtx.numOfTotalItems}</span>
            </div>
        </div>
        <div className={classes.itemlist}> 
         <CartItemList foodData={cartCtx.items}/>
        </div>
        <div className={classes.checkoutbutton}>
            <button onClick={checkOutHandler}>Continue to check out</button>
        </div>

    </div>
  )
}

export default Cart;
