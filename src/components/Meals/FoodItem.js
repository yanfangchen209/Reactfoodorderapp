import React, { useState } from 'react'

export const FoodItem = ({name, intro, cost, getAmount}) => {
    const [amount, setAmount] = useState(0);
    const addHandler = () => {
        setAmount(amount + 1);
    }
    getAmount(amount);

  return (
    <div>
        <p>{name}</p>
        <p>{intro}</p>
        <div>${cost}</div>
        <label>Amount</label>
        <input type="number"  value={amount}></input>
        <button type="button" onClick={addHandler}>+Add</button>
    </div>
  )
}
 export default FoodItem;