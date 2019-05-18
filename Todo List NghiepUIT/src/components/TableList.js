import React, { Component } from 'react';
import TableItem from './TableItem';

class TableList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName : "",
            filterStatus : -1
        };
    }

    handleFilter = (event) => {
        this.props.handleFilter( event.target.name === 'filterName' ? event.target.value : this.state.filterName,
                                 event.target.name === 'filterStatus' ? event.target.value : this.state.filterStatus);
        this.setState({
            [ event.target.name ] : event.target.value
        });
    } //Ham xua ly loc

    render() {
        let { tasks } = this.props;

        let tableItem = tasks.map( (taskItem,index) => {
            return <TableItem key={ taskItem.id } index={ index } 
                            taskItem={ taskItem } 
                            handleChangeStatus={ this.props.handleChangeStatus }
                            handleDelete={this.props.handleDelete}
                            handleUpdate={ this.props.handleUpdate } />
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
                            <input type="text" name="filterName" onChange={ this.handleFilter } value={ this.state.filterName } className="form-control" />
                        </td>
                        <td>
                            <select name="filterStatus" onChange={ this.handleFilter } value={ this.state.filterStatus } className="form-control">
                                <option value={-1}>Tat Ca</option>
                                <option value={0}>An</option>
                                <option value={1}>Kich Hoat</option>
                            </select>
                        </td>
                        <td />
                    </tr>
                    
                    { tableItem }

                </tbody>
            </table>
        );
    }
}

export default TableList;