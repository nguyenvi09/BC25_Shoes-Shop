import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./product-list";
import Modal from "./modal";
export default class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
      detailProduct: "",
    };
  }

  handleDetailProduct = (product) => {
    this.setState({
      detailProduct: product,
    });
  };
  render() {
    const { data, detailProduct } = this.state;
    return (
      <>
        <Modal product={detailProduct} />
        {/* truyền dữ liệu sang list */}
        <ProductList
          getDetailProduct={this.handleDetailProduct}
          dataProduct={data}
        />
      </>
    );
  }
}
