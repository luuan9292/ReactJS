import React, { Component } from 'react';

class TableItem extends Component {

    handleChangeStatus = () => {
        this.props.handleChangeStatus(this.props.taskItem.id);
    } // truyen du lieu id ra cho cha de update trang thai

    handleDelete = () => {
        this.props.handleDelete(this.props.index);
    } // truyen du lieu id ra cho cha de xoa task

    handleUpdate = () => {
        this.props.handleUpdate(this.props.index);
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

export default TableItem;