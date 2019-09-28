import React, { Component } from 'react'

import Helpers from '../libs/Helpers';
import Validate from '../libs/Validate';
import * as Notify from '../constants/Notify';

class ProductItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value : 1
        }
    }

    render() {
        let { product } = this.props;
        return (
            < div className="media product" >
                <div className="media-left">
                    <a href="#1">
                        <img className="media-object" src={`images/${product.image}`} alt={product.name} />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{product.name}</h4>
                    <p>{product.summary}</p>

                    {this.showAreaBuy(product)}

                </div>
            </div >
        );
    }

    handleChange =(event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleClick = (product) => {
        let quantity = +this.state.value;
        if(Validate.checkQuantity(quantity) === false) {

            this.props.changeNotify(Notify.NOTI_GREATER_THAN_ONE);

        } else {
            this.props.buyProduct(product, quantity)
            this.props.changeNotify(Notify.NOTI_ACT_ADD);
            this.setState({
                value : 1
            })
        }
    }

    showAreaBuy = product => {
        let xhtml = null;
        let price = Helpers.toCurrency(product.price, 'USD', "right");

        if (product.canBuy) {
            xhtml =
                <p>
                    <input onChange={this.handleChange} name="value" type="number" value={this.state.value} min={1} />
                    <a onClick={() => {this.handleClick(product)}} href="#1" className="price"> {price}</a>
                </p>
        } else {
            xhtml = <span className="price"> {price}</span>;
        }
        return xhtml;
    }
}



export default ProductItem;