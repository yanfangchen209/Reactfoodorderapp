import React from 'react'
import FoodItem from './FoodItem';

export const FoodList = ({data}) => {
  


  return (
    
    <div>
        {data.map(item => <FoodItem getAmount={getAmount} key={item.id} name={item.name} intro={item.intro} cost={item.cost} />)}
    </div>
  )
}

export default FoodList;
