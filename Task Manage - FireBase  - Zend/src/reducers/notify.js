import * as types from '../constant/ActionType';

let initialState = {
    isShow: false,
    style: '',
    title: '',
    content: ''
};

const notify = (state = initialState, action) => {

    let { style = 'info', title, content } = action

    switch (action.type) {

        case types.CHANGE_NOTIFY:

            state.isShow = true;
            state.style = style;
            state.title = title;
            state.content = content;

            return {...state};

        case types.HIDE_NOTIFY:

            state.isShow = false;

            return {...state};

        default: return state;
    }
}

export default notify