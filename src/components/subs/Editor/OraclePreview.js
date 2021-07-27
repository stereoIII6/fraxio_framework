/*
//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//                                                                                  //
//                                                                                  //
//            _____               _   _                                             //
//           |  ___| __ __ _  ___| |_(_) ___                                        //
//           | |_ | '__/ _` |/ __| __| |/ _ \                                       //
//           |  _|| | | (_| | (__| |_| | (_) |                                      //
//           |_|  |_|  \__,_|\___|\__|_|\___/                                       //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              . you done something right . now you know where to look @.
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//          @title :: Fractio Framework React App                                   // 
//          @id :: FR-90405                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90405 is Mini Player for the React Frontend.           //
//                                                                                  //
//                                                                                  //
//          @author :: fractio.xyz                                                  //
//          @b2bContact :: irvin@fractio.xyz                                        //
//          @OpSecContact :: nmisner@fractio.xyz                                    //
//          @DigitalArchitecture :: aron@fractio.xyz                                //
//          @SocialMediaContact :: poblano.daniel@fractio.xyz                       //
//          @CommunityManagement :: louell_sala@fractio.xyz                         //
//                                                                                  //
//                                                                                  //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////
*/
// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import Web3 from "web3";
import { connect } from "react-redux";
import {} from "../../action/pyeActions";
import { getFeeds } from "../../action/userActions";
import { Input } from "reactstrap";
import Toolbox from "./Toolbox";
import PriceFeed from "../../../abis/PriceFeed.json";
const RinkPFAddress = "0x7CAc519Ab2245938DDd087eD29A16794CC090EaD";

