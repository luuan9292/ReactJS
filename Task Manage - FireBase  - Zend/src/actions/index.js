import * as types from '../constant/ActionType';

export const actChangeNotify = (style, title, content) => {
    return {
        type : types.CHANGE_NOTIFY,
        style,
        title,
        content
    }
}

export const actHideNotify = () => {
    return {
        type: types.HIDE_NOTIFY
    }
}

export const actLogin = userInfo => {
    return {
        type: types.USER_LOGIN,
        userInfo
    }
}

export const actLogout = () => {
    return {
        type: types.USER_LOGOUT
    }
}