import React, { useContext } from 'react'
import classes from './FoodItem.module.css'
import CartContext from '../../store/cart-context'

export const FoodItem = ({id, name, description, price, photo}) => {
  const cartCtx = useContext(CartContext);
  const standardPrice = `$${price.toFixed(2)}`;


  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      name: name,
      description: description,
      photo: photo,
      amount: 1,
      price: price
    });

  }
  return (
    <li className={classes.li}>
        <div><img src={photo} alt="food"></img></div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{standardPrice}</div>
        <button onClick={addToCartHandler}>Add To Cart</button>
    </li>
  );
}
export default FoodItem;