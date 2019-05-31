import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';


class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : "",
            name : "",
            status : false
        };
    }

    handleCloseForm = () => {
       this.props.onCloseForm();
    } // kich hoat ham de close form tu cha

    handleChangeForm = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        if(name === 'status') {
            value = target.value === 'true' ? true : false;
        }

        this.setState({
            [ name ] : value
        });
    } //Lay gia tri tu Form va gan vao state

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.handleClearForm();
        this.handleCloseForm();
    } // tra du lieu ra cho cha de them moi

    handleClearForm = () => {
        this.setState({
            name : "",
            status : false
        });
    } //Xu ly clear form khi an huy bo

    componentWillMount() {
        if( this.props.itemEditing ) {
            this.setState({
                id : this.props.itemEditing.id,
                name : this.props.itemEditing.name,
                status : this.props.itemEditing.status
            });
        } else {
            this.handleClearForm();
        }
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps && nextProps.itemEditing ) {
            this.setState({
                id : nextProps.itemEditing.id,
                name : nextProps.itemEditing.name,
                status : nextProps.itemEditing.status
            });
        } else {
            this.setState({
                id : "",
                name : "",
                status : false
            });
        }
    }

    render() {

        let { id } = this.state;

        if(!this.props.isDisplayForm) {
            return "";
        }

        return (
            <div className="card">
                <div className="card-header bg-warning">
                    <h3 className="card__title">
                        { id === "" ? 'Them Cong Viec' : 'Cap Nhat'}
                        <span className="float-right" onClick={ this.handleCloseForm }><i className="fa fa-times-circle" /></span>
                    </h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Ten</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChangeForm} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Trang Thai</label>
                            <select name="status" value={this.state.status} onChange={this.handleChangeForm} className="form-control">
                                <option value={true}>Kich Hoat</option>
                                <option value={false}>An</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span><i className="fa fa-plus mr-2" /></span>Luu Lai
                            </button>
                            <button type="button" onClick={this.handleClearForm} className="btn btn-danger">
                                <span><i className="fa fa-close mr-2" /></span>Huy Bo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask : (task) => {
            dispatch(action.saveTask(task));
        },
        onCloseForm : () => {
            dispatch(action.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);