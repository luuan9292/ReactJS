import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';

import {actFetchProductsRequest, actDeleteProductRequest} from '../../actions/index';

class ProductListPage extends Component {
    
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = id => {
        this.props.onDeleteProduct(id);
    }

    render() {

        let {products} = this.props;

        return (
            <div className="col-md-12">
                <Link to="/product/add" className="btn btn-info">Them San Pham</Link>

                <ProductList>
                    {this.showProducts(products)}
                </ProductList>

            </div>
        );
    }
    showProducts = (products) => {
        let result = null;
        
        if(products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem product={product} onDelete={this.onDelete} key={index} index={index}/>
                );
            });
        }

        return result;
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
};

const mapDisptachToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct: id => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps,mapDisptachToProps)(ProductListPage);
