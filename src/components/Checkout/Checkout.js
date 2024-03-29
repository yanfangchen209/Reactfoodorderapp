import React, { useContext, useRef} from 'react'
import { Link } from 'react-router-dom'
import classes from './Checkout.module.css'
import CartContext from '../../store/cart-context'

export const Checkout = () => {
  const ctx = useContext(CartContext);
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();


  const enteredFirstName = firstNameInputRef.current.value;
  const enteredLastName = lastNameInputRef.current.value;



  //clear the shopping cart after placing order
  const placeOrderButtonHandler = () => {
    ctx.clearCart();
    console.log(ctx.numOfTotalItems)
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
      <form>
        <div>
          <label htmlFor='first'>First name: </label>
          <input id='first' type='text' ref={firstNameInputRef}/>
        </div>
        <div>
          <label htmlFor='last'>Last name: </label>
          <input id='last' type='text' ref={lastNameInputRef} />
        </div>
        <div>
          <label htmlFor='street'>Street: </label>
          <input id='street' type='text' />
        </div>
        <div>
          <label htmlFor='city'>City: </label>
          <input id='city' type='text' />
        </div>
        <div>
          <label htmlFor='postal'>Zip code: </label>
          <input id='postal' type='text' />
        </div>
        <label htmlFor='state'>State: </label>
        <select name="state">
          <option type='text' value="Alaska">AK</option>
          <option type="text" value="Arizona">AZ</option>
          <option type="text" value="Colorado">CO</option>
          <option type="text" value="Oklahoma">OK</option>
          <option type="text" value="Texas">TX</option>
        </select>
      </form>
      <div>
        <h2>Payment</h2>
        <h3>Select payment type</h3>
        <div>
          <input type="radio" id="paypal" name="payment"/>
          <label htmlFor='paypal'>Pay with Paypal</label>
        </div>
        <div>
          <input type="radio" id="discover" name="payment"/>
          <label htmlFor='discover'>Pay with Discover</label>
        </div>
        <div>
          <input type="radio" id="affirm" name="payment"/>
          <label htmlFor='affirm'>Pay with Affirm</label>
        </div>
        <h3>Add payment card</h3>
      </div>
      <div>
        <Link to='/OrderConfirmation'>
          <button onClick={placeOrderButtonHandler}>Place your order</button>
        </Link>
      </div>
    </div>
  )
}
export default Checkout