import React, { Component } from 'react'
import { connect } from 'react-redux';
import {sumBy} from 'lodash';

import Notify from './Notify';
import CartItem from './CartItem';
import Helpers from '../libs/Helpers';


class Cart extends Component {
    render() {

        let { carts } = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div className="panel panel-danger">
                    <div className="panel-heading"><h1 className="panel-title">Your Cart</h1></div>
                    <div className="panel-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th width="4%">#</th>
                                    <th>Pokemon</th>
                                    <th width="15%">Price</th>
                                    <th width="4%">Quantity</th>
                                    <th width="20%">Subtotal</th>
                                    <th width="25%">Action</th>
                                </tr>
                            </thead>
                            {this.showElementBody(carts)}
                            {this.showElementFooter(carts)}


                        </table>
                    </div>
                </div>

                <Notify />

            </div>

        );
    }

    showElementBody(carts) {

        let xhtml = null;

        if (carts.length > 0) {

            xhtml = carts.map((cartItem, index) => {
                return <CartItem key={index + '-' + cartItem.quantity} cartItem={cartItem} index={index} />
            });
        }

        return <tbody id="my-cart-body">{xhtml}</tbody>;
    }

    showElementFooter(carts) {

        let xhtml = <tr><th colSpan={6}>Empty product in your cart</th></tr>;

        if (carts.length > 0) {

            let totalQuantity = sumBy(carts, 'quantity');
            let totalPrice = sumBy(carts, (cart) => {
                return cart.product.price * cart.quantity;
            })//thu vien lodash

            xhtml = <tr>
                <td colSpan={4}>There are <b>{totalQuantity}</b> items in your shopping cart.</td>
                <td colSpan={2} className="total-price text-left">{Helpers.toCurrency(totalPrice, 'USD', "right")}</td>
            </tr>
        }
        return <tfoot id="my-cart-footer">{xhtml}</tfoot>;
    }
}

let mapStateToProps = state => {
    return {
        carts: state.carts
    }
};

export default connect(mapStateToProps, null)(Cart);