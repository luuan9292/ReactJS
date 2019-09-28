//Quan li trang thai cua user
import * as types from '../constant/ActionType';

let defaultState = {
    isLogin: '',
    info: { email: '', uid: '', website: '' }
};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            state.isLogin = true;
            state.info = action.userInfo;
            return { ...state };
        case types.USER_LOGOUT:
            state.isLogin = false;
            state.info = { email: '', uid: '', website: '' };
            return { ...state };
        default: return state;
    }
};

export default user;