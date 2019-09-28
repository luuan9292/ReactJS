import * as types from '../constants/ActionType';

let initalState = {
    isLogin: true,
    username: 'admin'
}

const checkLogin = (username, password) => {
    if(username === "admin" && password === "123") {
        return true;
    }
    return false;
}

const user = (state = initalState, action) => {
    switch(action.type) {
        case types.USER_LOGIN: {
            let {username, password} = action;
            if(checkLogin(username, password)) {
                state.isLogin = true;
                state.username = username;
            }
            return {...state}
        }
        case types.USER_LOGOUT: {
            state.isLogin = false;
            state.username = null;
            return {...state}
        }
        default: return state;
    }
};

export default user;