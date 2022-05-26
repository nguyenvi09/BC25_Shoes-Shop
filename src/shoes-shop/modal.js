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
              <h4 className="modal-title font-weight-bold">Details</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="row">
              <div className="col-sm-7">
                <img
                  style={{ width: "100%" }}
                  src={product.image}
                  alt={product.alias}
                />
              </div>
              <div className="col-sm-5">
                <table className="table font-weight-bold">
                  <tbody>
                    <tr>
                      <td style={{ border: "none" }}>Name:</td>
                      <td style={{ border: "none" }}> {product.name}</td>
                    </tr>
                    <tr>
                      <td>Price:</td>
                      <td> {product.price}</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                      <td> {product.description}</td>
                    </tr>
                    <tr>
                      <td style={{ width: "100px" }}>Quantity:</td>
                      <td> {product.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
