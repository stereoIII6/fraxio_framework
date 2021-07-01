// React Dep Imports
import React, { Component } from "react";
import { Provider } from "react-redux";
import Web3 from "web3";
import store from "./store";

// CSS & Frontend Functions

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Input, InputGroup, Form } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Import Actions
import { getUsers } from "./action/userActions.js";

// Import Components
import Screen from "./Screen";
import Won from "./subs/Surveys/Won.js";
import TopMenu from "./subs/Navigation/TopMenu";

// Contract ABIs
import PriceConsumerV3 from "../abis/PriceConsumerV3.json";
import FujiConsumer from "../abis/FujiConsumer.json";
import OracleNFT from "../abis/OracleNFT.json";
import PYEBaker from "../abis/PYE.json";
import Factory from "../abis/Factory.json";
import Fractionizer from "../abis/Fractionizer.json";
import PriceFeed from "../abis/PriceFeed.json";

// SMART CONTRACTS TEST NET
const RinkPCAddress = "0xE9285b705B9A2cCD2ec91c8502D9B4c4518d8685";
const RinkPFAddress = "0xc8Ff1b455E16B8Fb58aB3EAB9a539a14605068B0";
const RinkPYEAddress = "0x99c6Cc73E23AFE69E3304A7715330047935776eB"; // UPDATED BUT KILL is Buggy
const RinkFRXAddress = "";
const RinkMLQAddress = "0xc28e24cddb16b729a25baa21e9d670033897ba1f";

const AVAXPCAddress = "0x0fc02Fd016c4EA6EDCA7b6a3f06B8819DaF0a5E8";
const AVAXPYEAddress = "0xA6345caA694846232AC9D257f1bDd3aA4D3c42e2";
const AVAXFRXAddress = "";

const POLYPCAddress = "0x7503508AC329901F9f99390BAc069BC78Df81A66";
const POLYPYEAddress = "0x1fcE45060e9476f470e81FB70a097de6dB28cbF3";
const POLYFRXAddress = "";

// SMART CONTRACTS MAIN NET
const xDaiPCAddress = "0x7503508AC329901F9f99390BAc069BC78Df81A66";
const xDaiPYEAddress = "0xA8A5F4AC446C2a348fC6e7850F6BC4FC0a651920";
const xDaiFRXAddress = "";

const fresh = "#9fe6c3";
const sky = "#aad9d8";
const purple = "#d1cfd5";
const grey = "#e2e3db";
const blue = "#7c9cb6";

class App extends Component {
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

  async loadBlockChainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    console.log("// AUTO init action", accounts[0]);

    //console.log(store);

    const network = await web3.eth.net.getNetworkType();
    const networkId = await web3.eth.net.getId();
    console.log("network", network, networkId);

    let minABI = [
      // balanceOf
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        type: "function",
      },
      // decimals
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        type: "function",
      },
    ];

    let contract = new web3.eth.Contract(minABI, RinkMLQAddress);
    async function getBalance() {
      const myBalance = await contract.methods.balanceOf(accounts[0]).call();
      console.log("Balancein", myBalance);
      store.dispatch(getUsers(accounts, network, myBalance));
      return myBalance;
    }

    const balance = getBalance();

    let Oracle;
    let PYEFreezer;
    let PYECreator;
    let FRX;
    let FRXionizer;
    let PriceFeeds;

    if (networkId === 4) {
      console.log(network);
      PriceFeeds = new web3.eth.Contract(PriceFeed.abi, RinkPFAddress);
      Oracle = new web3.eth.Contract(PriceConsumerV3.abi, RinkPCAddress);
      PYEFreezer = new web3.eth.Contract(OracleNFT.abi, RinkPYEAddress);
      PYECreator = new web3.eth.Contract(PYEBaker.abi, RinkPYEAddress);
      FRX = new web3.eth.Contract(Factory.abi, RinkFRXAddress);
      FRXionizer = new web3.eth.Contract(Fractionizer.abi, RinkFRXAddress);
    }
    if (networkId === 80001) {
      console.log(network);
      Oracle = new web3.eth.Contract(PriceConsumerV3.abi, POLYPCAddress);
      PYEFreezer = new web3.eth.Contract(OracleNFT.abi, POLYPYEAddress);
      FRXionizer = new web3.eth.Contract(PriceConsumerV3.abi, POLYFRXAddress);
    }
    if (networkId === 100) {
      console.log(network);
      Oracle = new web3.eth.Contract(PriceConsumerV3.abi, xDaiPCAddress);
      PYEFreezer = new web3.eth.Contract(OracleNFT.abi, xDaiPYEAddress);
      FRXionizer = new web3.eth.Contract(PriceConsumerV3.abi, xDaiFRXAddress);
    }

    if (networkId === 1) {
      console.log(network);
      Oracle = new web3.eth.Contract(FujiConsumer.abi, AVAXPCAddress);
      PYEFreezer = new web3.eth.Contract(OracleNFT.abi, AVAXPYEAddress);
      FRXionizer = new web3.eth.Contract(FujiConsumer.abi, AVAXFRXAddress);
    }

    console.log(web3.eth);

    if (networkId !== 1) {
      // const result1 = await Oracle.methods.getLatestPrices().call();
      // const result2 = await PriceFeeds.methods.daiFeed().call();
      // console.log(result1, result2, Date());
      // store.dispatch(getPriceFeeds(result));
    } else {
      /*
      const result = [];
      const ethCall = await Oracle.methods.requestpriceFeed("0x34195E3eD889BBe21a532A48Ec90A845f65b9dFA", "b5070ea61b2f4405a833c25ac5b4812e").send({ from: accounts[0] });
      result[0] = await Oracle.methods.priceFeed().call();
      const btcCall = await Oracle.methods.requestpriceFeed("0x34195E3eD889BBe21a532A48Ec90A845f65b9dFA", "9f571dd18edb4caa943a153d2608cae6").send({ from: accounts[0] });
      result[1] = await Oracle.methods.priceFeed().call();
      const linkCall = await Oracle.methods.requestpriceFeed("0x34195E3eD889BBe21a532A48Ec90A845f65b9dFA", "f09c5c8766c3445394d22fa16cdaaa8f").send({ from: accounts[0] });
      result[2] = await Oracle.methods.priceFeed().call();
      console.log(result, Date());
      let results = {
        0: (result[0] * 10 ** 6).toString(),
        1: (result[1] * 10 ** 6).toString(),
        2: (result[2] * 10 ** 6).toString()
      }
      console.log(results, Date());
      store.dispatch(getPriceFeeds(results));
      /* */
    }
  }
  componentDidMount() {
    // store.dispatch(getLayers());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App" style={{ background: grey, height: "100%" }}>
          <main>
            <div className="container py-4">
              <TopMenu />
              <div className="mb-4 p-5" id="blue">
                <Screen />
              </div>

              <footer className="pt-3 mt-4 text-muted border-top">
                <div className="row">
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                </div>
                &copy; Fractio 2021
              </footer>
            </div>
          </main>

          <div className="row"></div>
        </div>
      </Provider>
    );
  }
}
export default App;
