import { Button } from "reactstrap";
import React, { Component } from "react";
import PriceFeed from "./abis/PriceFeed.json";
import Web3 from "web3";
import NewLayer from "./NewLayer";
import { grabFeed, setFormat, discardToken } from "./action/userActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Display from "./Display";
import Format from "./Format";
import Layers from "./Layers";
const RinkPFAddress = "0x7CAc519Ab2245938DDd087eD29A16794CC090EaD";
class ArtBoard extends Component {
  static propTypes = {
    grabFeed: PropTypes.func,
    setFormat: PropTypes.func,
    discardToken: PropTypes.func,
    format: PropTypes.object,
    newImla: PropTypes.object,
  };
  state = {
    toggle: false,
    foggle: false,
    feed: [],
    overI: false,
    overE: false,
    overA: false,
    overF: false,
    discard: false,
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
  doToggleEx = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  doFoggle = (e) => {
    e.preventDefault();
    this.setState({ foggle: !this.state.foggle });
  };
  doFoggleInMod = (e) => {
    const newFormat = JSON.parse(e);
    console.log("ACT new Format // ", newFormat);
    this.props.setFormat(newFormat);
    this.setState({ foggle: !this.state.foggle });
  };
  goDiscard = (e) => {
    e.preventDefault();
    this.setState({ discard: true });
  };
  doDiscard = (e) => {
    e.preventDefault();
    this.setState({ discard: false });
    this.props.discardToken();
  };
  noDiscard = (e) => {
    e.preventDefault();
    this.setState({ discard: false });
  };

  doImport = (e) => {};
  doExport = (e) => {};
  importLabel = (e) => {
    this.setState({ overI: !this.state.overI });
  };
  exportLabel = (e) => {
    this.setState({ overE: !this.state.overE });
  };
  formatLabel = (e) => {
    this.setState({ overF: !this.state.overF });
  };
  layerLabel = (e) => {
    this.setState({ overL: !this.state.overL });
  };
  discardLabel = (e) => {
    this.setState({ overD: !this.state.overD });
  };
  render() {
    return (
      <div id="artBoard">
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "20%",
            width: "60%",
            textAlign: "center",
            background: "tomato",
            borderRadius: "9px",
            padding: "1em",
            display: !this.state.discard ? "none" : "block",
            zIndex: 1000,
            color: "white",
          }}
        >
          <h3>are you sure you want to discard the entire project?</h3>
          <Button
            onClick={this.noDiscard}
            style={{
              color: "tomato",
              background: "white",
              border: "1px solid tomato",
            }}
          >
            cancel
          </Button>
          <Button
            onClick={this.doDiscard}
            style={{
              color: "white",
              background: "tomato",
              border: "1px solid white",
              marginLeft: "2em",
            }}
          >
            discard
          </Button>
        </div>
        <Layers />
        <Display />

        <div
          style={{
            position: "absolute",
            top: "70px",
            right: "120px",
            background: "#3dc3c8",
            width: "200px",
            borderRadius: "9px",
            opacity: 0.6,
            textAlign: "center",
            fontSize: "0.6em",
            paddingBottom: "10px",
          }}
        >
          <div
            style={{
              display: this.state.overI ? "block" : "none",

              marginTop: "15px",
            }}
          >
            Import Draft or IML Asset.
          </div>
          <div
            style={{
              display: this.state.overE ? "block" : "none",

              marginTop: "15px",
            }}
          >
            Save Draft.
          </div>
          <div
            style={{
              display: this.state.overF ? "block" : "none",

              marginTop: "15px",
            }}
          >
            Choose Layer Format
          </div>
          <div
            style={{
              display: this.state.overL ? "block" : "none",

              marginTop: "15px",
            }}
          >
            Add a new Layer
          </div>
          <div
            style={{
              display: this.state.overD ? "block" : "none",

              marginTop: "15px",
            }}
          >
            Discard Project
          </div>
        </div>

        <div
          id="board"
          style={{
            display: this.props.newImla.activeL === null ? "block" : "none",
          }}
        >
          <Button
            id="discard"
            onClick={this.goDiscard}
            onMouseEnter={this.discardLabel}
            onMouseLeave={this.discardLabel}
          >
            x
          </Button>
          <Button
            id="mainBtns"
            onClick={this.doImport}
            onMouseEnter={this.importLabel}
            onMouseLeave={this.importLabel}
          >
            <img
              src="https://ipfs.io/ipfs/QmTomgdBxDMjhPasKW2jciS8EJUKN3KSyNsYrTeycf8ezM"
              alt=""
              style={{ width: "18px", height: "18px" }}
            />
          </Button>

          <Button
            id="mainBtns"
            onClick={this.doExport}
            onMouseEnter={this.exportLabel}
            onMouseLeave={this.exportLabel}
          >
            <img
              src="https://ipfs.io/ipfs/QmQqBSApVBZT86pzQbJGZsySspFiYK6rQCHNonWHwFLB6C"
              alt=""
              style={{ width: "18px", height: "18px" }}
            />
          </Button>

          <Button
            id="mainBtns"
            onClick={this.doFoggle}
            onMouseEnter={this.formatLabel}
            onMouseLeave={this.formatLabel}
          >
            <img
              src="https://ipfs.io/ipfs/QmYBFRKFYCXAryFi8NUBE7yeniWE3LNAJXFnxDRQiuU2j1"
              alt=""
              style={{ width: "18px", height: "18px" }}
            />
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
              style={{ width: "18px", height: "18px" }}
            />
          </Button>

          <div
            id="layerMod"
            style={{ display: this.state.toggle ? "block" : "none" }}
          >
            <div id="modBg">
              <h4>
                New Layer
                <Button id="close" onClick={this.doToggle}>
                  x
                </Button>
              </h4>

              <hr />
              <NewLayer doToggleEx={this.doToggleEx} />
            </div>
          </div>
          <div
            id="layerMod"
            style={{ display: this.state.foggle ? "block" : "none" }}
          >
            <div id="modBg">
              <h4>
                Choose a Format
                <Button id="close" onClick={this.doFoggle}>
                  x
                </Button>
              </h4>

              <hr />
              <Format
                doFoggleInMod={this.doFoggleInMod}
                format={this.props.format}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  format: state.userState.newImla.iData.format,
  newImla: state.userState.newImla,
});

export default connect(mapStateToProps, { grabFeed, setFormat, discardToken })(
  ArtBoard
);
