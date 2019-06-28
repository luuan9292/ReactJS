import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3>Danh sach san pham</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ma</th>
                                <th>Ten</th>
                                <th>Gia</th>
                                <th>Trang Thai</th>
                                <th>Hanh Dong</th>


                            </tr>
                        </thead>
                        <tbody>

                            {this.props.children}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductList;
