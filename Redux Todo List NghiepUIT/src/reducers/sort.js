import * as types from '../constants/ActionTypes';

let initialState = {
    by : '',
    value : 0
};

let reducer = (state =  initialState, action) => {
    switch(action.type) {
        case types.SORT:
            return {
                by : action.sort.by,
                value : action.sort.value
            }
        default: return state;
    }
};

export default reducer;