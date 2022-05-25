import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    //bóc tách product được product-list truyền qua
    const { product } = this.props;
    return (
      <div className="col-md-4 card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={product.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price} $</p>
          <a href="#" className="btn btn-dark">
            add to carts
            <i className="fas fa-cart-plus" />
          </a>
        </div>
      </div>
    );
  }
}
