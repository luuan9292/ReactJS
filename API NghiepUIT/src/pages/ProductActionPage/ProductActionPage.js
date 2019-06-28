import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            txtName: "",
            txtPrice: "",
            status: false
        }
    }

    componentDidMount() { // lay du lieu vao de edit
        let { match } = this.props;
        if (match) {
            let id = match.params.id;
            this.props.onEditProduct(id);
        }

    }

    componentWillReceiveProps(nextprops) {// do du lieu vao de edit
        if (nextprops && nextprops.itemEditing) {
            let { itemEditing } = nextprops;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                status: itemEditing.status
            })
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();

        let { id, txtName, txtPrice, status } = this.state;
        let { history } = this.props;

        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: status
        }

        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack(); //Quay lai trang truoc
    }

    render() {
        let { txtName, txtPrice, status } = this.state;
        return (
            <div className="col-md-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Ten san pham: </label>
                        <input type="text" name="txtName" value={txtName} onChange={this.onChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Gia: </label>
                        <input type="number" name="txtPrice" value={txtPrice} onChange={this.onChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Trang thai: </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <input type="checkbox" name="status" value={status} onChange={this.onChange} checked={status} />
                            Con hang
                        </label>
                    </div>
                    <Link to="/product-list" className='btn btn-danger'>Tro Lai</Link>
                    <button type="submit" className="btn btn-primary">Luu Lai</button>
                </form>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
