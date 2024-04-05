import React, { useContext } from 'react'
import CartItemList from './CartItemList'
import CartContext from '../../store/cart-context'
import AuthContext from '../../store/auth-context'
import classes from './Cart.module.css'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const standardSubtotal = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartIsEmpty = cartCtx.numOfTotalItems === 0;

    //if logged in, continue to checkout page, otherwise, go to log in page , after successfully logged in, go to checkout page.
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
                {!cartIsEmpty && authCtx.isLoggedIn && <button>Continue to checkout</button>}
            </Link>
            <Link to='/login' state={{isSignInToCheckOut: "yes"}}>
                {!cartIsEmpty && !authCtx.isLoggedIn && <button>Log in to checkout</button>}
            </Link>
        </div>

    </div>
  )
}

export default Cart;
