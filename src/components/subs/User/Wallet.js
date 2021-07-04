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
//          @title :: Fractio Framework React App Walle                             // 
//          @id :: FR-90819                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90819 is Wallet for the React Frontend.                  //
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
import Web3 from "web3";
import { Form, Input } from "reactstrap";
import MLQ from "../../../abis/MLQ.json";
const MLQAdrs = "0xc28e24cddb16b729a25baa21e9d670033897ba1f";

class Wallet extends Component {
  state = {};
  async componentWillMount() {
    await this.loadWeb3();
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
  async mlqDrop(value) {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    console.log(value, accounts);
    const MLQc = new web3.eth.Contract(MLQ.abi, MLQAdrs);
    const result = await MLQc.methods.gimmeSomeMLQ(value).send(accounts[0]);
    console.log("FEED LOG // ", result, this.countProperties(result), Date());
  }

  gimmeDat = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.mlqDrop(e.target.value);
  };
  render() {
    return (
      <div>
        <div className="row">
          <h2>Framework Tokens</h2>
          <div className="col-6 alert alert-danger">
            <h3>Gimme Some MLQ</h3>
            <Form>
              <Input type="select" onChange={this.gimmeDat}>
                <option value="0">---</option>
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="60">60</option>
                <option value="100">100</option>
              </Input>
            </Form>
          </div>
          <div className="col-6 alert alert-danger">
            <h3>SHK</h3>
          </div>
        </div>
        <div className="row">
          <h2>Fungibles</h2>
          <div className="col-6 alert alert-danger">
            <h3>ERC-20</h3>
          </div>
          <div className="col-6 alert alert-danger">
            <h3>ERC-677</h3>
          </div>
        </div>
        <div className="row">
          <h2>Non Fungibles</h2>
          <div className="col-6 alert alert-danger">
            <h3>ERC-721</h3>
          </div>
          <div className="col-6 alert alert-danger">
            <h3>ERC-155</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
