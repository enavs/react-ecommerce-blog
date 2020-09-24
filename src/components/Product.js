import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        const product = this.props.product;

        return (
            <div className="col-md-4">
                <figure className="card card-product">
                    <div className="img-wrap">
                        <img src={ product.image } className="img-fluid" alt={product.name} />
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title">{product.name}</h4>
                        <p className="desc">{product.description}</p>
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="" className="btn btn-sm btn-outline-primary float-right">Add to Cart</a>
                        <div className="price-wrap h5">
                            <span className="price-new">${product.price.toFixed(2)}</span> <del className="price-old">${(product.price * 1.15).toFixed(2)}</del>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }
}