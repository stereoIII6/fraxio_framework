import React, { Component } from "react";
import Draggable from "react-draggable";
import Moveable from "react-moveable";
import { Button, InputGroup, Input, Form, CustomInput } from "reactstrap";
import Web3 from "web3";
import PriceFeed from "../../../abis/PriceFeed.json";
import PYE from "../../../abis/PYE.json";
import MLQ from "../../../abis/MLQ.json";
const RinkMLQAddress = "0xa419c8F3CDF77FeD62e2D86644f0085764C1A857";
const RinkPYEAddrress = "0x0a1e83F9B9f692C786C7F43606330C3EFFdcfB2f";
const RinkPFAddress = "0x7CAc519Ab2245938DDd087eD29A16794CC090EaD";

const IpfsHttpClient = require("ipfs-http-client");
const ipfs = IpfsHttpClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});
class ArtPreset extends Component {
  state = {
    name: "",
    symbol: "",
    description: "",
    creator: null,
    format: "instagram",
    formatH: 0,
    chosenVal: 100,
    realVal: 100,
    simVal: 100,
    symX: 0,
    symY: 0,
    symH: 100,
    symW: 100,
    loVal: 80,
    hiVal: 120,
    fcts: true,
    bgs: false,
    fileBG1: null,
    fxBG1: "static",
    mBG1: false,
    xBG1: 0,
    yBG1: 0,
    wBG1: 100,
    hBG1: 100,
    oBG1: 100,
    rBG1: 0,
    fileBG2: null,
    fxBG2: null,
    mBG2: false,
    xBG2: 0,
    txBG2: 0,
    yBG2: 0,
    tyBG2: 0,
    wBG2: 100,
    hBG2: 100,
    oBG2: 100,
    rBG2: 0,
    ols: false,
    fileOL: null,
    fxOL: null,
    mOL1: false,
    xOL1: 0,
    txOL1: 0,
    yOL1: 0,
    tyOL1: 0,
    wOL1: 100,
    hOL1: 100,
    oOL1: 100,
    rOL1: 0,
    mOL2: false,
    xOL2: 0,
    txOL2: 0,
    yOL2: 0,
    tyOL2: 0,
    wOL2: 100,
    hOL2: 100,
    oOL2: 100,
    rOL2: 0,
    mOLN: false,
    xOLN: 0,
    txOLN: 0,
    yOLN: 0,
    tyOLN: 0,
    wOLN: 100,
    hOLN: 100,
    oOLN: 100,
    rOLN: 0,
    fgs: false,
    fileFG1: null,
    fxFG1: "static",
    mFG1: false,
    xFG1: 0,
    txFG1: 0,
    yFG1: 0,
    tyFG: 0,
    wFG1: 100,
    hFG1: 100,
    oFG1: 100,
    rFG1: 0,
    fileFG2: null,
    fxFG2: "static",
    mFG2: false,
    xFG2: 0,
    txFG2: 0,
    yFG2: 0,
    tyFG2: 0,
    wFG2: 100,
    hFG2: 100,
    oFG2: 100,
    rFG2: 0,
    fileURLBG1: null,
    fileURLBG1: null,
    fileURLOL: null,
    fileURLFG1: null,
    fileURLFG2: null,
    buffer: null,
    check: "orange",
    urlList: [],
    feeds: [],
    fnls: false,
    mint: false,
  };
  // WEB 3 Functions
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
  }
  // Input Functions
  onRangeHi = (e) => {
    console.log("INPUT hi // ", e);
    this.setState({ hiVal: e.target.value });
  };
  onRangeLo = (e) => {
    console.log("INPUT lo // ", e);
    this.setState({ loVal: e.target.value });
  };
  onRangeSym = (e) => {
    console.log("INPUT // ", e);
    console.log(
      "SELECT OL // ",
      e.target.value,
      this.state.txOL2,
      this.state.txOL1
    );
    const val = Number(e.target.value);
    const dX = this.state.txOL2 - this.state.txOL1;
    const dY = this.state.tyOL2 - this.state.tyOL1;
    const dM = this.state.hiVal - this.state.loVal;
    const rM = val - this.state.loVal;
    // console.log("range OL // ", dX, dY, dM, rM);
    const nX = (dX / dM) * rM;
    const nY = (dY / dM) * rM;
    console.log("range OL // ", nX, nY);
    const sX = nX;
    const sY = nY;
    const sH = 100;
    const sW = 100;
    const sR = 0;
    const sO = 100;
    this.setState({ simVal: val, symX: sX, symY: sY });
  };
  onChangeName = (e) => {
    console.log("INPUT name // ", e.target.id);
    this.setState({ name: e.target.value });
  };
  onChangeSymbol = (e) => {
    console.log("INPUT symbol // ", e.target.id);
    this.setState({ symbol: e.target.value });
  };
  onChangeDesc = (e) => {
    console.log("INPUT desc // ", e.target.id);
    this.setState({ description: e.target.value });
  };
  onFormat = (e) => {
    e.preventDefault();
    console.log("INPUT format // ", e.target.name);
    if (e.target.name === "a4l" || e.target.name === "pinterest")
      this.setState({ format: e.target.name, formatH: true });
    else this.setState({ format: e.target.name, formatH: false });
  };
  onFXBG1 = (e) => {
    e.preventDefault();
    console.log("SELECT BG1 // ", e.target.value);
    this.setState({ fxBG1: e.target.value });
  };
  onFXBG2 = (e) => {
    e.preventDefault();
    console.log("SELECT BG2 // ", e.target.value);
    this.setState({ fxBG2: e.target.value });
  };
  onFXOL = (e) => {
    e.preventDefault();
    console.log("SELECT OL // ", e.target.value);
    const val = JSON.parse(e.target.value);
    const dX = this.state.txOL2 - this.state.txOL1;
    const dY = this.state.tyOL2 - this.state.tyOL1;
    const dM = this.state.hival - this.state.loVal;
    const rM = this.state.simVal - this.state.OL1;
    const nX = (dX / dM) * rM;
    const nY = (dY / dM) * rM;
    console.log("range OL // ", nX, nY);
    const sX = nX;
    const sY = nY;
    const sH = 100;
    const sW = 100;
    const sR = 0;
    const sO = 100;

    console.log(val);
    this.setState({
      fxOL: val.name,
      chosenVal: val.value,
      simVal: val.value,
      symX: sX,
      symY: sY,

      realVal: val.value,
      hiVal: (val.value / 100) * 120,
      loVal: (val.value / 100) * 80,
    }); /** */
  };
  onFXFG1 = (e) => {
    e.preventDefault();
    console.log("SELECT FG1 // ", e.target.value);
    this.setState({ fxFG1: e.target.value });
  };
  onFXFG2 = (e) => {
    e.preventDefault();
    console.log("SELECT FG2 // ", e.target.value);
    this.setState({ fxFG2: e.target.value });
  };
  captureBG1 = (e) => {
    e.preventDefault();
    // console.log("file captured");
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      console.log("Buffer :", Buffer(reader.result));
      this.setState({ buffer: Buffer(reader.result) });
    };
  };
  captureBG2 = (e) => {
    e.preventDefault();
    // console.log("file captured");
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      console.log("Buffer :", Buffer(reader.result));
      this.setState({ buffer: Buffer(reader.result) });
    };
  };
  captureOL = (e) => {
    e.preventDefault();
    // console.log("file captured");
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      console.log("Buffer :", Buffer(reader.result));
      this.setState({ buffer: Buffer(reader.result) });
    };
  };
  captureFG1 = (e) => {
    e.preventDefault();
    // console.log("file captured");
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      console.log("Buffer :", Buffer(reader.result));
      this.setState({ buffer: Buffer(reader.result) });
    };
  };
  captureFG2 = (e) => {
    e.preventDefault();
    // console.log("file captured");
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      console.log("Buffer :", Buffer(reader.result));
      this.setState({ buffer: Buffer(reader.result) });
    };
  };
  submitBG1 = (e) => {
    e.preventDefault();
    console.log("file submitted");
    console.log(this.state.buffer);
    ipfs.add(this.state.buffer).then((result, err) => {
      console.log("Ipfs Result", result);
      if (err) {
        // console.error(err);
        return;
      }
      console.log(result.path);
      this.setState({
        fileURLBG1: `https://ipfs.io/ipfs/${result.path}`,
        fileBG1: result.path,
        check: "orange",
        urlList: [...this.state.urlList, result.path],
      });
    });
  };
  submitBG2 = (e) => {
    e.preventDefault();
    console.log("file submitted");
    console.log(this.state.buffer);
    ipfs.add(this.state.buffer).then((result, err) => {
      console.log("Ipfs Result", result);
      if (err) {
        // console.error(err);
        return;
      }
      this.setState({
        fileURLBG2: `https://ipfs.io/ipfs/${result.path}`,
        fileBG2: result.path,
        check: "orange",
        urlList: [...this.state.urlList, result.path],
      });
    });
  };
  submitOL = (e) => {
    e.preventDefault();
    console.log("file submitted");
    console.log(this.state.buffer);
    ipfs.add(this.state.buffer).then((result, err) => {
      console.log("Ipfs Result OL", result.path);
      if (err) {
        // console.error(err);
        return;
      }

      this.setState({
        fileURLOL: `https://ipfs.io/ipfs/${result.path}`,
        fileOL: result.path,
        check: "orange",
        urlList: [...this.state.urlList, result.path],
      });
    });
  };
  submitFG1 = (e) => {
    e.preventDefault();
    console.log("file submitted");
    console.log(this.state.buffer);
    ipfs.add(this.state.buffer).then((result, err) => {
      console.log("Ipfs Result FG1", result);
      if (err) {
        // console.error(err);
        return;
      }
      this.setState({
        fileURLFG1: `https://ipfs.io/ipfs/${result.path}`,
        fileFG1: result.path,
        check: "orange",
        urlList: [...this.state.urlList, result.path],
      });
    });
  };
  submitFG2 = (e) => {
    e.preventDefault();
    console.log("file submitted");
    console.log(this.state.buffer);
    ipfs.add(this.state.buffer).then((result, err) => {
      console.log("Ipfs Result", result);
      if (err) {
        // console.error(err);
        return;
      }

      this.setState({
        fileURLFG2: `https://ipfs.io/ipfs/${result.path}`,
        fileFG2: result.path,
        check: "orange",
        urlList: [...this.state.urlList, result.path],
      });
    });
  };
  handleClickBG1 = (e) => {
    document.getElementById("uploadBG1").click();
    document.getElementById("uploadBG1").onchange = () => {
      this.setState({
        fileBG1: document.getElementById("uploadBG1").value,
      });
      console.log(this.state.fileBG1);
    };
  };
  handleClickBG2 = (e) => {
    document.getElementById("uploadBG2").click();
    document.getElementById("uploadBG2").onchange = () => {
      this.setState({
        fileBG2: document.getElementById("uploadBG2").value,
      });
      console.log(this.state.fileBG2);
    };
  };
  handleClickOL = (e) => {
    document.getElementById("uploadOL").click();
    document.getElementById("uploadOL").onchange = () => {
      this.setState({
        fileOL: document.getElementById("uploadOL").value,
      });
      console.log(this.state.fileOL);
    };
  };
  handleClickFG1 = (e) => {
    document.getElementById("uploadFG1").click();
    document.getElementById("uploadFG1").onchange = () => {
      this.setState({
        fileFG1: document.getElementById("uploadFG1").value,
      });
      console.log(this.state.fileFG1);
    };
  };
  handleClickFG2 = (e) => {
    document.getElementById("uploadFG2").click();
    document.getElementById("uploadFG2").onchange = () => {
      this.setState({
        fileFG2: document.getElementById("uploadFG2").value,
      });
      console.log(this.state.fileFG2);
    };
  };
  // Editing Functions
  onBG1 = (e) => {
    let moux = (e.pageX - (window.innerWidth - 490) / 2 - 245) / 100;
    moux *= -1;
    moux -= 2.6;
    let fH =
      this.state.format === "instagram"
        ? 490 / 100
        : this.state.format === "pinterest"
        ? 490
        : this.state.format === "facebook"
        ? 490
        : this.state.format === "twitter"
        ? 490
        : this.state.format === "a4p"
        ? 490
        : this.state.format === "a4l"
        ? 490
        : this.state.format === "hd"
        ? 490
        : this.state.format === "ws"
        ? 490
        : null;

    let mouy = ((e.pageY - 639) / fH - 50) / -20;
    console.log(this.state.fxBG1, " aa , nn // ", moux, mouy);
    if (this.state.fxBG1 === "static") {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ xBG1: 0, yBG1: 0, wBG1: 100, hBG1: 100 });
    } else if (this.state.fxBG1 === "mm1" && this.state.mBG1) {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ xBG1: moux - 5, yBG1: mouy - 5, wBG1: 110, hBG1: 110 });
    } else if (this.state.fxBG1 === "mm2") {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({
        xBG1: moux * 2 - 25,
        yBG1: mouy * 2 - 25,
        wBG1: 150,
        hBG1: 150,
      });
    } else if (this.state.fxBG1 === "mx1" && this.state.mBG1) {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ xBG1: moux - 5, wBG1: 110, hBG1: 110 });
    } else if (this.state.fxBG1 === "mx2") {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ xBG1: moux * 2 - 25, wBG1: 150, hBG1: 150 });
    } else if (this.state.fxBG1 === "my1" && this.state.mBG1) {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ yBG1: mouy - 5, wBG1: 110, hBG1: 110 });
    } else if (this.state.fxBG1 === "my2") {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ yBG1: mouy * 2 - 25, wBG1: 150, hBG1: 150 });
    }
  };
  mBG1tgglOn = (e) => {
    this.setState({ mBG1: true });
  };
  mBG1tgglOff = (e) => {
    this.setState({ mBG1: false });
  };
  onBG2 = (e) => {
    let moux = (e.pageX - (window.innerWidth - 50) / 2 - 285) / 100;
    moux *= -1;
    let fH =
      this.state.format === "instagram"
        ? 490 / 100
        : this.state.format === "pinterest"
        ? 490
        : this.state.format === "facebook"
        ? 490
        : this.state.format === "twitter"
        ? 490
        : this.state.format === "a4p"
        ? 490
        : this.state.format === "a4l"
        ? 490
        : this.state.format === "hd"
        ? 490
        : this.state.format === "ws"
        ? 490
        : null;

    let mouy = ((e.pageY - 639) / fH - 50) / -20;

    console.log("mouY // ", mouy);
    if (this.state.fxBG1 === "static") {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ xBG1: 0, yBG1: 0, wBG1: 100, hBG1: 100 });
    } else if (this.state.fxBG1 === "mm1" && this.state.mBG1) {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ xBG1: moux - 5, yBG1: mouy - 5, wBG1: 110, hBG1: 110 });
    } else if (this.state.fxBG1 === "mm2" && this.state.mBG1) {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({
        xBG1: moux * 2 - 25,
        yBG1: mouy * 2 - 25,
        wBG1: 150,
        hBG1: 150,
      });
    } else if (this.state.fxBG1 === "mx1" && this.state.mBG1) {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ xBG1: moux - 5, wBG1: 110, hBG1: 110 });
    } else if (this.state.fxBG1 === "mx2") {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ xBG1: moux * 2 - 25, wBG1: 150, hBG1: 150 });
    } else if (this.state.fxBG1 === "my1" && this.state.mBG1) {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ yBG1: mouy - 5, wBG1: 110, hBG1: 110 });
    } else if (this.state.fxBG1 === "my2") {
      console.log(moux, mouy, this.state.fxBG1);
      this.setState({ yBG1: mouy * 2 - 10, wBG1: 150, hBG1: 150 });
    }

    if (this.state.fxBG2 === "static") {
      console.log(moux, mouy, this.state.fxBG2);
      this.setState({ xBG2: 0, yBG2: 0, wBG2: 100, hBG2: 100 });
    } else if (this.state.fxBG2 === "mm1" && this.state.mBG2) {
      console.log(moux, mouy, this.state.fxBG2);
      this.setState({ xBG2: moux - 5, yBG2: mouy - 5, wBG2: 110, hBG2: 110 });
    } else if (this.state.fxBG2 === "mm2" && this.state.mBG2) {
      console.log(moux, mouy, this.state.fxBG2);
      this.setState({
        xBG2: moux * 2 - 10,
        yBG2: mouy * 2 - 10,
        wBG2: 150,
        hBG2: 150,
      });
    } else if (this.state.fxBG2 === "mx1" && this.state.mBG2) {
      console.log(moux, mouy, this.state.fxBG2);
      this.setState({ xBG2: moux - 5, wBG1: 110, hBG1: 110 });
    } else if (this.state.fxBG2 === "mx2") {
      console.log(moux, mouy, this.state.fxBG2);
      this.setState({ xBG2: moux * 2 - 10, wBG2: 150, hBG2: 150 });
    } else if (this.state.fxBG2 === "my1" && this.state.mBG2) {
      console.log(moux, mouy, this.state.fxBG2);
      this.setState({ yBG2: mouy - 5, wBG2: 110, hBG2: 110 });
    } else if (this.state.fxBG2 === "my2") {
      console.log(moux, mouy, this.state.fxBG2);
      this.setState({ yBG2: mouy * 2 - 10, wBG2: 150, hBG2: 150 });
    }
    console.log(this.state);
  };
  mBG2tgglOn = (e) => {
    this.setState({ mBG2: true, mBG1: true });
  };
  mBG2tgglOff = (e) => {
    this.setState({ mBG2: false, mBG1: false });
  };
  setBG2pos = (e) => {
    const heighty =
      this.state.format === "instagram" // 1080 x 1080px
        ? 490
        : this.state.format === "pinterest"
        ? 735
        : this.state.format === "facebook" // 640 x 511px
        ? 391
        : this.state.format === "twitter" // 1125 x 632 px
        ? 275
        : this.state.format === "a4l" // 2480 x 3508px
        ? 693
        : this.state.format === "a4p" // 7.159
        ? 346
        : this.state.format === "hd"
        ? 276
        : this.state.format === "ws"
        ? 275
        : 490;
    let grab = e.target.style.transform.toString();
    document.getElementById("BG2").style.transform = "translate(0px,0px)";
    console.log("grabcheck //", grab);
    if (grab !== "") {
      const front = grab.split("(");
      const fronty = front[1];
      const back = fronty.split("px)");
      const backy = back[0];
      const vals = backy.split("px,");
      const valX = Number(vals[0]);
      const valY = Number(vals[1]);
      const X = 100 / (490 / valX);
      const Y = 100 / (heighty / valY);
      console.log("check position // ", valX, valY);

      this.setState({ txBG2: X, tyBG2: Y });
    }
  };
  setOL1pos = (e) => {
    const heighty =
      this.state.format === "instagram" // 1080 x 1080px
        ? 490
        : this.state.format === "pinterest"
        ? 735
        : this.state.format === "facebook" // 640 x 511px
        ? 391
        : this.state.format === "twitter" // 1125 x 632 px
        ? 275
        : this.state.format === "a4l" // 2480 x 3508px
        ? 693
        : this.state.format === "a4p" // 7.159
        ? 346
        : this.state.format === "hd"
        ? 276
        : this.state.format === "ws"
        ? 275
        : 490;
    let grab = e.target.style.transform.toString();
    console.log("grabcheck //", grab);
    document.getElementById("OL1").style.transform = "translate(0px,0px)";
    if (grab !== "") {
      const front = grab.split("(");
      const fronty = front[1];
      const back = fronty.split("px)");
      const backy = back[0];
      const vals = backy.split("px,");
      const valX = Number(vals[0]);
      const valY = Number(vals[1]);
      const X = 100 / (490 / valX);
      const Y = 100 / (heighty / valY);
      console.log("check position // ", valX, valY);

      this.setState({ txOL1: X, tyOL1: Y });
    }
  };
  setOL2pos = (e) => {
    const heighty =
      this.state.format === "instagram" // 1080 x 1080px
        ? 490
        : this.state.format === "pinterest"
        ? 735
        : this.state.format === "facebook" // 640 x 511px
        ? 391
        : this.state.format === "twitter" // 1125 x 632 px
        ? 275
        : this.state.format === "a4l" // 2480 x 3508px
        ? 693
        : this.state.format === "a4p" // 7.159
        ? 346
        : this.state.format === "hd"
        ? 276
        : this.state.format === "ws"
        ? 275
        : 490;
    let grab = e.target.style.transform.toString();
    console.log("grabcheck //", grab);
    document.getElementById("OL2").style.transform = "translate(0px,0px)";
    if (grab !== "") {
      const front = grab.split("(");
      const fronty = front[1];
      const back = fronty.split("px)");
      const backy = back[0];
      const vals = backy.split("px,");
      const valX = Number(vals[0]);
      const valY = Number(vals[1]);
      const X = 100 / (490 / valX);
      const Y = 100 / (heighty / valY);
      console.log("check position // ", valX, valY);

      this.setState({ txOL2: X, tyOL2: Y });
    }
  };
  setFG1pos = (e) => {
    const heighty =
      this.state.format === "instagram" // 1080 x 1080px
        ? 490
        : this.state.format === "pinterest"
        ? 735
        : this.state.format === "facebook" // 640 x 511px
        ? 391
        : this.state.format === "twitter" // 1125 x 632 px
        ? 275
        : this.state.format === "a4l" // 2480 x 3508px
        ? 693
        : this.state.format === "a4p" // 7.159
        ? 346
        : this.state.format === "hd"
        ? 276
        : this.state.format === "ws"
        ? 275
        : 490;
    let grab = e.target.style.transform.toString();
    console.log("grabcheck //", grab);
    document.getElementById("FG1").style.transform = "translate(0px,0px)";
    if (grab !== "") {
      const front = grab.split("(");
      const fronty = front[1];
      const back = fronty.split("px)");
      const backy = back[0];
      const vals = backy.split("px,");
      const valX = Number(vals[0]);
      const valY = Number(vals[1]);
      const X = 100 / (490 / valX);
      const Y = 100 / (heighty / valY);
      console.log("check position // ", valX, valY);

      this.setState({ txFG1: X, tyFG1: Y });
    }
  };
  setFG2pos = (e) => {
    const heighty =
      this.state.format === "instagram" // 1080 x 1080px
        ? 490
        : this.state.format === "pinterest"
        ? 735
        : this.state.format === "facebook" // 640 x 511px
        ? 391
        : this.state.format === "twitter" // 1125 x 632 px
        ? 275
        : this.state.format === "a4l" // 2480 x 3508px
        ? 693
        : this.state.format === "a4p" // 7.159
        ? 346
        : this.state.format === "hd"
        ? 276
        : this.state.format === "ws"
        ? 275
        : 490;
    let grab = e.target.style.transform.toString();
    console.log("grabcheck //", grab);
    document.getElementById("FG2").style.transform = "translate(0px,0px)";
    if (grab !== "") {
      const front = grab.split("(");
      const fronty = front[1];
      const back = fronty.split("px)");
      const backy = back[0];
      const vals = backy.split("px,");
      const valX = Number(vals[0]);
      const valY = Number(vals[1]);
      const X = 100 / (490 / valX);
      const Y = 100 / (heighty / valY);
      console.log("check position // ", valX, valY);

      this.setState({ txFG2: X, tyFG2: Y });
    }
  };
  next = (e) => {
    e.preventDefault();
    if (this.state.fcts === true) this.setState({ fcts: false, bgs: true });
    if (this.state.bgs === true) this.setState({ bgs: false, ols: true });
    if (this.state.ols === true) this.setState({ ols: false, fgs: true });
    if (this.state.fgs === true) this.setState({ fgs: false, fnls: true });
    if (this.state.fnls === true) this.setState({ fnls: false, mint: true });
  };
  back = (e) => {
    e.preventDefault();

    if (this.state.bgs === true) this.setState({ bgs: false, fcts: true });
    if (this.state.ols === true) this.setState({ ols: false, bgs: true });
    if (this.state.fgs === true) this.setState({ fgs: false, ols: true });
    if (this.state.fnls === true) this.setState({ fnls: false, fgs: true });
  };

  render() {
    return (
      <div>
        <Form>
          <h2>Oracle Layer Editor</h2>
          {this.state.fcts === true ? (
            <>
              <InputGroup className="alert">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  placeholder="Token Name"
                  onChange={this.onChangeName}
                />
                <Input
                  type="text"
                  name="symbol"
                  id="symbol"
                  value={this.state.symbol}
                  placeholder="Token Symbol"
                  onChange={this.onChangeSymbol}
                />
              </InputGroup>
              <InputGroup className="alert">
                <Input
                  type="textfield"
                  name="description"
                  id="description"
                  value={this.state.description}
                  placeholder="Description"
                  onChange={this.onChangeDesc}
                />
              </InputGroup>
              <InputGroup className="alert">
                <Button
                  name="insta"
                  id={{ w: "1080", h: "1080" }}
                  className="col"
                  onClick={this.onFormat}
                  style={{
                    opacity: this.state.format === "instagram" ? 1 : 0.77,
                    background:
                      this.state.format === "instagram" ? "white" : "none",
                    border: "0px ",
                  }}
                >
                  <img
                    src="./instagram.png"
                    alt=""
                    style={{ width: "90px" }}
                    name="instagram"
                    id={{ w: "1080", h: "1080" }}
                  />
                </Button>
                <Button
                  name="pinterest"
                  id="pinterest"
                  className="col"
                  onClick={this.onFormat}
                  style={{
                    opacity: this.state.format === "pinterest" ? 1 : 0.77,
                    background:
                      this.state.format === "pinterest" ? "white" : "none",
                    border: "0px ",
                  }}
                >
                  <img
                    src="./pinterest.png"
                    alt=""
                    style={{ width: "90px" }}
                    name="pinterest"
                    id="pinterest"
                  />
                </Button>
                <Button
                  name="facebook"
                  id="facebook"
                  className="col"
                  onClick={this.onFormat}
                  style={{
                    opacity: this.state.format === "facebook" ? 1 : 0.77,
                    background:
                      this.state.format === "facebook" ? "white" : "none",
                    border: "0px ",
                  }}
                >
                  <img
                    src="./facebook.png"
                    alt=""
                    style={{ width: "90px" }}
                    name="facebook"
                    id="facebook"
                  />
                </Button>
                <Button
                  name="twitter"
                  id="twitter"
                  className="col"
                  onClick={this.onFormat}
                  style={{
                    opacity: this.state.format === "twitter" ? 1 : 0.77,
                    background:
                      this.state.format === "twitter" ? "white" : "none",
                    border: "0px ",
                  }}
                >
                  <img
                    src="./twitter.png"
                    alt=""
                    style={{ width: "90px" }}
                    name="twitter"
                    id="twitter"
                  />
                </Button>

                <Button
                  name="a4l"
                  id="a4l"
                  className="col"
                  onClick={this.onFormat}
                  style={{
                    opacity: this.state.format === "a4l" ? 1 : 0.77,
                    background: this.state.format === "a4l" ? "white" : "none",
                    border: "0px ",
                  }}
                >
                  <img
                    src="./a4l.png"
                    alt=""
                    style={{ width: "90px" }}
                    name="a4l"
                    id="a4l"
                  />
                </Button>
                <Button
                  name="a4p"
                  id="a4p"
                  className="col"
                  onClick={this.onFormat}
                  style={{
                    opacity: this.state.format === "a4p" ? 1 : 0.77,
                    background: this.state.format === "a4p" ? "white" : "none",
                    border: "0px ",
                  }}
                >
                  <img
                    src="./a4p.png"
                    alt=""
                    style={{ width: "90px" }}
                    name="a4p"
                    id="a4p"
                  />
                </Button>
                <Button
                  name="hd"
                  id="hd"
                  className="col"
                  onClick={this.onFormat}
                  style={{
                    opacity: this.state.format === "hd" ? 1 : 0.77,
                    background: this.state.format === "hd" ? "white" : "none",
                    border: "0px ",
                  }}
                >
                  <img
                    src="./hd.png"
                    alt=""
                    style={{ width: "90px" }}
                    name="hd"
                    id="hd"
                  />
                </Button>
                <Button
                  name="ws"
                  id="ws"
                  className="col"
                  onClick={this.onFormat}
                  style={{
                    opacity: this.state.format === "ws" ? 1 : 0.77,
                    background: this.state.format === "ws" ? "white" : "none",
                    border: "0px ",
                  }}
                >
                  <img
                    src="./ws.png"
                    alt=""
                    style={{ width: "90px" }}
                    name="ws"
                    id="ws"
                  />
                </Button>
              </InputGroup>
              <Button onClick={this.back}>BACK</Button>
              <Button onClick={this.next}>NEXT</Button>
            </>
          ) : null}
          {this.state.bgs === true ? (
            <>
              <div className="row">
                <div className="col-6" style={{ textAlign: "center" }}>
                  {console.log(this.state.formatH)}
                  <h3>Background Layer</h3>
                  <div
                    id="SCRN"
                    key="BG1-FRAME"
                    style={{
                      position: "relative",
                      width: "490px",
                      height:
                        this.state.format === "instagram" // 1080 x 1080px
                          ? "490px"
                          : this.state.format === "pinterest"
                          ? "735px"
                          : this.state.format === "facebook" // 640 x 511px
                          ? "391px"
                          : this.state.format === "twitter" // 1125 x 632 px
                          ? "275px"
                          : this.state.format === "a4l" // 2480 x 3508px
                          ? "693px"
                          : this.state.format === "a4p" // 7.159
                          ? "346px"
                          : this.state.format === "hd"
                          ? "276px"
                          : this.state.format === "ws"
                          ? "275px"
                          : "100px",
                      background: "ivory",
                      backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
                      overflow: "hidden",
                    }}
                  >
                    {this.state.fileURLBG1 !== null ? (
                      <img
                        src={this.state.fileURLBG1}
                        alt=""
                        id="BG1"
                        key="0"
                        style={{
                          position: "absolute",
                          top: `${this.state.yBG1}%`,
                          left: `${this.state.xBG1}%`,
                          width: this.state.formatH
                            ? "auto"
                            : `${this.state.wBG1}%`,
                          height: this.state.formatH
                            ? `${this.state.hBG1}%`
                            : "auto",
                          transform: `rotate(${this.state.rBG1}deg)`,
                          opacity: this.state.oBG1 / 100,
                        }}
                        onMouseMove={this.onBG1}
                        onMouseEnter={this.mBG1tgglOn}
                        onMouseLeave={this.mBG1tgglOff}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="col-6" style={{ textAlign: "center" }}>
                  <h3>Background &amp; Depth Layer</h3>
                  <div
                    id="SCRN"
                    key="BG2-FRAME"
                    style={{
                      position: "relative",
                      width: "490px",
                      height:
                        this.state.format === "instagram" // 1080 x 1080px
                          ? "490px"
                          : this.state.format === "pinterest"
                          ? "735px"
                          : this.state.format === "facebook" // 640 x 511px
                          ? "391px"
                          : this.state.format === "twitter" // 1125 x 632 px
                          ? "275px"
                          : this.state.format === "a4l" // 2480 x 3508px
                          ? "693px"
                          : this.state.format === "a4p" // 7.159
                          ? "346px"
                          : this.state.format === "hd"
                          ? "276px"
                          : this.state.format === "ws"
                          ? "275px"
                          : "100px",
                      background: "ivory",
                      backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
                      overflow: "hidden",
                    }}
                  >
                    {this.state.fileURLBG1 !== null ? (
                      <img
                        src={this.state.fileURLBG1}
                        alt=""
                        id="BG1"
                        key="0"
                        style={{
                          position: "absolute",
                          top: `${this.state.yBG1}%`,
                          left: `${this.state.xBG1}%`,
                          width: this.state.formatH
                            ? "auto"
                            : `${this.state.wBG1}%`,
                          height: this.state.formatH
                            ? `${this.state.hBG1}%`
                            : "auto",
                        }}
                      />
                    ) : null}
                    {this.state.fileURLBG2 !== null ? (
                      <Draggable onStop={this.setBG2pos}>
                        <img
                          src={this.state.fileURLBG2}
                          alt=""
                          id="BG2"
                          key="1"
                          style={{
                            position: "absolute",
                            top: `${this.state.yBG2 + this.state.tyBG2}%`,
                            left: `${this.state.xBG2 + this.state.txBG2}%`,
                            width: this.state.formatH
                              ? "auto"
                              : `${this.state.wBG2}%`,
                            height: this.state.formatH
                              ? `${this.state.hBG2}%`
                              : "auto",
                          }}
                          onMouseMove={this.onBG2}
                          onMouseEnter={this.mBG2tgglOn}
                          onMouseLeave={this.mBG2tgglOff}
                        />
                      </Draggable>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <InputGroup className="alert" className="col-6">
                  <Input
                    type="select"
                    name="fxBG1"
                    id="fxBG1"
                    onChange={this.onFXBG1}
                  >
                    <option name="static" value="static">
                      I want a static background
                    </option>
                    <option name="mm1" value="mm1">
                      Mouse Pan Smooth
                    </option>
                    <option name="mm2" value="mm2">
                      Mouse Pan Strong
                    </option>
                    <option name="mx1" value="mx1">
                      MouseX Pan Smooth
                    </option>
                    <option name="mx2" value="mx2">
                      MouseX Pan Strong
                    </option>
                    <option name="my1" value="my1">
                      MouseX Pan Smooth
                    </option>
                    <option name="my2" value="my2">
                      MouseX Pan Strong
                    </option>
                  </Input>
                  <Button
                    onClick={this.handleClickBG1}
                    id="upbtn"
                    className="btn btn-info"
                  >
                    {this.state.fileBG1 !== null ? (
                      this.state.fileBG1
                    ) : (
                      <div>Search File</div>
                    )}
                  </Button>
                  <Button onClick={this.submitBG1}>
                    UPLOAD
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-bar-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  </Button>
                </InputGroup>
                <InputGroup className="alert" className="col-6">
                  <Input
                    type="select"
                    name="fxBG2"
                    id="fxBG2"
                    onChange={this.onFXBG2}
                  >
                    <option name="static" value="static">
                      I want a static background
                    </option>
                    <option name="mm1" value="mm1">
                      Mouse Pan Smooth
                    </option>
                    <option name="mm2" value="mm2">
                      Mouse Pan Strong
                    </option>
                    <option name="mx1" value="mx1">
                      MouseX Pan Smooth
                    </option>
                    <option name="mx2" value="mx2">
                      MouseX Pan Strong
                    </option>
                    <option name="my1" value="my1">
                      MouseY Pan Smooth
                    </option>
                    <option name="my2" value="my2">
                      MouseY Pan Strong
                    </option>
                  </Input>
                  <Button
                    onClick={this.handleClickBG2}
                    id="upbtn"
                    className="btn btn-info"
                  >
                    {this.state.fileBG2 !== null ? (
                      this.state.fileBG2
                    ) : (
                      <div>Search File</div>
                    )}
                  </Button>
                  <Button onClick={this.submitBG2}>
                    UPLOAD
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-bar-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  </Button>
                </InputGroup>
              </div>
              <Button onClick={this.back}>BACK</Button>
              <Button onClick={this.next}>NEXT</Button>
            </>
          ) : null}
          {this.state.ols === true ? (
            <>
              <div className="row">
                <div className="col-6" style={{ textAlign: "center" }}>
                  <h3>Low State</h3>
                  <div
                    id="SCRN"
                    key="OL1-FRAME"
                    style={{
                      position: "relative",
                      width: "490px",
                      height:
                        this.state.format === "instagram" // 1080 x 1080px
                          ? "490px"
                          : this.state.format === "pinterest"
                          ? "735px"
                          : this.state.format === "facebook" // 640 x 511px
                          ? "391px"
                          : this.state.format === "twitter" // 1125 x 632 px
                          ? "275px"
                          : this.state.format === "a4l" // 2480 x 3508px
                          ? "693px"
                          : this.state.format === "a4p" // 7.159
                          ? "346px"
                          : this.state.format === "hd"
                          ? "276px"
                          : this.state.format === "ws"
                          ? "275px"
                          : "100px",
                      background: "ivory",
                      backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
                      overflow: "hidden",
                    }}
                  >
                    {this.state.fileURLBG1 !== null ? (
                      <img
                        src={this.state.fileURLBG1}
                        alt=""
                        id="BG1"
                        key="0"
                        style={{
                          position: "absolute",
                          top: `${this.state.yBG1}%`,
                          left: `${this.state.xBG1}%`,
                          width: this.state.formatH
                            ? "auto"
                            : `${this.state.wBG1}%`,
                          height: this.state.formatH
                            ? `${this.state.hBG1}%`
                            : "auto",
                        }}
                      />
                    ) : null}
                    {this.state.fileURLBG2 !== null ? (
                      <img
                        src={this.state.fileURLBG2}
                        alt=""
                        id="BG2"
                        key="1"
                        style={{
                          position: "absolute",
                          top: `${this.state.yBG2 + this.state.tyBG2}%`,
                          left: `${this.state.xBG2 + this.state.txBG2}%`,
                          width: this.state.formatH
                            ? "auto"
                            : `${this.state.wBG2}%`,
                          height: this.state.formatH
                            ? `${this.state.hBG2}%`
                            : "auto",
                        }}
                      />
                    ) : null}
                    {
                      (console.log(this.state.fileURLOL),
                      this.state.fileURLOL !== null ? (
                        <Draggable onStop={this.setOL1pos}>
                          <img
                            src={this.state.fileURLOL}
                            alt=""
                            id="OL1"
                            key="2"
                            style={{
                              position: "absolute",
                              top: `${this.state.yOL1 + this.state.tyOL1}%`,
                              left: `${this.state.xOL1 + this.state.txOL1}%`,
                              width: `${this.state.wOL1}%`,
                              height: `${this.state.hOL1}%`,
                            }}
                          />
                        </Draggable>
                      ) : null)
                    }
                  </div>
                </div>
                <div className="col-6" style={{ textAlign: "center" }}>
                  <h3>High State</h3>
                  <div
                    id="SCRN"
                    key="OL2-FRAME"
                    style={{
                      position: "relative",
                      width: "490px",
                      height:
                        this.state.format === "instagram" // 1080 x 1080px
                          ? "490px"
                          : this.state.format === "pinterest"
                          ? "735px"
                          : this.state.format === "facebook" // 640 x 511px
                          ? "391px"
                          : this.state.format === "twitter" // 1125 x 632 px
                          ? "275px"
                          : this.state.format === "a4l" // 2480 x 3508px
                          ? "693px"
                          : this.state.format === "a4p" // 7.159
                          ? "346px"
                          : this.state.format === "hd"
                          ? "276px"
                          : this.state.format === "ws"
                          ? "275px"
                          : "100px",
                      background: "ivory",
                      backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
                      overflow: "hidden",
                    }}
                  >
                    {this.state.fileURLBG1 !== null ? (
                      <img
                        src={this.state.fileURLBG1}
                        alt=""
                        id="BG1"
                        key="0"
                        style={{
                          position: "absolute",
                          top: `${this.state.yBG1}%`,
                          left: `${this.state.xBG1}%`,
                          width: this.state.formatH
                            ? "auto"
                            : `${this.state.wBG1}%`,
                          height: this.state.formatH
                            ? `${this.state.hBG1}%`
                            : "auto",
                        }}
                      />
                    ) : null}
                    {this.state.fileURLBG2 !== null ? (
                      <img
                        src={this.state.fileURLBG2}
                        alt=""
                        id="BG2"
                        key="1"
                        style={{
                          position: "absolute",
                          top: `${this.state.yBG2 + this.state.tyBG2}%`,
                          left: `${this.state.xBG2 + this.state.txBG2}%`,
                          width: this.state.formatH
                            ? "auto"
                            : `${this.state.wBG2}%`,
                          height: this.state.formatH
                            ? `${this.state.hBG2}%`
                            : "auto",
                        }}
                      />
                    ) : null}
                    {this.state.fileURLOL !== null ? (
                      <Draggable onStop={this.setOL2pos}>
                        <img
                          src={this.state.fileURLOL}
                          alt=""
                          id="OL2"
                          key="2"
                          style={{
                            position: "absolute",
                            top: `${this.state.yOL2 + this.state.tyOL2}%`,
                            left: `${this.state.xOL2 + this.state.txOL2}%`,
                            width: `${this.state.wOL2}%`,
                            height: `${this.state.hOL2}%`,
                          }}
                        />
                      </Draggable>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <InputGroup className="alert" className="col-6">
                  <Input
                    type="select"
                    name="fxOL"
                    id="fxOL"
                    onChange={this.onFXOL}
                  >
                    <option
                      key={0}
                      value={JSON.stringify({ value: 100, name: "default" })}
                    >
                      Select an Oracle
                    </option>
                    {this.state.feeds.map((feed) => (
                      <option key={feed.name} value={JSON.stringify(feed)}>
                        {feed.name + " - " + feed.value.toFixed(4)}
                      </option>
                    ))}
                  </Input>
                  <Button
                    onClick={this.handleClickOL}
                    id="upbtn"
                    className="btn btn-info"
                  >
                    {this.state.fileOL !== null ? (
                      this.state.fileOL
                    ) : (
                      <div>Search File</div>
                    )}
                  </Button>
                  <Button onClick={this.submitOL}>
                    UPLOAD
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-bar-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  </Button>
                </InputGroup>
                <InputGroup className="col-6">
                  <p className="w-100">
                    Lowest State Value {parseInt(this.state.loVal).toFixed(0)}{" "}
                    | Highest State Value{" "}
                    {parseInt(this.state.hiVal).toFixed(0)}
                  </p>
                  <CustomInput
                    id="lo"
                    name="lo"
                    className="col-3"
                    type="range"
                    value={this.state.loVal}
                    min="0"
                    max={this.state.chosenVal}
                    onChange={this.onRangeLo}
                  />
                  <CustomInput
                    id="hi"
                    name="hi"
                    className="col-9"
                    type="range"
                    value={this.state.hiVal}
                    min={this.state.chosenVal}
                    max={this.state.chosenVal * 10}
                    onChange={this.onRangeHi}
                  />
                </InputGroup>
              </div>
              <Button onClick={this.back}>BACK</Button>
              <Button onClick={this.next}>NEXT</Button>
            </>
          ) : null}
          {this.state.fgs === true ? (
            <>
              <h3>Foregrounds</h3>
              {console.log("aveX // ", this.state.txOL1, this.state.fxOL)}
              <div className="row">
                <div className="col-6" style={{ textAlign: "center" }}>
                  <div
                    id="SCRN"
                    key="OL1-FRAME"
                    style={{
                      position: "relative",
                      width: "490px",
                      height:
                        this.state.format === "instagram" // 1080 x 1080px
                          ? "490px"
                          : this.state.format === "pinterest"
                          ? "735px"
                          : this.state.format === "facebook" // 640 x 511px
                          ? "391px"
                          : this.state.format === "twitter" // 1125 x 632 px
                          ? "275px"
                          : this.state.format === "a4l" // 2480 x 3508px
                          ? "693px"
                          : this.state.format === "a4p" // 7.159
                          ? "346px"
                          : this.state.format === "hd"
                          ? "276px"
                          : this.state.format === "ws"
                          ? "275px"
                          : "100px",
                      background: "ivory",
                      backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
                      overflow: "hidden",
                    }}
                  >
                    {this.state.fileURLBG1 !== null ? (
                      <img
                        src={this.state.fileURLBG1}
                        alt=""
                        id="BG1"
                        key="0"
                        style={{
                          position: "absolute",
                          top: `${this.state.yBG1}%`,
                          left: `${this.state.xBG1}%`,
                          width: this.state.formatH
                            ? "auto"
                            : `${this.state.wBG1}%`,
                          height: this.state.formatH
                            ? `${this.state.hBG1}%`
                            : "auto",
                        }}
                      />
                    ) : null}
                    {this.state.fileURLBG2 !== null ? (
                      <img
                        src={this.state.fileURLBG2}
                        alt=""
                        id="BG2"
                        key="1"
                        style={{
                          position: "absolute",
                          top: `${this.state.yBG2 + this.state.tyBG2}%`,
                          left: `${this.state.xBG2 + this.state.txBG2}%`,
                          width: this.state.formatH
                            ? "auto"
                            : `${this.state.wBG2}%`,
                          height: this.state.formatH
                            ? `${this.state.hBG2}%`
                            : "auto",
                        }}
                      />
                    ) : null}
                    {
                      (console.log(this.state.fileURLOL),
                      this.state.fileURLOL !== null ? (
                        <img
                          src={this.state.fileURLOL}
                          alt=""
                          id="OL1"
                          key="2"
                          style={{
                            position: "absolute",
                            top: `${this.state.yOLN + this.state.tyOLN}%`,
                            left: `${this.state.xOLN + this.state.txOLN}%`,
                            width: `${this.state.wOLN}%`,
                            height: `${this.state.hOLN}%`,
                          }}
                        />
                      ) : null)
                    }
                    {this.state.fileURLFG1 !== null ? (
                      <Draggable onStop={this.setFG1pos}>
                        <img
                          src={this.state.fileURLFG1}
                          alt=""
                          id="FG1"
                          key="3"
                          style={{
                            position: "absolute",
                            top: `${this.state.yFG1 + this.state.tyFG1}%`,
                            left: `${this.state.xFG1 + this.state.txFG1}%`,
                            width: `${this.state.wFG1}%`,
                            height: `${this.state.hFG1}%`,
                          }}
                        />
                      </Draggable>
                    ) : null}
                  </div>
                </div>
                <div className="col-6" style={{ textAlign: "center" }}>
                  <div
                    id="SCRN"
                    key="OL2-FRAME"
                    style={{
                      position: "relative",
                      width: "490px",
                      height:
                        this.state.format === "instagram" // 1080 x 1080px
                          ? "490px"
                          : this.state.format === "pinterest"
                          ? "735px"
                          : this.state.format === "facebook" // 640 x 511px
                          ? "391px"
                          : this.state.format === "twitter" // 1125 x 632 px
                          ? "275px"
                          : this.state.format === "a4l" // 2480 x 3508px
                          ? "693px"
                          : this.state.format === "a4p" // 7.159
                          ? "346px"
                          : this.state.format === "hd"
                          ? "276px"
                          : this.state.format === "ws"
                          ? "275px"
                          : "100px",
                      background: "ivory",
                      backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
                      overflow: "hidden",
                    }}
                  >
                    {this.state.fileURLBG1 !== null ? (
                      <img
                        src={this.state.fileURLBG1}
                        alt=""
                        id="BG1"
                        key="0"
                        style={{
                          position: "absolute",
                          top: `${this.state.yBG1}%`,
                          left: `${this.state.xBG1}%`,
                          width: this.state.formatH
                            ? "auto"
                            : `${this.state.wBG1}%`,
                          height: this.state.formatH
                            ? `${this.state.hBG1}%`
                            : "auto",
                        }}
                      />
                    ) : null}
                    {this.state.fileURLBG2 !== null ? (
                      <img
                        src={this.state.fileURLBG2}
                        alt=""
                        id="BG2"
                        key="1"
                        style={{
                          position: "absolute",
                          top: `${this.state.yBG2 + this.state.tyBG2}%`,
                          left: `${this.state.xBG2 + this.state.txBG2}%`,
                          width: this.state.formatH
                            ? "auto"
                            : `${this.state.wBG2}%`,
                          height: this.state.formatH
                            ? `${this.state.hBG2}%`
                            : "auto",
                        }}
                      />
                    ) : null}
                    {this.state.fileURLOL !== null ? (
                      <img
                        src={this.state.fileURLOL}
                        alt=""
                        id="OL2"
                        key="2"
                        style={{
                          position: "absolute",
                          top: `${this.state.yOLN + this.state.tyOLN}%`,
                          left: `${this.state.xOLN + this.state.txOLN}%`,
                          width: `${this.state.wOLN}%`,
                          height: `${this.state.hOLN}%`,
                        }}
                      />
                    ) : null}
                    {this.state.fileURLFG1 !== null ? (
                      <img
                        src={this.state.fileURLFG1}
                        alt=""
                        id="FG1"
                        key="3"
                        style={{
                          position: "absolute",
                          top: `${this.state.yFG1 + this.state.tyFG1}%`,
                          left: `${this.state.xFG1 + this.state.txFG1}%`,
                          width: `${this.state.wFG1}%`,
                          height: `${this.state.hFG1}%`,
                        }}
                      />
                    ) : null}
                    {this.state.fileURLFG2 !== null ? (
                      <Draggable onStop={this.setFG2pos}>
                        <img
                          src={this.state.fileURLFG2}
                          alt=""
                          id="FG2"
                          key="4"
                          style={{
                            position: "absolute",
                            top: `${this.state.yFG2 + this.state.tyFG2}%`,
                            left: `${this.state.xFG2 + this.state.txFG2}%`,
                            width: `${this.state.wFG2}%`,
                            height: `${this.state.hFG2}%`,
                          }}
                        />
                      </Draggable>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <InputGroup className="alert col-6">
                  <Input
                    type="select"
                    name="fxFG1"
                    id="fxFG1"
                    onChange={this.onFXFG1}
                  >
                    <option name="static" value="static">
                      I want a static foreground
                    </option>
                    <option name="mm1" value="mm1">
                      Mousemove pan close I
                    </option>
                    <option name="mm2" value="mm2">
                      Mousemove pan close II
                    </option>
                    <option name="ffl" value="ffl">
                      Falling foreground Loop
                    </option>
                    <option name="rfl" value="rfl">
                      Rising foreground Loop
                    </option>
                    <option name="alphin" value="alphin">
                      Alpha in foreground
                    </option>
                    <option name="alphout" value="alphout">
                      Alpha out forground
                    </option>
                  </Input>
                  <Button
                    onClick={this.handleClickFG1}
                    id="upbtn"
                    className="btn btn-info"
                  >
                    {this.state.fileFG1 !== null ? (
                      this.state.fileFG1
                    ) : (
                      <div>Search File</div>
                    )}
                  </Button>
                  <Button onClick={this.submitFG1}>
                    UPLOAD
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-bar-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  </Button>
                </InputGroup>
                <InputGroup className="alert col-6">
                  <Input
                    type="select"
                    name="fxFG2"
                    id="fxFG2"
                    onChange={this.onFXFG2}
                  >
                    <option name="static" value="static">
                      I want a static foreground
                    </option>
                    <option name="mm1" value="mm1">
                      Mousemove pan close I
                    </option>
                    <option name="mm2" value="mm2">
                      Mousemove pan close II
                    </option>
                    <option name="ffl" value="ffl">
                      Falling foreground Loop
                    </option>
                    <option name="rfl" value="rfl">
                      Rising foreground Loop
                    </option>
                    <option name="alphin" value="alphin">
                      Alpha in foreground
                    </option>
                    <option name="alphout" value="alphout">
                      Alpha out forground
                    </option>
                  </Input>

                  <Button
                    onClick={this.handleClickFG2}
                    id="upbtn"
                    className="btn btn-info"
                  >
                    {this.state.fileFG2 !== null ? (
                      this.state.fileFG2
                    ) : (
                      <div>Search File</div>
                    )}
                  </Button>
                  <Button onClick={this.submitFG2}>
                    UPLOAD
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-bar-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  </Button>
                </InputGroup>
              </div>
              <Button onClick={this.back}>BACK</Button>
              <Button onClick={this.next}>NEXT</Button>
            </>
          ) : null}
          {console.log(this.state.fnls)}
          {this.state.fnls === true ? (
            <>
              <h3>Final Preview</h3>
              <div
                id="SCRN"
                key="FLPR-FRAME"
                style={{
                  position: "relative",
                  width: "490px",
                  height:
                    this.state.format === "instagram" // 1080 x 1080px
                      ? "490px"
                      : this.state.format === "pinterest"
                      ? "735px"
                      : this.state.format === "facebook" // 640 x 511px
                      ? "391px"
                      : this.state.format === "twitter" // 1125 x 632 px
                      ? "275px"
                      : this.state.format === "a4l" // 2480 x 3508px
                      ? "693px"
                      : this.state.format === "a4p" // 7.159
                      ? "346px"
                      : this.state.format === "hd"
                      ? "276px"
                      : this.state.format === "ws"
                      ? "275px"
                      : "100px",
                  background: "ivory",
                  backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
                  overflow: "hidden",
                }}
              >
                {this.state.fileURLBG1 !== null ? (
                  <img
                    src={this.state.fileURLBG1}
                    alt=""
                    id="BG1"
                    key="0"
                    style={{
                      position: "absolute",
                      top: `${this.state.yBG1}%`,
                      left: `${this.state.xBG1}%`,
                      width: this.state.formatH
                        ? "auto"
                        : `${this.state.wBG1}%`,
                      height: this.state.formatH
                        ? `${this.state.hBG1}%`
                        : "auto",
                    }}
                  />
                ) : null}

                {this.state.fileURLBG2 !== null ? (
                  <img
                    src={this.state.fileURLBG2}
                    alt=""
                    id="BG2"
                    key="1"
                    style={{
                      position: "absolute",
                      top: `${this.state.yBG2 + this.state.tyBG2}%`,
                      left: `${this.state.xBG2 + this.state.txBG2}%`,
                      width: this.state.formatH
                        ? "auto"
                        : `${this.state.wBG2}%`,
                      height: this.state.formatH
                        ? `${this.state.hBG2}%`
                        : "auto",
                    }}
                  />
                ) : null}

                {this.state.fileURLOL !== null ? (
                  <img
                    src={this.state.fileURLOL}
                    alt=""
                    id="OLN"
                    key="2"
                    style={{
                      position: "absolute",
                      top: `${this.state.symY + this.state.tyOL1}%`,
                      left: `${this.state.symX + this.state.txOL1}%`,
                      width: `${this.state.symW}%`,
                      height: `${this.state.symH}%`,
                      transform: `rotate(${this.state.symR}deg)`,
                      opacity: `${this.state.symO / 100}%`,
                    }}
                  />
                ) : null}

                {this.state.fileURLFG1 !== null ? (
                  <img
                    src={this.state.fileURLFG1}
                    alt=""
                    id="FG1"
                    key="3"
                    style={{
                      position: "absolute",
                      top: `${this.state.yFG1 +
                        (this.state.tyFG1 + this.state.tyFG1) / 2}%`,
                      left: `${this.state.xFG1 +
                        (this.state.txFG1 + this.state.tyFG1) / 2}%`,
                      width: `${this.state.wFG1}%`,
                      height: `${this.state.hFG1}%`,
                    }}
                  />
                ) : null}

                {this.state.fileURLFG2 !== null ? (
                  <img
                    src={this.state.fileURLFG2}
                    alt=""
                    id="FG2"
                    key="4"
                    style={{
                      position: "absolute",
                      top: `${this.state.yFG2 + this.state.tyFG2}%`,
                      left: `${this.state.xFG2 + this.state.txFG2}%`,
                      width: `${this.state.wFG2}%`,
                      height: `${this.state.hFG2}%`,
                    }}
                  />
                ) : null}
              </div>
              <CustomInput
                id="symval"
                name="symval"
                className="col-3"
                type="range"
                value={this.state.simVal}
                min={this.state.loVal}
                max={this.state.hiVal}
                onChange={this.onRangeSym}
              />
              <p>{`Value ${this.state.simVal}`}</p>
              <Button onClick={this.back}>BACK</Button>
              <Button onClick={this.minter}>MINT</Button>
            </>
          ) : null}
          {this.state.mint === true ? (
            <>
              <h3>Mint Waitlounge</h3>
            </>
          ) : null}
          <input
            type="file"
            id="uploadBG1"
            accept={[".jpg", ".gif", ".png", ".svg"]}
            ref={this.hiddenFileInput}
            onChange={this.captureBG1}
            style={{ display: "none" }}
          />
          <input
            type="file"
            id="uploadBG2"
            accept={[".jpg", ".gif", ".png", ".svg"]}
            ref={this.hiddenFileInput}
            onChange={this.captureBG2}
            style={{ display: "none" }}
          />
          <input
            type="file"
            id="uploadOL"
            accept={[".jpg", ".gif", ".png", ".svg"]}
            ref={this.hiddenFileInput}
            onChange={this.captureOL}
            style={{ display: "none" }}
          />
          <input
            type="file"
            id="uploadFG1"
            accept={[".jpg", ".gif", ".png", ".svg"]}
            ref={this.hiddenFileInput}
            onChange={this.captureFG1}
            style={{ display: "none" }}
          />
          <input
            type="file"
            id="uploadFG2"
            accept={[".jpg", ".gif", ".png", ".svg"]}
            ref={this.hiddenFileInput}
            onChange={this.captureFG2}
            style={{ display: "none" }}
          />
        </Form>
      </div>
    );
  }
}

export default ArtPreset;
