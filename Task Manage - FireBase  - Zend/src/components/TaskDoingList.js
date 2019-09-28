import React, { Component } from 'react';

import TaskDoingItem from './TaskDoingItem';
import FormAddTask from './FormAddTask';

import { tasksRef } from '../services/firebase';

class TaskDoingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentWillMount() { //Lay du lieu tu firebase
        //Phuong thuc read colection cua firebase
        tasksRef.on("value", data => {
            let items = [];
            data.forEach(item => {
                const { name, email } = item.val(); //dam bao doi tuong chi co name va email
                items.push({ name, email, key:item.key });//them thuoc tinh key de lay id cua item
            })
            this.setState({
                items: items
            })
        });
    }

    render() {

        let { items } = this.state;
        let {user} = this.props

        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Doing</h3></div>
                <div className="panel-body">
                    <ul className="list-group">

                        {this.showElementBody(items)}

                    </ul>
                </div>
                <div className="panel-footer text-right">

                    <FormAddTask user={user} changeNotify={this.props.changeNotify}/>

                </div>
            </div>
        );
    }

    showElementBody = items => {
        let xhtml = null;

        if (items.length > 0) {
            xhtml = items.map((item, index) => {
                return <TaskDoingItem item={item} key={index} index={index} changeNotify={this.props.changeNotify}/>
            });
        } else {
            return  <h4>loading</h4> //Khi chua co du lieu thi hien thi loading
        }

        return xhtml;
    }
}

export default TaskDoingList;
