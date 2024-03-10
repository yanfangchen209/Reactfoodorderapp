import React from 'react'
import classes from './Cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

export const CartItem = () => {

  return (
        <div>
            <h1>Your Cart</h1>
            <div>            
                <span>Subtotal:</span>
                <span>$23.67</span>
            </div>
            <div>            
                <span>total items:</span>
                <span>5</span>
            </div>0
            <div>
                <img src="" alt=''/>
                <span>name</span>
                <span>description</span>
                <select name="quantity">
                    <option value="0">0(Delete)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div>$price</div>
                <div>
                    <input type="radio" id="pickup" name="shipping" value="pick-up"/>
                    <label>Pick up</label>
                    <input type="radio" id="delivery" name="shipping" value="delivery"/>
                    <label>Delivery by shipnet</label>
                </div>
            </div>
        </div>
  )
}

export default CartItem;
