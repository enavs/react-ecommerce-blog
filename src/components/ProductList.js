import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    render() {
        const products = this.props.products;
        
        return (
                <React.Fragment>
                    {products.map(product => <Product product={product} key={product.id} handleAddToCart={this.props.handleAddToCart} />)}
                </React.Fragment>
        )
    }
}
