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
//          @id :: FR-90981                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90981 is Review Section for the React Frontend.          //
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
import { Input, Form } from "reactstrap";
class Won extends Component {
  state = {
    step: 0,
    answer: [],
  };
  onStep = (e) => {
    e.preventDefault();

    let answer = this.state.answer;
    let newStep = this.state.step;
    answer[e.target.id] = e.target.value;

    if (e.target.value === "protocol" || e.target.value === "extension") {
      newStep += 5;
    } else newStep++;
    console.log(answer[e.target.id], newStep);
    this.setState({ step: newStep, answer });
  };

  render() {
    return (
      <div>
        <Form className="container">
          <div
            className="row"
            id="0"
            style={{
              opacity: this.state.step === 0 ? 1 : 0,
              marginBottom: "2em",
            }}
          >
            <div className="col alert alert-info" style={{ fontSize: "2em" }}>
              What is Web3 to you ?
            </div>
            <Input
              type="select"
              id="webThree"
              className="col"
              style={{ fontSize: "2em" }}
              onChange={this.onStep}
            >
              <option value="default">---</option>
              <option value="latest">The latest Web Trends</option>
              <option value="protocol">A blockchainbased Web Protocol</option>
              <option value="service">
                Web Services on Win, Mac and Linux
              </option>
            </Input>
          </div>
        </Form>
        <Form className="container">
          <div
            className="row"
            id="0"
            style={{
              opacity: this.state.step === 1 ? 1 : 0,
              marginBottom: "2em",
            }}
          >
            <div className="col alert alert-info" style={{ fontSize: "2em" }}>
              Web3 is a blockchainbased Web Protocol it is referring to the
              Ethereum Smart Contract Chain that enables its users to transfer
              data and value in a secure and decentral way. What is a Blockchain
              ?
            </div>
            <Input
              type="select"
              id="webThree"
              className="col"
              style={{ fontSize: "2em" }}
              onChange={this.onStep}
            >
              <option value="default">---</option>
              <option value="ledger">
                A distributed digital ledger that stores all transactions
              </option>
              <option value="chain">
                A chain of Computers that form a Block
              </option>
              <option value="miner">
                A minerfarm of chained GPUs that produces blocks
              </option>
            </Input>
          </div>
        </Form>
        <Form className="container">
          <div
            className="row"
            id="5"
            style={{
              opacity: this.state.step === 5 ? 1 : 0,
              marginBottom: "2em",
            }}
          >
            <div className="col alert alert-info" style={{ fontSize: "2em" }}>
              What is a Metamask ?
            </div>
            <Input
              type="select"
              id="webMetamask"
              className="col"
              style={{ fontSize: "2em" }}
              onChange={this.onStep}
            >
              <option value="default">---</option>
              <option value="avatar">An Avatar in the Metaverse</option>
              <option value="filter">A filter Mask against Trackers</option>
              <option value="extension">
                A browser extension that enables Web3
              </option>
            </Input>
          </div>
        </Form>
      </div>
    );
  }
}

export default Won;
