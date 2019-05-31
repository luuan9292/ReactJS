import React, { Component } from 'react';
import TableItem from './TableItem';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class TableList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: "",
            filterStatus: -1
        };
    }

    handleFilter = (event) => {
        let filter = {
            name: event.target.name === 'filterName' ? event.target.value : this.state.filterName,
            status: event.target.name === 'filterStatus' ? event.target.value : this.state.filterStatus
        }
        this.props.onFilterTable(filter);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        let { tasks, filterTable, keyword, sort } = this.props;
        console.log(keyword)

        //Phan Filter
        if (filterTable) {
            if (filterTable.name) {
                tasks = tasks.filter(task => {
                    return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
                });
            }
            tasks = tasks.filter(task => {
                if (filterTable.status === -1) {
                    return task;
                } else {
                    return task.status === (filterTable.status === 1 ? true : false);
                }
            });
        }

        //Phan Search
        if (keyword) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }

        //Phan Sort
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            });
        }

        let tableItem = tasks.map((taskItem, index) => {
            return <TableItem key={taskItem.id} index={index}
                taskItem={taskItem} />
        });

        return (
            <table className="table table-bordered table-hover">
                <thead className="thead-light">
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Ten</th>
                        <th className="text-center">Trang Thai</th>
                        <th className="text-center">Hanh Dong</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td />
                        <td>
                            <input type="text" name="filterName" onChange={this.handleFilter} value={this.state.filterName} className="form-control" />
                        </td>
                        <td>
                            <select name="filterStatus" onChange={this.handleFilter} value={this.state.filterStatus} className="form-control">
                                <option value={-1}>Tat Ca</option>
                                <option value={0}>An</option>
                                <option value={1}>Kich Hoat</option>
                            </select>
                        </td>
                        <td />
                    </tr>

                    {tableItem}

                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(action.filterTask(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableList);