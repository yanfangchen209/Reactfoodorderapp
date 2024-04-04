import React, { useContext, useState} from 'react'
import { Link, redirect, useNavigate} from 'react-router-dom'
import classes from './Checkout.module.css'
import CartContext from '../../store/cart-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCreditCard, faShippingFast } from '@fortawesome/free-solid-svg-icons'

//useState(), not ref
/**
about form data validation: firstName, lastName, street, city: NO EMPTY.
zipcode: The regular expression zipCodeRegex matches US zip codes. It allows for either 5 digits (\d{5}) or 5 digits followed by a hyphen and 4 more digits (-\d{4}), making the last part optional (?:-\d{4})?. 
phoneNumber: The regular expression phoneRegex matches phone numbers with optional country code (+), followed by an optional area code, and then the phone number itself. The {0,3} part allows for the country code to be optional, with a maximum length of 3 digits. The \d{10} part matches exactly 10 digits for the phone number itself.
 */

const Checkout = () => {
  const ctx = useContext(CartContext);
  const navigate = useNavigate();
  
  // state and paymentMethod default values are set, in radio, defaultChecked isn't a must.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('Alaska');
  const [paymentMethod, setPaymentMethod] = useState('paypal');

//use onBlur(lose focus) to update touched or not. empty without touch is valid 
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [streetTouched, setStreetTouched] = useState(false);
  const [cityTouched, setCityTouched] = useState(false);
  const [zipcodeTouched, setZipcodeTouched] = useState(false);
  const [phoneNumberTouched, setPhoneNumberTouched] = useState(false);


    //validate user entered phone using js regex
const enteredPhoneNumberIsValid = (phoneNumber) => {
  const phoneRegex = /^\+?\d{0,3}?\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

//validate user entered zipcode using js regex
const enteredZipcodeIsValid = (zipcode) => {
  const zipCodeRegex = /^\d{5}(?:-\d{4})?$/;
  return zipCodeRegex.test(zipcode);
}
  const firstNameInputIsValid = firstName.trim() !== '';
  const lastNameInputIsValid = lastName.trim() !== '';
  const streetInputIsValid = street.trim() !== '';
  const cityInputIsValid = city.trim() !== '';
  const zipcodeInputIsValid = enteredZipcodeIsValid(zipcode);
  const phoneNumberInputIsValid = enteredPhoneNumberIsValid(phoneNumber);

  //if input not empty, it is valid, if input is empty but it is touched, it is valid
  //don't show error when user haven't every give a try
  const firstNameIsValid = firstNameInputIsValid || (!firstNameTouched && !firstNameInputIsValid);
  const lastNameIsValid =  lastNameInputIsValid || (!lastNameTouched && !lastNameInputIsValid);
  const streetIsValid =  streetInputIsValid || (!streetTouched && !streetInputIsValid);
  const cityIsValid = cityInputIsValid || (!cityTouched && !cityInputIsValid);
  const zipcodeIsValid = zipcodeInputIsValid || (!zipcodeTouched && !zipcodeInputIsValid);
  const phoneNumberIsValid = phoneNumberInputIsValid || (!phoneNumberTouched && !phoneNumberInputIsValid);

//onBlur sovle the problem: when touched and lose focus check its validity.onChange alone cannot do this. 
//withour onBlur, when user didnot touch any input, no error will be shown
 
//every stroke
  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
    //setFirstNameTouched(true); don't need this, because when i click the input , enter nothing, and lose focus,tihs changeHandler won't execute
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

  const streetChangeHandler = (e) => {
    setStreet(e.target.value);
  }

  const streetBlurHandler = (e) => {
    setStreetTouched(true);
  }

  const cityChangeHandler = (e) => {
    setCity(e.target.value);
  }

  const cityBlurHandler = (e) => {
    setCityTouched(true);
  }

  const zipcodeChangeHandler = (e) => {
    setZipcode(e.target.value);
  }

  const zipcodeBlurHandler = (e) => {
    setZipcodeTouched(true);
  }

  const phoneNumberChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  }

  const phoneNumberBlurHandler = (e) => {
    setPhoneNumberTouched(true);
  }

  const stateChangeHandler = (e) => {
    setState(e.target.value);
  }

  const paymentMethodChangeHandler = (e) => {
    setPaymentMethod(e.target.value);
  }

/*send cart items and user entered shipping address and payment to firebase backend, A successful firebase
request will be indicated by a 200 OK HTTP status code, and the response will contain the data we 
wrote to the database.
*/
  const submitOrderHandler = async (userData, cartItems) => {

    const res = await fetch('https://reactfoodapp-10ef5-default-rtdb.firebaseio.com/foodorder.json', {
      method: 'POST',
      //JSON.stringify() accepts an object as its parameter. It takes the object and converts it into a JSON string representation.
      body: JSON.stringify({user: userData, orderedItems: cartItems})
    })
    return res;
  }

  const formIsValid = firstNameInputIsValid && lastNameInputIsValid && streetInputIsValid && cityInputIsValid
  && zipcodeInputIsValid && phoneNumberInputIsValid;


//how to make it go to orderConfirmation page if data validation passed??
  const formSubmissionHandler = async (e) => {
    //prevent directly send data to server where this app is hosted
    e.preventDefault();

    //1. validate form validity
    if(!formIsValid){
      return;
    }
 
    //if all input are valid, get data object
    const userEnteredData = {
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      zipcode: zipcode,
      phoneNumber: phoneNumber,
      state: state,
      payment: paymentMethod
    }

    //2. send http post request to firebase, store user entered shipping addresss and ordered items info.
   submitOrderHandler(userEnteredData, ctx.items);
 
    //3. clear the shopping cart after placing order
    ctx.clearCart();

    //set touch to untouched so that at begining inputs shows no error 
    setFirstNameTouched(false);
    setLastNameTouched(false);
    setStreetTouched(false);
    setCityTouched(false);
    setZipcodeTouched(false);
    setPhoneNumberTouched(false);

    //clear input box after submitting
    setFirstName('');
    setLastName('');
    setStreet('');
    setCity('');
    setZipcode('');
    setPhoneNumber('');

    // Redirect to Order Confirmation page after successfully placing order.
    navigate('/orderconfirmation');
    //return redirect('/');
  }

  const firstNameControlClasses = `${classes.control} ${firstNameIsValid ? '': classes.invalid}`;
  const lastNameControlClasses = `${classes.control} ${lastNameIsValid ? '': classes.invalid}`;
  const streetControlClasses = `${classes.control} ${streetIsValid ? '': classes.invalid}`;
  const cityControlClasses = `${classes.control} ${cityIsValid ? '': classes.invalid}`;
  const zipcodeControlClasses = `${classes.control} ${zipcodeIsValid ? '': classes.invalid}`;
  const phoneNumberControlClasses = `${classes.control} ${phoneNumberIsValid ? '': classes.invalid}`;

  return (
    <div className={classes.checkOut}>
      <div className={classes.orderSummary}>
        <FontAwesomeIcon icon={faCartShopping} />
        <h2>Order Summary</h2>
        <p>Total amount: ${ctx.totalAmount.toFixed(2)}</p>
        <p>Total items: {ctx.numOfTotalItems}</p>
      </div>
      <div className={classes.shippingAddress}>
        <FontAwesomeIcon icon={faShippingFast} />
        <h2>Shipping Address</h2>
        <form className={classes.form} onSubmit={formSubmissionHandler}>
          <div className={firstNameControlClasses}>
            <label htmlFor='first'>First name </label>
            <input id='first' type='text' value={firstName} 
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler} 
            />
            {!firstNameIsValid && <p>first name is required</p> }
          </div>
          <div className={lastNameControlClasses}>
            <label htmlFor='last'>Last name </label>
            <input id='last' type='text' value={lastName} 
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            />
            {!lastNameIsValid && <p>last name is required</p> }
          </div>
          <div className={streetControlClasses}>
            <label htmlFor='street'>Street </label>
            <input id='street' type='text' value={street}
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
            />
            {!streetIsValid && <p>street name is required</p>}
          </div>
          <div className={cityControlClasses}>
            <label htmlFor='city'>City </label>
            <input id='city' type='text' value={city}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            />
            {!cityIsValid && <p>city cannot be required</p>}
          </div>
          <div className={zipcodeControlClasses}>
            <label htmlFor='postal'>Zip code</label>
            <input id='postal' type='text' value={zipcode} 
            onChange={zipcodeChangeHandler}
            onBlur={zipcodeBlurHandler}
            />
            {!zipcodeIsValid && <p>zipcode is invalid</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='state'>State </label>
            <select name="state" value={state} onChange={stateChangeHandler}>
              <option type='text' value="Alaska">AK</option>
              <option type="text" value="Arizona">AZ</option>
              <option type="text" value="Colorado">CO</option>
              <option type="text" value="Oklahoma">OK</option>
              <option type="text" value="Texas">TX</option>
            </select>
          </div>
          <div className={phoneNumberControlClasses}>
            <label htmlFor='phone'>Phone</label>
            <input type="tel" id='phone' name='phoneNumber' value={phoneNumber}
            onChange={phoneNumberChangeHandler}
            onBlur={phoneNumberBlurHandler}
            />
            {!phoneNumberIsValid && <p>phone number is invalid</p>}
          </div>
          <div className={classes.payment}>
            <FontAwesomeIcon icon={faCreditCard} />
            <h2>Payment</h2>
            <h3>Select payment type</h3>
            <div className={classes.paymentInput}>
              <input type="radio" id="paypal" name="payment" value='paypal' defaultChecked
              checked={paymentMethod === 'paypal'} onChange={paymentMethodChangeHandler}
              />
              <label htmlFor='paypal'>Pay with Paypal</label>
            </div>
            <div className={classes.paymentInput}>
              <input type="radio" id="discover" name="payment" value='discover' 
              checked={paymentMethod === 'discover'} onChange={paymentMethodChangeHandler} />
              <label htmlFor='discover'>Pay with Discover</label>
            </div>
            <div className={classes.paymentInput}>
              <input type="radio" id="affirm" name="payment" value='affirm' 
              checked={paymentMethod === 'affirm'} onChange={paymentMethodChangeHandler}/>
              <label htmlFor='affirm'>Pay with Affirm</label>
            </div>
          </div>
          <button disabled={!formIsValid} className={classes.placeOrderButton}>Place your order</button>
        </form>
      </div>
    </div>
  )
  
}
export default Checkout