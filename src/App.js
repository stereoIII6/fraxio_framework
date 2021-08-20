import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Web3 from "web3";
import { getUser } from "./action/userActions.js";
import Home from "./Home";
import Wallet from "./Wallet";
import EditSel from "./EditSel";
import Order from "./Order";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoHome from "./LogoHome";
import Defi from "./Defi";
const RinkMLQAddress = "0x6c9939ded06fb2C6FbdAE377225219faC8623132";
class App extends Component {
  static propTypes = {
    seeEdit: PropTypes.bool,
    seeHome: PropTypes.bool,
    seeWallet: PropTypes.bool,
    seeOrders: PropTypes.bool,
    getUser: PropTypes.func,
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

  async loadBlockChainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    console.log("// AUTO init action", accounts[0]);

    const network = await web3.eth.net.getNetworkType();
    const networkId = await web3.eth.net.getId();
    console.log("network", network, networkId);
    let eth = 0;
    web3.eth.getBalance("0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5", function(
      err,
      result
    ) {
      if (err) {
        console.log(err);
      } else {
        console.log(web3.utils.fromWei(result, "ether") + " ETH");
        eth = result;
      }
    });
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

    let mlq = new web3.eth.Contract(minABI, RinkMLQAddress);
    async function getBalance() {
      const myBalance = await mlq.methods.balanceOf(accounts[0]).call();
      console.log("Balancein", myBalance);

      return myBalance;
    }
    let mlqBalance = await getBalance();
    this.props.getUser(accounts, network, mlqBalance, eth);
  }

  render() {
    const { seeEdit, seeHome, seeWallet, seeOrders } = this.props;
    return (
      <div className="App">
        <div id="bg"></div>
        <div id="top">
          <div id="frx">
            <img
              src="https://ipfs.io/ipfs/QmTFxh24ejPM6ELa16fHCJAvKApcmpReYKaktaRjJBEKpc"
              id="logo"
              alt="logo"
            />
            <LogoHome />
          </div>
          <Defi />
        </div>
        <div id="screen">
          {seeHome ? <Home /> : null}
          {seeEdit ? <EditSel /> : null}
          {seeWallet ? <Wallet /> : null}
          {seeOrders ? <Order /> : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  seeEdit: state.userState.seeEdit,
  seeHome: state.userState.seeHome,
  seeWallet: state.userState.seeWallet,
  seeOrders: state.userState.seeOrders,
});

export default connect(mapStateToProps, { getUser })(App);
