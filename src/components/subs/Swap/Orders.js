import React, { Component } from "react";
import { Button } from "reactstrap";
import Display from "./Display";
class Orders extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container"></div>
        <Display style={{ zIndex: "100", marginTop: "2em" }} />
        <div
          className="container"
          style={{ width: "500px", padding: "0", zIndex: "5" }}
        >
          <div style={{ width: "500px" }}>
            <p className="alert alert-info mt-1">Place Buy and Sell Orders</p>
          </div>
        </div>
        <div className="container" style={{ width: "500px", marginTop: "3em" }}>
          <div className="alert alert-success">
            <div className="row">
              <div className="col">Token Info</div>
              <div className="col">Amount</div>
              <div className="col">Lowest Seller</div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
              <div className="col">Price</div>
            </div>
          </div>
          <div className="alert alert-danger">
            <div className="row">
              <div className="col">Token Info</div>
              <div className="col">Amount</div>
              <div className="col">Highest Buyer</div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
              <div className="col">Price</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