class OraclePreview extends Component {
  static propTypes = {
    bake: PropTypes.bool,
    slice: PropTypes.bool,
    activeL: PropTypes.number,
    frame: PropTypes.bool,
    kopn: PropTypes.bool,
    activeK: PropTypes.number,
    stateK: PropTypes.object,
    pyes: PropTypes.array,
    pyeDrafts: PropTypes.array,
    pyeSamples: PropTypes.array,
    users: PropTypes.array,
    cols: PropTypes.object,
    PYE: PropTypes.object,
    INIT: PropTypes.object,
    feeds: PropTypes.array,
    getFeeds: PropTypes.func,
  };
  state = {};
  componentDidMount() {
    this.loadWeb3();
    this.loadBlockChainData();
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      console.log("ethereum", window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      console.log("web3", window.web3);
    } else window.alert("Use a Metamask");
  }
  async loadBlockChainData(oracle) {
    const web3 = window.web3;
    let PriceFeeds;
    let result;
    let namer = [];
    let feed = [];

    console.log(this.props.oracle);
    PriceFeeds = new web3.eth.Contract(PriceFeed.abi, RinkPFAddress);
    if (oracle === "no") result = null;
    if (oracle === "static") result = null;
    if (oracle === "crypto") {
      result = await PriceFeeds.methods.cryptoFeeds().call();
      namer = ["bat", "bnb", "btc", "eth", "link", "rep", "snx", "zrx"];
      for (let i = 0; i < this.countProperties(result); i++) {
        feed[i] = { name: namer[i], value: result[i] };
      }
      console.log(feed);
      this.getFeeds(feed);
    }
    if (oracle === "currency") {
      result = await PriceFeeds.methods.currencyFeeds().call();
      namer = ["aud", "chf", "eur", "gbp", "jpy", "usdc", "dai"];
      for (let i = 0; i < this.countProperties(result); i++) {
        feed[i] = { name: namer[i], value: result[i] };
      }
      console.log(feed);
      this.props.getFeeds(feed);
    }
    if (oracle === "commodity") {
      result = await PriceFeeds.methods.commodFeeds().call();
      namer = ["oil", "silver", "gold"];
      for (let i = 0; i < this.countProperties(result); i++) {
        feed[i] = { name: namer[i], value: result[i] };
      }
      console.log(feed);
      this.props.getFeeds(feed);
    }
  }
  fiindOracles = () => {
    const layerCount = this.props.PYE.layers.length;
    let oracleInfo = [];

    for (let i = 0; i < layerCount; i++) {
      if (
        this.props.PYE.layers[i].layerOracle.name !== "no" ||
        this.props.PYE.layers[i].layerOracle.name !== "static"
      ) {
        // IF layer has no oracle //
        // always use key0 info
        oracleInfo[i] = {
          layerID: this.props.PYE.layers[i].layerID,
          type: "static",
          keys: [],
        };
      } else if (
        // IF layer has an oracle //
        this.props.PYE.layers[i].layerOracle.name !== "crypto" ||
        this.props.PYE.layers[i].layerOracle.name !== "currency" ||
        this.props.PYE.layers[i].layerOracle.name !== "commodity"
      ) {
        // Grab Oracle Name
        let OracleType = this.props.PYE.layers[i].layerOracle.type;
        let OracleName = this.props.PYE.layers[i].layerOracle.name;
        // Grab Oracle Data
        let OracleData = this.props.PYE.layers[i].layerOracle.starter;
        // Count keys of layer
        const keyCount = this.props.PYE.layers[i].keys.length;
        //
      }
      return oracleInfo;
    }
  };
  render() {
    const oI = this.fiindOracles();
    return (
      <div
        style={{
          width: "820px",
          height: `${this.props.PYE.format.y}20px`,
          margin: "0px auto",
        }}
      >
        {this.props.kopn ? <Toolbox style={{ width: "260px" }} /> : null}
        <div
          id="md-screen"
          style={{
            background: "white",

            backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
            width: this.props.PYE.format.x * 100,

            height: this.props.PYE.format.y * 100,
            overflow: "hidden",
            position: "relative",
            top: "10px",
            left: (820 - this.props.PYE.format.x * 100) / 2,
            marginBottom: "20px",
          }}
        >
          {this.props.PYE.layers.map(
            (layer) =>
              layer.layerID === 0 ? null : layer.layerOracle.type ===
                "static" ? (
                // STATIC LAYER
                layer.layerType === "empty" ? null : layer.layerType === // handle empty layer types
                  "text" ? (
                  <div
                    style={{
                      position: "absolute",
                      fontFamily: layer.layerData.font,
                      fontSize: `${layer.keys[0].keyParams.z / 20}em`,
                      opacity: layer.keys[0].keyParams.o,
                      transform: `rotate(${layer.keys[0].keyParams.r}deg)`,
                      left: `${parseInt(layer.keys[0].keyParams.x) + 5}%`,
                      top: `${parseInt(layer.keys[0].keyParams.y) + 5}%`,
                    }}
                  >
                    {layer.layerData.text}
                  </div> // handle text layer types
                ) : layer.layerType === "image" ||
                  layer.layerType === "form" ? (
                  <img
                    src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
                    alt=""
                    style={{
                      position: "absolute",
                      width:
                        this.props.PYE.format.x > this.props.PYE.format.y
                          ? `${layer.keys[0].keyParams.z}%`
                          : "auto",
                      height:
                        this.props.PYE.format.x > this.props.PYE.format.y
                          ? "auto"
                          : `${layer.keys[0].keyParams.z}%`,
                      opacity: layer.keys[0].keyParams.o,
                      transform: `rotate(${layer.keys[0].keyParams.r}deg)`,
                      left: `${parseInt(layer.keys[0].keyParams.x) + 5}%`,
                      top: `${parseInt(layer.keys[0].keyParams.y) + 5}%`,
                    }}
                  /> // handle image layer types
                ) : layer.layerType ===
                  "audio" ? null /** <= AUDIO HERE */ : layer.layerType ===
                  "video" ? null /** <= VIDEO HERE */ : null /** ERROR */
              ) : // ORACLE LAYER
              layer.layerType === "empty" ? null : layer.layerType ===
                "text" ? ( // handle empty layer types
                <div
                  style={{
                    position: "absolute",
                    fontFamily: layer.layerData.font,
                    fontSize: `${layer.keys[layer.actK].keyParams.z / 20}em`,
                    opacity: layer.keys[layer.actK].keyParams.o,
                    transform: `rotate(${
                      layer.keys[layer.actK].keyParams.r
                    }deg)`,
                    left: `${parseInt(layer.keys[layer.actK].keyParams.x) +
                      5}%`,
                    top: `${parseInt(layer.keys[layer.actK].keyParams.y) + 5}%`,
                  }}
                >
                  {layer.layerData.text}
                </div> // handle text layer types
              ) : layer.layerType === "img" || layer.layerType === "form" ? (
                <img
                  src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
                  alt=""
                  style={{
                    position: "absolute",
                    width:
                      this.props.PYE.format.x > this.props.PYE.format.y
                        ? `${layer.keys[0].keyParams.z}%`
                        : "auto",
                    height:
                      this.props.PYE.format.x > this.props.PYE.format.y
                        ? "auto"
                        : `${layer.keys[0].keyParams.z}%`,
                    opacity: layer.keys[0].keyParams.o,
                    transform: `rotate(${layer.keys[0].keyParams.r}deg)`,
                    left: `${parseInt(layer.keys[0].keyParams.x) + 5}%`,
                    top: `${parseInt(layer.keys[0].keyParams.y) + 5}%`,
                  }}
                />
              ) : layer.layerType ===
                "audio" ? null /** <= AUDIO HERE */ : layer.layerType ===
                "video" ? null /** <= VIDEO HERE */ : null /** ERROR */
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  pyes: state.pyeState.pyes,
  bake: state.pyeState.bake,
  slice: state.pyeState.slice,
  activeL: state.pyeState.activeL,
  frame: state.pyeState.frame,
  activeK: state.pyeState.activeK,
  stateK: state.pyeState.stateK,
  kopn: state.pyeState.kopn,
  pyeDrafts: state.pyeState.pyeDrafts,
  pyeSamples: state.pyeState.pyeSamples,
  PYE: state.pyeState.PYE,
  INIT: state.pyeState.INIT,
  users: state.userState.users,
  cols: state.userState.cols,
  feeds: state.pyeState.feeds,
});

export default connect(mapStateToProps, { getFeeds })(OraclePreview);
