import React, { Component } from 'react'
import Product from './Product'


export default class ProductList extends Component {
    render() {
        const products = this.props.products;

        return (
            <div className="row">
                {products.map((product, key) => <Product product={product} handleAddToCart={this.props.handleAddToCart} key={product.id} />)}
            </div>
        )
    }
}