import React, { Component } from 'react';

import TaskFinishItemAdmin from './TaskFinishItemAdmin';

import { tasksCompletedRef } from '../services/firebase';
import * as Notify from '../constant/Notify';

class TaskFinishListAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentWillMount() {//Lay du lieu tu firebase
        //Phuong thuc read colection cua firebase
        tasksCompletedRef.on("value", data => {
            let items = [];
            data.forEach(item => {
                const { name, email } = item.val(); //dam bao doi tuong chi co name va email
                items.push({ name, email, key: item.key });//them thuoc tinh key de lay id cua item
            })
            this.setState({
                items: items
            })
        });
    }

    handleClear = () => {
        tasksCompletedRef.set([]);
        this.props.changeNotify(Notify.NOTI_TYPE_WARNING, Notify.NOTI_CLEARALL_TASK_TITLE, Notify.NOTI_CLEARALL_TASK_MESSAGE)
    }

    render() {

        let { items } = this.state;

        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Finish</h3></div>
                <div className="panel-body">

                    {this.showElementBody(items)}

                </div>

                <div className="panel-footer text-right">
                    <button onClick={this.handleClear} className="btn btn-danger">Clear All</button>
                </div>

            </div>
        );
    }

    showElementBody(items) {
        let xhtml = null;
        if (items.length > 0) {

            xhtml = items.map((item, index) => {
                    return <TaskFinishItemAdmin key={index} item={item} index={index} changeNotify={this.props.changeNotify} />
            })
            return <ul className="list-group">{xhtml}</ul>;
        } else {
            return <h4>loading</h4> //Khi chua co du lieu thi hien thi loading
        }
    }
}

export default TaskFinishListAdmin;
