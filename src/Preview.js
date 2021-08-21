import React, { Component } from "react";
import { connect } from "react-redux";

import {} from "./action/userActions";
import Web3 from "web3";
import { Input, InputGroup, Form, FormGroup, Alert } from "reactstrap";
import PYE from "./abis/PYE.json";
import MLQ from "./abis/MLQ.json";
const RinkMLQAddress = "0xa419c8F3CDF77FeD62e2D86644f0085764C1A857";
const RinkPYEAddress = "0xAE0251abB8502522B8b98EdcA19Cd689651560f6";

class Preview extends Component {
  state = {
    pre: "https://ipfs.io/ipfs/",
    preX: "https://ipfs.io/ipfs/",
  };

  render() {
    const Pye = this.props.pye;
    console.log(Pye);
    return (
      <div key={Pye.id} style={{ position: "relative" }}>
        {Pye.layers.map((layer) => (
          <div key={layer.layerID}>
            <img
              src={"https://ipfs.io/ipfs/" + layer.layerData.file}
              alt=""
              style={{
                position: "absolute",
                width: `${Number(layer.keys[0].keyParams.z)}%`,
                height: "auto",
                top: `${Number(layer.keys[0].keyParams.y)}%`,
                left: `${Number(layer.keys[0].keyParams.x)}%`,
              }}
              key={layer.layerID}
            />
            <p
              style={{
                position: "absolute",
                width: `${Number(layer.keys[0].keyParams.z)}%`,
                height: "auto",
                bottom: `${0}%`,
                left: `${0}%`,
              }}
            >
              {layer.layerID}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Preview);
