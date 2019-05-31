import * as types from '../constants/ActionTypes';

let initialState = '';

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SEARCH:
            return action.keyword;
        default: return state;
    }
}

export default reducer;