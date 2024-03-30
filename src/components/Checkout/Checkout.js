import React, { useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import classes from './Checkout.module.css'
import CartContext from '../../store/cart-context'

//useState(), not ref

export const Checkout = () => {
  const ctx = useContext(CartContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);

  const firstNameInputIsValid = !firstName.trim() === '';
  const lastNameInputIsValid = !lastName.trim() === '';



  const firstNameIsInvalid = !firstNameInputIsValid && firstNameTouched;
  const lastNameIsInvalid = !lastNameInputIsValid && lastNameTouched;


 
//every stroke
  const firstNameChangeHandler = (e) => {
    const enteredFirstName = e.target.value;
    setFirstName(enteredFirstName);
    setFirstNameTouched(true);
  }

  //every stroke
  const lastNameChangeHandler = (e) => {
    const enteredLastName = e.target.value;
    setLastName(enteredLastName);
    setLastNameTouched(true);
  }


  const submitOrderHandler = async (userData) => {
    await fetch('https://reactfoodapp-10ef5-default-rtdb.firebaseio.com/foodorder.json', {
      method: 'POST',
      body: JSON.stringify({user: userData})
    })
  }



  const formSubmissionHandler = (e) => {
    e.preventDefault();

    //1. validate form validity
    if(firstNameIsInvalid || lastNameIsInvalid ){
      return;
    }
 
    //if all input are valid, get data object
    const userEnteredData = {
      firstName: firstName,
      lastName: lastName
    }

    //2. send http post request to firebase
    submitOrderHandler(userEnteredData);

    //3. clear the shopping cart after placing order
    ctx.clearCart();

  }


  return (
    <div>
      <div>
        <h2>Order Summary</h2>
        <p>Total amount: ${ctx.totalAmount.toFixed(2)}</p>
        <p>Total items: {ctx.numOfTotalItems}</p>
      </div>
      <div>
        <h2>Shipping Address</h2>
      </div>
      <form onSubmit={formSubmissionHandler}>
        <div>
          <label htmlFor='first'>First name: </label>
          <input id='first' type='text' value={firstName} 
          onChange={firstNameChangeHandler}/>
          {firstNameIsInvalid && <p>first name cannot be empty</p> }
        </div>
        <div>
          <label htmlFor='last'>Last name: </label>
          <input id='last' type='text' value={lastName} 
          onChange={lastNameChangeHandler}/>
          {lastNameIsInvalid && <p>last name cannot be empty</p> }
        </div>
      <div>
          <button>Place your order</button>
      </div>
      </form>
    </div>
  )
}
export default Checkout