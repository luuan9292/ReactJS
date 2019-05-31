import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions/index';

class Sort extends Component {

    handleSort = (sortBy, sortValue) => {
        this.props.onSort({
            by : sortBy,
            value :  sortValue
        });
    }

    render() {

        return (
            <div className="col-md-6">
                <div className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">
                        Sap Xep <span><i className="fa fa-sort ml-2" /></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={ () => this.handleSort('name', 1)}>
                            <a href="#h" role="button" className="sort__selected">
                                <span><i className="fa fa-sort-alpha-asc mr-2" />Ten A-Z</span>
                            </a>
                        </li>
                        <li onClick={ () => this.handleSort('name', -1)}>
                            <a href="#h" role="button" className="sort__selected">
                                <span><i className="fa fa-sort-alpha-desc mr-2" />Ten Z-A</span>
                            </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li onClick={ () => this.handleSort('status', 1)}>
                            <a href="#h" role="button">Trang Thai Kich Hoat</a>
                        </li>
                        <li onClick={ () => this.handleSort('status', -1)}>
                            <a href="#h" role="button">Trang Thai Kich An</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sort : state.sort
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort : (sort) => {
            dispatch(action.sortTask(sort));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);