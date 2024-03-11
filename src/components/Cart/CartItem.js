import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../store/cart-context';

export const CartItem = ({id, name, description, photo, amount, price}) => {

    const cartCtx = useContext(CartContext);

    const amountChangeHandler = (event) => {
        cartCtx.setItemAmount({id, name, description, photo, amount, price}, event.target.value);
    }

    const itemDeleteHandler = (id)  => {
        cartCtx.removeItem(id);

    }

  return (
        <div>
            <div>
                <span>{name}</span>
                <span>{description}</span>
                <img src={photo} alt=''/>
                <div>
                <select onChange={amountChangeHandler}>
                    <option value="0">0(Delete)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </div>
                <div>${price}</div>
                <FontAwesomeIcon icon={faTimes} onClick={itemDeleteHandler} />
                {/*
                <div>
                    <input type="radio" id="pickup" name="shipping" value="pick-up"/>
                    <label>Pick up</label>
                    <input type="radio" id="delivery" name="shipping" value="delivery"/>
                    <label>Delivery by shipnet</label>
                </div>
                */}
            </div>
        </div>
  )
}

export default CartItem;
