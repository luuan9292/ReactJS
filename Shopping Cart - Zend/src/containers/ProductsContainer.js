import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import * as notify from '../constants/Notify';
import {actChangeNotify, actBuyProduct} from '../actions/index';


class ProductContainer extends Component {
    render() {
        let { products } = this.props;
        return (
            <ProductList products={products}>
                {this.showElementProduct(products)}
            </ProductList>
        );
    }

    showElementProduct = products => {

        let xhtml = <b>{notify.NOTI_EMPTY_PRODUCT}</b>;
    
        if (products.length > 0) {
            xhtml = products.map((product, index) => {
                return <ProductItem 
                key={index} 
                product={product} index={index} 
                buyProduct = {this.props.buyProduct}
                changeNotify = {this.props.changeNotify}
                />;
            });
        }
        return xhtml;
    }
}


const mapStateToProp = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        buyProduct : (product, quantity) =>  {
            dispatch(actBuyProduct(product, quantity));
        },
        changeNotify: (notify) => {
            dispatch(actChangeNotify(notify));
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(ProductContainer);
