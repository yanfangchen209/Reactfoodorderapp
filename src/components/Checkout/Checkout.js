import React, { useContext, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import classes from './Checkout.module.css'
import CartContext from '../../store/cart-context'

//useState(), not ref

export const Checkout = () => {
  const ctx = useContext(CartContext);

  //const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);

  const firstNameInputIsValid = firstName.trim() !== '';
  const lastNameInputIsValid = lastName.trim() !== '';



  const firstNameIsValid = firstNameInputIsValid || (!firstNameTouched && !firstNameInputIsValid);
  const lastNameIsValid =  lastNameInputIsValid || (!lastNameTouched && !lastNameInputIsValid);

//onBlur sovle the problem: when touched and lose focus check its validity.onChange alone cannot do this. 
//withour onBlur, when user didnot touch any input, no error will be shown
 
//every stroke
  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
    //setFirstNameTouched(true);
  }
  const firstNameBlurHandler = (e) => {
    setFirstNameTouched(true);
  }


  const lastNameBlurHandler = (e) => {
    setLastNameTouched(true);
  }
  //every stroke
  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
    //setLastNameTouched(true);
  }

  const submitOrderHandler = async (userData, cartItems) => {

    await fetch('https://reactfoodapp-10ef5-default-rtdb.firebaseio.com/foodorder.json', {
      method: 'POST',
      body: JSON.stringify({user: userData, orderedItems: cartItems})
    })
  }

  const formIsValid = firstNameInputIsValid && lastNameInputIsValid;


//how to make it go to orderConfirmation page if data validation passed??
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    //1. validate form validity
    if(!formIsValid){
      return;
    }
 
    //if all input are valid, get data object
    const userEnteredData = {
      firstName: firstName,
      lastName: lastName
    }

    //2. send http post request to firebase, store user entered shipping addresss and ordered items info.
    submitOrderHandler(userEnteredData, ctx.items);

    //3. clear the shopping cart after placing order
    ctx.clearCart();
    setFirstNameTouched(false);
    setLastNameTouched(false);
    setFirstName('');
    setLastName('');

    // Redirect to Order Confirmation page
   //history.push('/orderConfirmation');
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
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler} 
          />
          {!firstNameIsValid && <p>first name cannot be empty</p> }
        </div>
        <div>
          <label htmlFor='last'>Last name: </label>
          <input id='last' type='text' value={lastName} 
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          />
          {!lastNameIsValid && <p>last name cannot be empty</p> }
        </div>
      <div className={classes.button}>
          <button disabled={!formIsValid}>Place your order</button>
      </div>
      </form>
    </div>
  )
  
}
export default Checkout