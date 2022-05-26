import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    //bóc tách product được product-list truyền qua
    const { product } = this.props;
    return (
      <div className="col-md-4 card" style={{ width: "18rem", border: "none" }}>
        <button
          onClick={() => this.props.getDetailProduct(product)}
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
          style={{ border: "none" }}
        >
          <img
            className="card-img-top"
            src={product.image}
            alt="Card image cap"
          />
        </button>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price} $</p>
          <a href="#" className="btn btn-dark">
            Add to carts
            <i className="fas fa-cart-plus ml-2" />
          </a>
        </div>
      </div>
    );
  }
}
