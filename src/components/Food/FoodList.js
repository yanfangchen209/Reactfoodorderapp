import React from 'react'
import FoodItem from './FoodItem';
import classes from './FoodList.module.css';

export const FoodList = ({mealData}) => {

  return (
    <div className={classes.foodlist}>
      {mealData.map(item => <FoodItem key={item.id} id={item.id} name={item.name} 
        description={item.description} price={item.price} photo={item.photo} />)}
    </div>
  )
}

export default FoodList;
