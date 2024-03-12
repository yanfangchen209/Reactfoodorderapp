import React, { useReducer } from 'react'
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
    numOfTotalItems: 0,
}

const cartReducer = (state, action) => {
    //put declaration of updatedItems, updatedTotalAmount, updatedNumOfTotalItems here???
    if(action.type === 'ADD'){
        //no matter the added item exist or not, totalAmount and updatedNumOfTotalItems have to be updated.
        const updatedTotalAmount = state.totalAmount + action.item.price * 1;
        const updatedNumOfTotalItems = state.numOfTotalItems + 1;

        //check if the added item exist already in shopping cart
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;
        //if items already exist in cart, increase its amount by 1, update items
        //if items doesnt exist, just concat the item at end of items array
        if(existingCartItem){
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount + 1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            numOfTotalItems: updatedNumOfTotalItems
        }
    }
    if(action.type === 'REMOVE'){
        //why not const updatedItems??
        let updatedItems;
        const deletedSubtotal = action.item.price * action.item.amount;
        const updatedTotalAmount = state.totalAmount - deletedSubtotal;
        const updatedNumOfTotalItems = state.numOfTotalItems - action.item.amount;
        updatedItems = state.items.filter(item => item.id !== action.item.id);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            updatedNumOfTotalItems: updatedNumOfTotalItems
        }


    }
    if(action.type === 'SETAMOUNT'){
        const prevTotalAmount = action.item.amount * action.item.price;
        const updatedTotalAmount = state.totalAmount - prevTotalAmount + action.newAmount * action.item.price;
        const updatedNumOfTotalItems = state.numOfTotalItems - action.item.amount + action.newAmount;
        let updatedItems;
        if(action.newAmount === 0){
            //delete the item , similar as "action.type === 'Delete", 
            updatedItems = state.items.filter(item => item.id !== action.item.id);
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                updatedNumOfTotalItems: updatedNumOfTotalItems
            }

        }else{
            const updatedItem = {...action.item, amount: action.newAmount};
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                updatedNumOfTotalItems: updatedNumOfTotalItems
            }

        }
    }
    return state;
}


export const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    }
    const setCartItemAmountHandler = (item, newAmount) => {
        dispatchCartAction({type: 'SETAMOUNT',item: item, newAmount: newAmount});
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        numOfTotalItems: cartState.numOfTotalItems,
        addItem: addItemToCartHandler,
        setItemAmount: setCartItemAmountHandler,
        removeItem: removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
