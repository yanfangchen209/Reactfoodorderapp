import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import classes from './CartItemList.module.css'

export const CartItemList = ({foodData}) => {
    //extract "items" property from cartCtx object
    //const {items} = cartCtx.items;
    console.log(foodData)
  return (
    <ul className={classes.foodlist}>
        {foodData.map(item => <CartItem key={item.id} id={item.id} name={item.name} description={item.description} 
            price={item.price} photo={item.photo} amount={item.amount} />)}
    </ul>
  )
}

export default CartItemList
