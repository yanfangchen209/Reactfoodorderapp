import React from 'react'
import classes from './FoodItem.module.css'
export const FoodItem = ({id, name, description, price, photo}) => {
  return (
    <li className={classes.li}>
        <div><img src={photo} alt="food"></img></div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>${price}</
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        div>
        <button>Add To Cart</button>
    </li>
  )
}
export default FoodItem;