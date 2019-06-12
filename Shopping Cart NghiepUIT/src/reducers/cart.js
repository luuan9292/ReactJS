import * as Types from '../constants/ActionType';

let data = JSON.parse(localStorage.getItem('cart'));
let initialState = data ? data : [];

let cart = (state = initialState, action) => {
    let { product, quantity } = action;
    let index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findIndex(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product: product,
                    quantity: quantity
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findIndex(state, product);
            if(index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findIndex(state, product);
            if(index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default: return [...state];

    }
};

let findIndex = (cart, product) => {
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id === product.id) {
            index = i;
            break;
        }
    }
    return index;
};

export default cart;