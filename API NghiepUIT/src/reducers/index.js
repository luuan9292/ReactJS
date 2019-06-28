import { combineReducers } from 'redux';

import products from './products';
import itemEditing from './ItemEditing';

const reducer = combineReducers({
    products,
    itemEditing
});

export default reducer;