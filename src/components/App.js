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
//          @id :: FR-90909                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90909 is Entry Point for the React Frontend.             //
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

// React Dep Imports
import React, { Component } from "react";
import { Provider } from "react-redux";
import Web3 from "web3";
import store from "./store";

// CSS & Frontend Functions

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import Actions
import { getUsers } from "./action/userActions.js";

// Import Components
import Screen from "./Screen";
import TopMenu from "./subs/Navigation/TopMenu";

// SMART CONTRACTS TEST NET
const RinkMLQAddress = "0xc28e24cddb16b729a25baa21e9d670033897ba1f";
const grey = "#e2e3db";

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
