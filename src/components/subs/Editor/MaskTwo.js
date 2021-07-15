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
//          @id :: FR-90108                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90108 is Layer Input for the React Frontend.             //
//          It is the initial connection to IPFS for every File on Fractio          //
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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  resetPYE,
  discardPYE,
  saveDraft,
  mintPYE,
} from "../../action/pyeActions";
import { Button, Input, InputGroup } from "reactstrap";
import Layers from "./Layers";
const fs = require("fs");
// class definition
class MaskTwo extends Component {
  // redux state import
  static propTypes = {
    bake: PropTypes.bool,
    slice: PropTypes.bool,
    activeL: PropTypes.number,
    frame: PropTypes.bool,
    activeK: PropTypes.number,
    stateK: PropTypes.object,
    pyes: PropTypes.array,
    pyeDrafts: PropTypes.array,
    pyeSamples: PropTypes.array,
    users: PropTypes.array,
    cols: PropTypes.object,
    PYE: PropTypes.object,
    INIT: PropTypes.object,
    mintPYE: PropTypes.func,
    saveDraft: PropTypes.func,
    resetPYE: PropTypes.func,
    discardPYE: PropTypes.func,
  };
  // local state setup
  state = {
    saveOpen: false,
    fileName: "",
  };
  toggle = (e) => {
    e.preventDefault();
    this.setState({ saveOpen: true });
  };
  onChangeFileName = (e) => {
    this.setState({ fileName: e.target.value });
  };
  // handler on discard all layers
  onDiscard = (e) => {
    e.preventDefault();
    this.props.discardPYE();
  };
  onReset = (e) => {
    e.preventDefault();
    this.props.discardPYE();
  };
  // handler on save
  onSave = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const PYE = JSON.stringify(this.props.PYE);
    const fName =
      this.props.PYE.name +
      "_" +
      document.getElementById("fileName").value +
      ".pye.json";
    this.download(fName, PYE);
    this.setState({ saveOpen: false });

    // BLOCKchainpayment

    // await success

    // pass txt file to IPFS and give user DL Link
  };
  download = (filename, text) => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };
  onMint = (e) => {
    e.preventDefault();
    console.log(e.target);
    this.props.mintPYE(this.props.PYE);
  };

  render() {
    return (
      <div>
        <h1 className="m-0 p-0">
          {this.props.PYE.name} Layer Editor
          <Button
            style={{
              background:
                this.props.lighting === "light"
                  ? this.props.cols.light.bg2
                  : this.props.lighting === "dark"
                  ? this.props.cols.dark.bg2
                  : this.props.lighting === "irie"
                  ? this.props.cols.irie.bg2
                  : null,
              color:
                this.props.lighting === "light"
                  ? this.props.cols.light.c1
                  : this.props.lighting === "dark"
                  ? this.props.cols.dark.c1
                  : this.props.lighting === "irie"
                  ? this.props.cols.irie.c1
                  : null,
              float: "right",
            }}
            onClick={this.onDiscard}
          >
            X
          </Button>
          <Button
            style={{
              background:
                this.props.lighting === "light"
                  ? this.props.cols.light.bg2
                  : this.props.lighting === "dark"
                  ? this.props.cols.dark.bg2
                  : this.props.lighting === "irie"
                  ? this.props.cols.irie.bg2
                  : null,
              color:
                this.props.lighting === "light"
                  ? this.props.cols.light.c1
                  : this.props.lighting === "dark"
                  ? this.props.cols.dark.c1
                  : this.props.lighting === "irie"
                  ? this.props.cols.irie.c1
                  : null,
              float: "right",
              marginRight: "1em",
            }}
            onClick={this.toggle}
          >
            SAVE DRAFT [3 MLQ]
          </Button>
          {this.state.saveOpen ? (
            <div
              style={{
                position: "absolute",
                left: "0%",
                top: "0%",
                height: "1400px",
                width: "100%",
                paddingTop: "5em",
                background: "rgba(0,0,0,0.1)",

                zIndex: 100,
              }}
            >
              <div
                className="alert alert-info"
                style={{
                  width: "900px",
                  margin: "0px auto",
                  marginTop: "100px",
                }}
              >
                <InputGroup id="saveMod">
                  <Input
                    type="text"
                    id="fileName"
                    placeholder="Name your file"
                    value={this.state.fileName}
                    onChange={this.onChangeFileName}
                  />
                  <p style={{ fontSize: "0.5em", overflow: "hidden" }}>
                    {JSON.stringify(this.props.PYE)}
                  </p>
                  <Input
                    type="button"
                    value="SAVE DRAFT"
                    onClick={this.onSave}
                  />
                </InputGroup>
              </div>
            </div>
          ) : null}
          <Button
            style={{
              background:
                this.props.lighting === "light"
                  ? this.props.cols.light.bg2
                  : this.props.lighting === "dark"
                  ? this.props.cols.dark.bg2
                  : this.props.lighting === "irie"
                  ? this.props.cols.irie.bg2
                  : null,
              color:
                this.props.lighting === "light"
                  ? this.props.cols.light.c1
                  : this.props.lighting === "dark"
                  ? this.props.cols.dark.c1
                  : this.props.lighting === "irie"
                  ? this.props.cols.irie.c1
                  : null,
              float: "right",
              marginRight: "1em",
            }}
            disabled
            onClick={this.onMint}
          >
            MINT [15 MLQ]
          </Button>
        </h1>
        <hr></hr>
        {/* IMPORT LAYERS MODULE */}
        <Layers />
      </div>
    );
  }
}
// mapping redux state to local props
const mapStateToProps = (state) => ({
  pyes: state.pyeState.pyes,
  bake: state.pyeState.bake,
  pyeDrafts: state.pyeState.pyeDrafts,
  pyeSamples: state.pyeState.pyeSamples,
  PYE: state.pyeState.PYE,
  INIT: state.pyeState.INIT,
  users: state.userState.users,
  cols: state.userState.cols,
});

export default connect(mapStateToProps, {
  resetPYE,
  discardPYE,
  saveDraft,
  mintPYE,
})(MaskTwo);
