import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem';

export const CartItemList = () => {
    const cartCtx = useContext(CartContext);
    //extract "items" property from cartCtx object
    const {items} = cartCtx;
    
  return (
    <ul>
        {items.map(item => <CartItem key={item.id} id={item.id} name={item.name} description={item.description} 
            price={item.price} photo={item.photo} amount={item.amount} />)}
    </ul>
  )
}

export default CartItemList
