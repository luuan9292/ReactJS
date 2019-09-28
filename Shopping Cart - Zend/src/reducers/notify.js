import * as types from '../constants/ActionType';
import * as notify from '../constants/Notify';


let initialState = notify.NOTI_READY_TO_BUY;

let notifyReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CHANGE_NOTIFY:
            return action.notify;
        default: return state;
    }
}

export default notifyReducer;