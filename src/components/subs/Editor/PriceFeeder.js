import React, { Component } from "react";
import Web3 from "web3";
import { Input } from "reactstrap";
import PriceFeed from "../../../abis/PriceFeed.json";
const RinkPFAddress = "0x7CAc519Ab2245938DDd087eD29A16794CC090EaD";

//store.dispatch(getPriceFeeds(result));

class PriceFeeder extends Component {
  state = {
    selectData: [],
    value: "no",
  };
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockChainData();
    this.setState({
      value: this.props.starter,
    });
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
  setOracle = (e) => {
    console.log("PRICE FEEDER FEEDBACK //", e.target.value);

    const el = e.target.childNodes[e.target.selectedIndex];
    console.log("SELECT FEEDBACK // ", el.id);
    this.props.setOracle(e, el.id);
    this.setState({ value: e.target.value });
  };
  getFeed = () => {
    this.props.getFeed();
  };
  countProperties(obj) {
    var count = 0;

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) ++count;
    }

    return count;
  }
  async loadBlockChainData() {
    const web3 = window.web3;
    let PriceFeeds;
    let result;
    let namer = [];
    let feed = [];

    console.log(this.props.oracle);
    PriceFeeds = new web3.eth.Contract(PriceFeed.abi, RinkPFAddress);
    if (this.props.oracle === "no") result = null;
    if (this.props.oracle === "static") result = null;
    if (this.props.oracle === "crypto") {
      result = await PriceFeeds.methods.cryptoFeeds().call();
      namer = ["bat", "bnb", "btc", "eth", "link", "rep", "snx", "zrx"];
      for (let i = 0; i < this.countProperties(result); i++) {
        feed[i] = { name: namer[i], value: result[i] };
      }
      console.log(feed);
      this.getFeed(feed);
    }
    if (this.props.oracle === "currency") {
      result = await PriceFeeds.methods.currencyFeeds().call();
      namer = ["aud", "chf", "eur", "gbp", "jpy", "usdc", "dai"];
      for (let i = 0; i < this.countProperties(result); i++) {
        feed[i] = { name: namer[i], value: result[i] };
      }
      console.log(feed);
      this.props.getFeed(feed);
    }
    if (this.props.oracle === "commodity") {
      result = await PriceFeeds.methods.commodFeeds().call();
      namer = ["oil", "silver", "gold"];
      for (let i = 0; i < this.countProperties(result); i++) {
        feed[i] = { name: namer[i], value: result[i] };
      }
      console.log(feed);
      this.props.getFeed(feed);
    }

    console.log("FEED LOG // ", result, this.countProperties(result), Date());
    let x = 0;
    let hold = [];

    while (x < this.countProperties(result)) {
      hold[x] = result[x];
      x++;
    }
    console.log(hold);
    this.setState({ selectData: hold });
  }

  render() {
    const crypto = ["bat", "bnb", "btc", "eth", "link", "rep", "snx", "zrx"];
    const currency = ["aud", "chf", "eur", "gbp", "jpy", "usdc", "dai"];
    const commodity = ["oil", "silver", "gold"];
    let labelNum = 0;
    let label = [];
    if (this.props.oracle === "crypto") label = crypto;
    if (this.props.oracle === "currency") label = currency;
    if (this.props.oracle === "commodity") label = commodity;
    return (
      <div>
        {this.props.oracle !== "static" && this.props.oracle !== "no" ? (
          <Input
            type="select"
            onChange={this.setOracle}
            value={this.state.value}
            id={this.state.lNum}
          >
            <option key="no" value="no">
              Choose an Oracle
            </option>
            {this.state.selectData.map((data) => (
              <option key={labelNum} id={label[labelNum]} value={data}>
                {label[labelNum] + " " + data}
                {labelNum++}
              </option>
            ))}
          </Input>
        ) : null}
      </div>
    );
  }
}

export default PriceFeeder;
