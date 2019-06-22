import React, { Component } from 'react';

class Product extends Component {

    render() {

        let { match } = this.props;
        let slug = match.params.slug;
        console.log(slug)

        return (
            <h1>
                   Day la trang chi tiet san pham : {slug}
            </h1>

        );
    }
}

export default Product;


