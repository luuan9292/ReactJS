import * as types from '../constants/ActionTypes';

let autoRandomStringGUID = () => {
    return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
}

let autoGenerateRandomGUID = () => {
    return autoRandomStringGUID() + autoRandomStringGUID() + '-' + autoRandomStringGUID() + autoRandomStringGUID()
} // Tu dong tao id

let findIndex = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
} //Tim vi tri trong mang tasks khi truyen id

let data = JSON.parse(localStorage.getItem('tasks'));

let initState = data ? data : [];

let reducer = (state = initState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;

        case types.SAVE_TASK:
            let task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            }
            if(!task.id) {
                task.id = autoGenerateRandomGUID();
                state.push(task)
                
            } else {
                let indexEdit = findIndex(state, task.id);
                state[indexEdit] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.UPDATE__STATUS:
            let indexUpdate = findIndex(state, action.id);
            if (indexUpdate !== -1) {
                let cloneTask = {
                    ...state[indexUpdate],
                    status: !state[indexUpdate].status
                }
                state[indexUpdate] = cloneTask;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.DELETE_TASK:
            let indexDelete = findIndex(state, action.id);
            if (indexDelete !== -1) {
                state.splice(indexDelete, 1);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        default: return state;
    }
};

export default reducer;
