import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./product-list";
export default class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }
  render() {
    const { data } = this.state;
    return (
      <>
        {/* truyền dữ liệu sang list */}
        <ProductList dataProduct={data} />
      </>
    );
  }
}
