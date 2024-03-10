import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from './HeaderCartButton.module.css'

export const HeaderCartButton = () => {
  return (
    <button className={classes.cartbutton}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Cart</span>
        <span className={classes.itemcount}>3</span>
    </button>

  )
}
export default HeaderCartButton;