import React, { Component } from "react";
import Web3 from "web3";
import { Input } from "reactstrap";
import PriceFeed from "../../../abis/PriceFeed.json";
const RinkPFAddress = "0x7CAc519Ab2245938DDd087eD29A16794CC090EaD";

//store.dispatch(getPriceFeeds(result));

class PriceFeeder extends Component {
  state = {
    selectData: [],
  };
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockChainData();
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
    this.props.setOracle(e);
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
    console.log(this.props.oracle);
    PriceFeeds = new web3.eth.Contract(PriceFeed.abi, RinkPFAddress);
    if (this.props.oracle === "static") result = null;
    if (this.props.oracle === "crypto")
      result = await PriceFeeds.methods.cryptoFeeds().call();
    if (this.props.oracle === "currency")
      result = await PriceFeeds.methods.currencyFeeds().call();
    if (this.props.oracle === "commodity")
      result = await PriceFeeds.methods.commodFeeds().call();
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
        {this.props.oracle !== "static" ? (
          <Input type="select" onChange={this.setOracle}>
            <option key="null" value="default" var="null">
              ---
            </option>
            {this.state.selectData.map((data) => (
              <option
                key={label[labelNum]}
                value={[data, label[labelNum]]}
                var={label[labelNum]}
              >
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
