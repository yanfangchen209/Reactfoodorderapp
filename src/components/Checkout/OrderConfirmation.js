import React from 'react'
import classes from './OrderConfirmation.module.css'

const OrderConfirmation = () => {
  return (
    <div className={classes['order-finish']}>Thanks for your order!<br/>
     We'll send confirmations and order updates to 
     <br/>example@gmail.com </div>
  )
}

export default OrderConfirmation;
