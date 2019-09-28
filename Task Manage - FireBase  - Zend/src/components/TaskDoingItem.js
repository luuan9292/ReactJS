import React, { Component } from 'react';

import { tasksCompletedRef, tasksRef } from '../services/firebase';
import * as Notify from '../constant/Notify';

class TaskDoingItem extends Component {

    handleComplete = item => {
        //Remove task hien tai khi an completed, key la id cua doi tuong
        tasksRef.child(item.key).remove();

        //Them vao document completed
        tasksCompletedRef.push(item);

        this.props.changeNotify(Notify.NOTI_TYPE_DANGER, Notify.NOTI_ADD_TASK_TITLE, Notify.NOTI_ADD_TASK_MESSGAE);

    }

    render() {

        //Kiem tra name va email co ton tai
        let item = { name: '', email: '' };
        item = (this.props.item !== undefined) ? this.props.item : item;

        return (
            <li className="list-group-item">
                <p className="task">{item.name}</p>
                <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{item.email}</span>
                <button onClick={() => this.handleComplete(item)} type="button" className="btn btn-warning btn-xs">Completed</button>
            </li>
        );
    }
}

export default TaskDoingItem;
