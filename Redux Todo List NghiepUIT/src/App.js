import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/control';
import TableList from './components/TableList';
import { connect } from 'react-redux';
import * as action from './actions/index';

class App extends Component {

    handleDisplayForm = () => {
        let { itemEditing } = this.props;
        if(itemEditing && itemEditing.id !== ''){
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
        this.props.onClearForm({
            id : "",
            name : "",
            status : false
        })
    } //Toogle form Redux

    render() {

        let { isDisplayForm } = this.props;

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quan Ly Cong Viec</h1>
                </div>
                <div className="row mt-5">
                    {/* Phan Them Cong Viec */}
                    <div className={ isDisplayForm ? "col-md-4" : ''}>

                        { <TaskForm /> }

                    </div>
                    {/* Phan Quan Li */}
                    <div className={ isDisplayForm ? "col-md-8" : "col-md-12"}>
                        <button type="button" className="btn btn-primary" onClick={ this.handleDisplayForm }>
                            <span><i className="fa fa-plus mr-2" /></span>Them Cong Viec
                        </button>

                        <Control />

                        {/* Phan List */}
                        <div className="row mt-3">
                            <div className="col-md-12">

                                <TableList/>

                            </div>
                        </div>
                    </div>
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
        onToggleForm : () => {
            dispatch(action.toggleForm());
        },
        onClearForm : (task) => {
            dispatch(action.editTask(task));
        },
        onOpenForm : () => {
            dispatch(action.openForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


