import React, { Component } from 'react';
import {Route, NavLink } from 'react-router-dom';

import Product from './Product';

class Products extends Component {

    render() {

        let products = [
            {
                id: 1,
                slug: 'iphone',
                name: 'iphone X',
                price: 3500000
            },
            {
                id: 2,
                slug: 'samsung',
                name: 'samsung galaxy s7',
                price: 12000000
            },
            {
                id: 3,
                slug: 'oppo',
                name: 'oppo f1s',
                price: 7000000
            }
        ]

        let { match, location } = this.props;
        let url = match.url;

        let result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                <li className="list-group-item">
                    {product.id} - {product.name} - {product.price}
                </li>
                </NavLink>
            )
        })

        console.log(location)

        return (
            <div className='container'>
                <h1>Danh sach san pham</h1>

                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:slug" component={Product} />  {/* //Khai bao param */}              
                </div>
            </div>

        );
    }
}

export default Products;


