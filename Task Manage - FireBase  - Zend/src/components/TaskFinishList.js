import React, { Component } from 'react';

import TaskFinishItem from './TaskFinishItem';

import { tasksCompletedRef } from '../services/firebase';

class TaskFinishList extends Component {

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

    render() {

        let { items } = this.state;

        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Finish</h3></div>
                <div className="panel-body">

                    {this.showElementBody(items)}

                </div>
            </div>
        );
    }

    showElementBody(items) {
        let xhtml = null;
        if (items.length > 0) {

            xhtml = items.map((item, index) => {
                    return <TaskFinishItem key={index} item={item} index={index} />
            })
            return <ul className="list-group">{xhtml}</ul>;
        } else {
            return <h4>loading</h4> //Khi chua co du lieu thi hien thi loading
        }
    }
}

export default TaskFinishList;
