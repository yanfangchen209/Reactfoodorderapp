import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../store/cart-context';
import classes from './CartItem.module.css';


export const CartItem = ({id, name, description, photo, amount, price}) => {

    const cartCtx = useContext(CartContext);

    const amountChangeHandler = (event) => {
        cartCtx.setItemAmount({
            id: id, 
            name: name, 
            description: description, 
            photo: photo, 
            amount: amount, 
            price: price}, parseInt(event.target.value));
    }

    const itemDeleteHandler = ()  => {
        cartCtx.removeItem({id, name, description, photo, amount, price});

    }

  return (
        <div className={classes.cartitem}>
            <div className={classes.foodphoto}>
                <img src={photo} alt="food"/>
            </div>
            <div className={classes.description}>
                <span>{name}, {description}</span>
            </div>
            <div className={classes.amountselect}>
                <select onChange={amountChangeHandler} value={amount}>
                    <option value="0">0(Delete)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div className={classes.price}>${price}</div>
            <FontAwesomeIcon icon={faTrash} onClick={itemDeleteHandler} />
            {/*
            <div>
                <input type="radio" id="pickup" name="shipping" value="pick-up"/>
                <label>Pick up</label>
                <input type="radio" id="delivery" name="shipping" value="delivery"/>
                <label>Delivery by shipnet</label>
            </div>
            */}
        </div>
  )
}

export default CartItem;
