import React, { Component } from 'react';
import * as Message from '../constants/Message';

class Product extends Component {

    showRating = rating => {
        let result = [];
        if(rating > 0) {
            for(let i = 0; i < rating; i++) {
                result.push(<i key={"i" + i} className="fa fa-star" />)
            }
            for(let j = 0; j < 5-rating; j++) {
                result.push(<i key={"j" + j} className="fa fa-star-o" />)
            }
        }
        return result
    };

    onAddToCart = product => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS)
    }

    render() {
        let { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image} className={product.name} alt="hinh"/>
                        <a href="#home">
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="#home">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>

                                {this.showRating(product.rating)}

                            </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                    </p>
                        <div className="card-footer">
                            <span className="left">{product.price}</span>
                            <span className="right">
                                <a onClick={() => this.onAddToCart(product)}    

                                className="btn-floating blue-gradient"                          
                                    data-toggle="tooltip" data-placement="top" href="#home" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;