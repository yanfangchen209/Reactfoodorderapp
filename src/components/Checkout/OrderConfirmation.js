import React from 'react'
import classes from './OrderConfirmation.module.css'

const OrderConfirmation = () => {
  return (
    <div className={classes['order-finish']}>Order sent successfully and details have been sent to your email example@***.com. Thank you for order!</div>
  )
}

export default OrderConfirmation;
