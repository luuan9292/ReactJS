import { combineReducers } from 'redux';

import products from './products';
import carts from './carts';
import notify from './notify';

let reducer = combineReducers({
    products,
    carts,
    notify
});

export default reducer;