import {combineReducers} from 'redux';
import notify from './notify';
import user from './user';

const rootReducer = combineReducers({
    notify,
    user
});

export default rootReducer;