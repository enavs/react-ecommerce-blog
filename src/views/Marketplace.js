import React, { Component } from 'react'
import ProductList from '../components/ProductList';

export default class Marketplace extends Component {
    render() {
        const products = this.props.products;
        return (
            <>
                <ProductList products={products} handleAddToCart={this.props.handleAddToCart} />
            </>
        )
    }
}