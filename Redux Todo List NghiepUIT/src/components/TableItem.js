import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class TableItem extends Component {

    handleChangeStatus = () => {
        this.props.onUpdateStatus(this.props.taskItem.id);
    }

    handleDelete = () => {
        this.props.onDeleteTask(this.props.taskItem.id);
        this.props.onCloseForm();
    }

    handleUpdate = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.taskItem);
    }

    render() {

        let { taskItem, index } = this.props;

        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ taskItem.name }</td>
                <td onClick={this.handleChangeStatus} className="text-center">                  
                    <span 
                        className={ taskItem.status === true ? "badge badge-danger" : "badge badge-success"}>
                                  { taskItem.status === true ? 'Kich Hoat' : 'An'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" onClick={this.handleUpdate} className="btn btn-warning">
                        <i className="fa fa-wrench mr-2" />Sua
                    </button>
                    &nbsp;
                    <button type="button" onClick={ this.handleDelete } className="btn btn-danger">
                        <i className="fa fa-trash mr-2" />Xoa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus : (id) => {
            dispatch(action.updateStatus(id))
        },
        onDeleteTask : (id) => {
            dispatch(action.deleteTask(id))
        } ,
        onCloseForm : () => {
            dispatch(action.closeForm())
        },
        onOpenForm : () => {
            dispatch(action.openForm())
        },
        onEditTask : (task) => {
            dispatch(action.editTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TableItem);