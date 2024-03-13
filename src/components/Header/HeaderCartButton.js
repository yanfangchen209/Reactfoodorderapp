import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';

export const HeaderCartButton = () => {

    const cartCtx = useContext(CartContext);

  return (
    <button className={classes.cartbutton}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Cart</span>
        <span className={classes.itemcount}>{cartCtx.numOfTotalItems}</span>
    </button>

  )
}
export default HeaderCartButton;