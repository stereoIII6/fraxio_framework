import React, { Component } from 'react';
import Web3 from "web3";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, InputGroup, Form } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Provider } from "react-redux";
import store from "./store";
import Screen from './Screen';
import MaskTwo from './subs/Editor/MaskTwo';
import MaskThree from './subs/Editor/MaskThree';
import TopMenu from './subs/Navigation/TopMenu';
import { getLayers, getPriceFeeds } from "./action/layerActions.js";
import './App.css';
import PriceConsumerV3 from '../abis/PriceConsumerV3.json';
import FujiConsumer from '../abis/FujiConsumer.json';
import OracleNFT from "../abis/OracleNFT.json";



// SMART CONTRACTS TEST NET
const RinkPCAddress = '0x8Ba6488144d2430EC82301A42B7Dcf073211aB8b';
const RinkPYEAddress = '0x99c6Cc73E23AFE69E3304A7715330047935776eB'; // UPDATED BUT KILL is Buggy
const RinkFRXAddress = '';

const AVAXPCAddress = '0x0fc02Fd016c4EA6EDCA7b6a3f06B8819DaF0a5E8';
const AVAXPYEAddress = '0xA6345caA694846232AC9D257f1bDd3aA4D3c42e2';
const AVAXFRXAddress = '';

const POLYPCAddress = '0x7503508AC329901F9f99390BAc069BC78Df81A66';
const POLYPYEAddress = '0x1fcE45060e9476f470e81FB70a097de6dB28cbF3';
const POLYFRXAddress = '';

// SMART CONTRACTS MAIN NET
const xDaiPCAddress = '0x7503508AC329901F9f99390BAc069BC78Df81A66';
const xDaiPYEAddress = '0xA8A5F4AC446C2a348fC6e7850F6BC4FC0a651920';
const xDaiFRXAddress = '';

const fresh = "#9fe6c3ff";
const sky =  "#aad9d8ff";
const purple = "#d1cfd5ff";
const grey ="#e2e3dbbf";
const blue = "#7c9cb6ff";

const IpfsHttpClient = require("ipfs-http-client");

const ipfs = IpfsHttpClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});
// const ipfs = IpfsHttpClient('localhost', '5001', { protocol: 'http' });
// console.log(ipfs);

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockChainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      console.log("ethereum", window.ethereum);
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      console.log("web3", window.web3);
    }
    else window.alert("Use a Metamask");
  }

  async loadBlockChainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const network = await web3.eth.net.getNetworkType();
    const networkId = await web3.eth.net.getId()
    console.log("network", network, networkId);
    let Oracle;
    let PYEFreezer;
    let FRXionizer;
    if (networkId === 4) {
      console.log(network);
      Oracle = new web3.eth.Contract(PriceConsumerV3.abi, RinkPCAddress);
      PYEFreezer = new web3.eth.Contract(OracleNFT.abi, RinkPYEAddress);
      FRXionizer = new web3.eth.Contract(PriceConsumerV3.abi, RinkFRXAddress);
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
      const result = await Oracle.methods.getLatestPrices().call();
      console.log(result, Date());
      store.dispatch(getPriceFeeds(result));
    }
    else {
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
    }



  }
  componentDidMount() {
    store.dispatch(getLayers());
  }

  state = {
    imageURL: null,
    buffer: null,
    check: "orange",
    urlList: []
  }

  captureFile = (e) => {
    e.preventDefault();
    // console.log("file captured");
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      // console.log("Buffer :", Buffer(reader.result));
      this.setState({ buffer: Buffer(reader.result) })
    }
  }

  submitFile = (e) => {
    e.preventDefault();
    // console.log("file submitted");
    // console.log(this.state.buffer);

    if (this.state.buffer) {
      ipfs.add(this.state.buffer).then((result, err) => {

        console.log('Ipfs Result', result);

        if (err) {
          // console.error(err);
          return
        }
        this.setState({ imageURL: result.path, check: "orange", urlList: [...this.state.urlList, result.path] })
        // console.log(this.state.imageURL);
      });

    }
  }

  copy = (e) => {
    e.preventDefault();
    console.log("copied");
    this.setState({ check: "mediumseagreen" })
  }

  fixLayer = (e) => {
    e.preventDefault();
    console.log("layercount ", this.state.layers.length);
    if (this.state.layers.length === 0) {
      console.log("empty");
      this.setState({
        layers: [
          {
            path: document.getElementById('path').value,
            key: this.state.layerCount,
            edit: null
          }
        ], layerCount: 1
      });
    }
    else {
      this.setState({
        layers: [
          ...this.state.layers, // SPREAD PREVIOUS LAYERS
          {
            path: document.getElementById('path').value,
            key: this.state.layerCount,
            edit: null
          }
        ], layerCount: this.state.layerCount + 1
      });
    }
    console.log(this.state.layerCount, this.state.layers)
  }
  animateLayer = (e) => {
    e.preventDefault();
  }
  setEdit = (e) => {
    e.preventDefault();
    console.log(this.state.layers[e.target.id]);
  }
  deleteLayer = (e) => {
    e.preventDefault();
    console.log(this.state.layers.length);
    if (this.state.layers.length === 1) {
      console.log("last one");
      this.setState({ layers: [], layerCount: 0 })
    }
    else {
      console.log("rearrange", e.target.id);
    }
  }

  render() {

    return (
      <Provider store={store}>
        <div className="App" style={{background:grey,height:"100%"}}>
          <main>
            <div className="container py-4">
             <TopMenu />
              <div className="mb-4 p-5" id="blue">

                <Screen />

              </div>
              

              <footer className="pt-3 mt-4 text-muted border-top">
                <div className="row">
                  <div className="col">
                   
                    </div><div className="col"></div><div className="col"></div>
                </div>
                &copy; Fractio 2021
            </footer>
            </div>
          </main>

          <div className="row">
            { /*
                <main role="main" className="col-lg-12 d-flex text-center">
                  <div className="col-4" >

                    <h4>MEDIA UPLOAD</h4>

                    <Form onSubmit={this.submitFile}>
                      <InputGroup>
                        <Input type="file" onChange={this.captureFile} style={{ float: "left", width: "80%" }} />
                        <Button color="light" type="submit" style={{ float: "right" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-up-fill" viewBox="0 0 16 16">
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707L6.354 9.854z" />
                          </svg>
                        </Button>
                      </InputGroup>
                    </Form>
                  </div>
                  {this.state.imageURL
                    ? <div className="col-4" >

                      <img src={`https://ipfs.io/ipfs/${this.state.imageURL}`} alt="upload" style={{ width: "220px" }} /> <br />
                      <div style={{ background: "#aa6633", borderRadius: "3px", marginTop: "2em", paddingLeft: "10px", color: "white" }}>
                        <a href={`https://ipfs.io/ipfs/${this.state.imageURL}`} style={{ color: "white", textDecoration: "none", fontSize: "0.5em", float: "left", margin: "1 0 0 1em" }}>{this.state.imageURL}</a> &nbsp; &nbsp;
                    <CopyToClipboard text={this.state.imageURL}>
                          <Button className="btn btn-sm" style={{ background: this.state.check, borderRadius: "3px", border: "0px", float: "right" }} onClick={this.copy}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                          </Button>
                        </CopyToClipboard></div>
                    </div>
                    : null}


                </main> */ }
          </div>



        </div>
      </Provider>
    );
  }
}
export default App;
