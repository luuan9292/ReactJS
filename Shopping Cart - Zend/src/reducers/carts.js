import { remove } from 'lodash';

import * as types from '../constants/ActionType';
import * as notify from '../constants/Notify';


let initialState = [];

let cartItems = JSON.parse(localStorage.getItem(notify.CARTS_FROM_LOCAL_STORAGE));

initialState = (cartItems !== null && cartItems.length > 0) ? cartItems : initialState;

let getProductPosition = (cartItems, product) => {
    let total = cartItems.length;
    for (let i = 0; i < total; i++) {
        if (cartItems[i].product.id === product.id) {
            return i;
        }
    }
    return -1;
}

let carts = (state = initialState, action) => {

    let { product, quantity } = action;
    let position = -1;

    switch (action.type) {
        case types.BUY_PRODUCT:
            position = getProductPosition(state, product);

            if (position > -1) {
                state[position].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }

            localStorage.setItem(notify.CARTS_FROM_LOCAL_STORAGE, JSON.stringify(state));

            return [...state];
        case types.UPDATE_PRODUCT:
            position = getProductPosition(state, product);

            if (position > -1) {
                state[position].quantity = quantity;
            }

            localStorage.setItem(notify.CARTS_FROM_LOCAL_STORAGE, JSON.stringify(state));
            return state;
        case types.REMOVE_PRODUCT:
            remove(state, (cartItem) => {
                return cartItem.product.id === product.id
            });
            localStorage.setItem(notify.CARTS_FROM_LOCAL_STORAGE, JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default carts;