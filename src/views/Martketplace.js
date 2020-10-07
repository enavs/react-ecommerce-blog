import React, { Component } from 'react'
import ProductList from '../components/ProductList'

export default class Martketplace extends Component {
    render() {
        return (
            <div className="row">
                <ProductList products={this.props.products} handleAddToCart={this.props.handleAddToCart} />
            </div>
        )
    }
}
