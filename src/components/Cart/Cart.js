import React, { useContext } from 'react'
import CartItemList from './CartItemList'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const cartCtx = useContext(CartContext);
    const standardSubtotal = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartIsEmpty = cartCtx.numOfTotalItems === 0;

  return (
    <div className={classes.shoppingcart}>
        <h1>Your Cart</h1>
        <div className={classes.summary}>
            <div className={classes.subtotal}>
                <span>Subtotal:</span>
                <span>{standardSubtotal}</span>
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
            <Link to="/food">
                {cartIsEmpty && <button>Cart Empty, Continue Shopping</button>}
            </Link>
            <Link to="/checkout">
                {!cartIsEmpty && <button>Continue to checkout</button>}
            </Link>
        </div>

    </div>
  )
}

export default Cart;
