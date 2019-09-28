import React, { Component } from 'react';

import {tasksRef} from "../services/firebase";
import * as Notify from '../constant/Notify';

class FormAddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }

    handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        let {task} = this.state;
        let{email} = this.props.user.info;

        tasksRef.push({
            name: task,
            email: email
        });

        this.props.changeNotify(Notify.NOTI_TYPE_SUCCESS, Notify.NOTI_ADD_TASK_TITLE, Notify.NOTI_ADD_TASK_MESSGAE);

        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" name="task" onChange={this.handleChange} value={this.state.task} className="form-control" placeholder="Task" />
                </div>
                <button type="submit" className="btn btn-info">Add</button>
            </form>
        );
    }
}

export default FormAddTask;
