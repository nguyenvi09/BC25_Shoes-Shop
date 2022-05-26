import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { product } = this.props;
    return (
      <div
        className="modal fade bd-example-modal-lg"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Chi tiết sản phẩm</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="card flex-row" style={{ maxWidth: "500px" }}>
              <img
                className="card-img-top"
                src={product.image}
                alt={product.name}
              />
              <div className="card-body">
                <p className="card-text">
                  Tên: {product.name}
                  <br />
                  Giá: {product.price}
                  <br />
                  Mô tả: {product.description}
                  <br />
                  Số lượng: {product.quantity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
