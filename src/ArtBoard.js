import { Button } from "reactstrap";
import React, { Component } from "react";
import PriceFeed from "./abis/PriceFeed.json";
import Web3 from "web3";
import NewLayer from "./NewLayer";
import { grabFeed } from "./action/userActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const RinkPFAddress = "0x7CAc519Ab2245938DDd087eD29A16794CC090EaD";
class ArtBoard extends Component {
  static propTypes = {
    grabFeed: PropTypes.func,
  };
  state = {
    toggle: false,
    feed: [],
    overI: false,
    overE: false,
    overA: false,
  };
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
  async loadBlockChainData() {
    const web3 = window.web3;
    let PriceFeeds;
    let result1;
    let result2;
    let result3;
    let namer1 = [];
    let namer2 = [];
    let namer3 = [];
    let feed = [];

    PriceFeeds = new web3.eth.Contract(PriceFeed.abi, RinkPFAddress);
    result1 = await PriceFeeds.methods.cryptoFeeds().call();
    console.log(result1);
    namer1 = ["bat", "bnb", "btc", "eth", "link", "rep", "snx", "zrx"];
    for (let i = 0; i < Object.keys(result1).length; i++) {
      feed[i] = { name: namer1[i], value: result1[i] / 10 ** 8 };
    }
    console.log(feed);
    let i = feed.length;
    result2 = await PriceFeeds.methods.currencyFeeds().call();
    namer2 = ["aud", "chf", "eur", "gbp", "jpy", "usdc", "dai"];
    for (let y = 0; y < Object.keys(result2).length; y++) {
      feed[y + i] = { name: namer2[y], value: result2[y] / 10 ** 8 };
    }
    console.log(feed);
    let y = feed.length;
    result3 = await PriceFeeds.methods.commodFeeds().call();
    namer3 = ["oil", "silver", "gold"];
    for (let z = 0; z < Object.keys(result3).length; z++) {
      feed[z + y] = { name: namer3[z], value: result3[z] / 10 ** 8 };
    }
    console.log(feed);
    this.setState({ feeds: feed });
    this.props.grabFeed(feed);
  }
  doToggle = (e) => {
    e.preventDefault();
    this.setState({ toggle: !this.state.toggle });
  };
  doImport = (e) => {};
  doExport = (e) => {};
  importLabel = (e) => {
    this.setState({ overI: !this.state.overI });
  };
  exportLabel = (e) => {
    this.setState({ overE: !this.state.overE });
  };
  layerLabel = (e) => {
    this.setState({ overL: !this.state.overL });
  };
  render() {
    return (
      <div id="artBoard">
        <div id="board">
          <Button
            id="mainBtns"
            onClick={this.doImport}
            onMouseEnter={this.importLabel}
            onMouseLeave={this.importLabel}
          >
            IMPORT
          </Button>

          <Button
            id="mainBtns"
            onClick={this.doExport}
            onMouseEnter={this.exportLabel}
            onMouseLeave={this.exportLabel}
          >
            EXPORT
          </Button>

          <Button
            id="newLayer"
            onClick={this.doToggle}
            onMouseEnter={this.layerLabel}
            onMouseLeave={this.layerLabel}
          >
            <img
              src="https://ipfs.io/ipfs/QmettwE4WigZAiEQ5EFNR9hJGiYohv5fhG5zGZVBDLvora"
              alt=""
            />
          </Button>
          <br />
          <br />
          <div
            style={{
              display: this.state.overI ? "block" : "none",
              float: "right",
              marginTop: "15px",
            }}
          >
            Import Draft or IML Asset.
          </div>
          <div
            style={{
              display: this.state.overE ? "block" : "none",
              float: "right",
              marginTop: "15px",
            }}
          >
            Save Draft.
          </div>
          <div
            style={{
              display: this.state.overL ? "block" : "none",
              float: "right",
              marginTop: "15px",
            }}
          >
            Add a new Layer
          </div>
          <div
            id="layerMod"
            style={{ display: this.state.toggle ? "block" : "none" }}
          >
            <div id="modBg">
              <h4>
                New Layer{" "}
                <Button id="close" onClick={this.doToggle}>
                  x
                </Button>
              </h4>

              <hr />
              <NewLayer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { grabFeed })(ArtBoard);
