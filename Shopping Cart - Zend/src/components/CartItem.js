import React, { Component } from 'react'
import { connect } from 'react-redux';

import Helpers from '../libs/Helpers';
import { actUpdateProduct, actRemoveProduct, actChangeNotify } from '../actions/index';
import * as Notify from '../constants/Notify';
import Validate from '../libs/Validate';

class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDelete = (product) => {
        this.props.removeProduct(product);
        this.props.changeNotify(Notify.NOTI_ACT_DELETE);
    }

    handleUpdate = (product, quantity) => {
        if (Validate.checkQuantity(quantity) === false) {

            this.props.changeNotify(Notify.NOTI_GREATER_THAN_ONE);

        } else {
            this.props.updateProduct(product, +quantity);
            this.props.changeNotify(Notify.NOTI_ACT_UPDATE);
        }
    }


    render() {

        let { cartItem, index } = this.props;
        let { product } = cartItem;
        let quantity = (this.state.value !== 0) ? this.state.value : cartItem.quantity;

        return (
            < tr >
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{Helpers.toCurrency(product.price, 'USD', "right")}</td>
                <td><input onChange={this.handleChange} name="value" type="number" value={quantity} min={1} /></td>
                <td>
                    {this.showSubTotal(product.price, quantity)}
                </td>
                <td>
                    <a onClick={() => this.handleUpdate(product, quantity)} className="label label-info update-cart-item" href="#1" data-product>Update</a>
                    <a onClick={() => this.handleDelete(product)} className="label label-danger delete-cart-item" href="#1" data-product>Delete</a>
                </td>
            </tr >
        );
    }

    showSubTotal = (price, quantity) => {
        let result = null;
        result = <strong>{Helpers.toCurrency(price * quantity, 'USD', "right")}</strong>
        return result;
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        removeProduct: (product) => {
            dispatch(actRemoveProduct(product));
        },
        updateProduct: (product, quantity) => {
            dispatch(actUpdateProduct(product, quantity));
        },
        changeNotify: (notify) => {
            dispatch(actChangeNotify(notify));
        }
    }
}

export default connect(null, mapDispatchToProps)(CartItem);