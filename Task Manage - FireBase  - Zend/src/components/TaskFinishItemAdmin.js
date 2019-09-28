import React, { Component } from 'react';

import { tasksCompletedRef } from '../services/firebase';
import * as Notify from '../constant/Notify';

class TaskFinishItemAdmin extends Component {

    handleDelete = (key) => {
        tasksCompletedRef.child(key).remove();
        this.props.changeNotify(Notify.NOTI_TYPE_DANGER, Notify.NOTI_REMOVE_TASK_TITLE, Notify.NOTI_REMOVE_TASK_MESSAGE);
    }

    render() {

        let item = { name: '', email: '', key: '' };
        item = (item !== undefined) ? this.props.item : item;

        return (
            <li className="list-group-item">
                <p className="task">{item.name}</p>
                <span className="author">
                    <span className="glyphicon glyphicon-user" aria-hidden="true" />
                    &nbsp;{item.email}
                </span>
                <button onClick={() => this.handleDelete(item.key)} className="btn btn-danger">Delete</button>
            </li>
        );
    }
}

export default TaskFinishItemAdmin;
