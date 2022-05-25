import React, { Component } from "react";
import ProductItem from "./product-item";
export default class ProductList extends Component {
  renderProductList = () => {
    return this.props.dataProduct.map((item) => {
      return <ProductItem key={item.id} product={item} />;
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProductList()}</div>
      </div>
    );
  }
}
