import * as types from '../constants/ActionTypes';

let initialState = {
    name : '',
    status : -1
}

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FILTER_TABLE:
            return {
                name : action.filter.name,
                status : +action.filter.status
            };
        default: return state;
    }
}

export default reducer;