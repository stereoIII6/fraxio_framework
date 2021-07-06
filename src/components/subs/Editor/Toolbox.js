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
//          @id :: FR-94527                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-94527 is Layer Input for the React Frontend.             //
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
import { Slider, RangeSlider } from "rsuite";

import { addLayer, editLayer } from "../../action/layerActions";
import { editKey, saveKey, resetKey } from "../../action/keyActions";
import { Button, Input, InputGroup } from "reactstrap";
class ToolBox extends Component {
  state = {
    layerParams: {
      x: 0,
      y: 0,
      z: 90,
      o: 100,
      r: 0,
    },
  };
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    workingKey: PropTypes.object,
    addLayer: PropTypes.func,
    layers: PropTypes.array,
    coloris: PropTypes.object,
    editKey: PropTypes.func,
    saveKey: PropTypes.func,
    resetKey: PropTypes.func,
  };
  slideX = (e) => {
    //console.log(e);
    let wKey = this.props.workingKey;
    wKey.layerParams.x = e.target.value;
    this.setState(wKey);
    this.props.editKey(wKey);
  };
  slideY = (e) => {
    console.log(e);
    let wKey = this.props.workingKey;
    wKey.layerParams.y = e.target.value;
    this.setState(wKey);
    this.props.editKey(wKey);
  };
  slideZ = (e) => {
    console.log(e);
    let wKey = this.props.workingKey;
    wKey.layerParams.z = e;
    this.setState(wKey);
    this.props.editKey(wKey);
  };
  slideR = (e) => {
    console.log(e);
    let wKey = this.props.workingKey;
    wKey.layerParams.r = e;
    this.setState(wKey);
    this.props.editKey(wKey);
  };
  slideO = (e) => {
    console.log(e);
    let wKey = this.props.workingKey;
    wKey.layerParams.o = e;
    this.setState(wKey);
    this.props.editKey(wKey);
  };
  saveKey = (e) => {
    e.preventDefault();
    const wKey = this.props.workingKey;
    wKey.edit = false;
    this.props.saveKey(wKey);
  };
  resetKey = (e) => {
    e.preventDefault();
    const wKey = this.props.workingKey;
    wKey.edit = false;
    this.props.editKey(wKey);
  };
  render() {
    return (
      <div
        className="alert alert-success"
        style={{
          width: "160px",
          padding: "10px",
          position: "absolute",
          top: "400px",
          left: "20px",
        }}
      >
        {this.props.workingLayer.layerType !== "audio" ||
        this.props.workingLayer.layerType !== "empty" ||
        this.props.workingLayer.layerType !== "video" ? (
          <div>
            <h3>
              {" "}
              Layer {this.props.workingLayer.layerID} Key{" "}
              {this.props.workingKey.keyID}
              {this.props.workingKey.oracle !== "static" ? (
                <InputGroup style={{ width: "140px" }}>
                  <Input
                    type="text"
                    placeholder={this.props.workingLayer.layerOracle.param}
                    disabled
                    style={{ width: "30px", fontSize: "0.5em" }}
                  />
                  <Input
                    type="text"
                    defaultValue={this.props.workingLayer.layerOracle.initValue}
                    style={{ width: "80px", fontSize: "0.5em" }}
                  />
                </InputGroup>
              ) : null}
            </h3>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Position<br></br>
              {console.log(this.props.workingKey)}
              <Input
                type="text"
                id="x"
                value={this.state.layerParams.x}
                style={{
                  width: "50%",

                  float: "left",
                }}
                onChange={this.slideX}
              />
              <Input
                type="text"
                id="y"
                value={this.state.layerParams.y}
                style={{
                  width: "50%",

                  float: "left",
                }}
                onChange={this.slideY}
              />
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Scale
              <Slider
                value={this.state.layerParams.z}
                onChange={this.slideZ}
                max={200}
                min={1}
              />
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Rotation
              <Slider
                value={this.state.layerParams.r}
                onChange={this.slideR}
                max={360}
                min={-360}
              />
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Opacity
              <Slider
                value={this.state.layerParams.o}
                onChange={this.slideO}
                max={100}
                min={0}
              />
            </div>
            {this.props.workingLayer.layerType === "typo" ||
            this.props.workingLayer.layerType === "svg" ? (
              <div className="btn btn-info" style={{ width: "100%" }}>
                Color
              </div>
            ) : null}
            {this.props.workingLayer.layerType === "typo" ||
            this.props.workingLayer.layerType === "svg" ? (
              <div className="btn btn-info" style={{ width: "100%" }}>
                Border
              </div>
            ) : null}
            {this.props.workingLayer.layerType === "typo" ||
            this.props.workingLayer.layerType === "svg" ? (
              <div className="btn btn-info" style={{ width: "100%" }}>
                BorderColor
              </div>
            ) : null}
          </div>
        ) : null}
        {this.props.workingLayer.layerType === "audio" ||
        this.props.workingLayer.layerType === "video" ? (
          <div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              lCut
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              rCut
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Play
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Pause
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Stop
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Loop
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Go2Play
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Go2Pause
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Volume
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Pan
            </div>
          </div>
        ) : null}

        <div style={{ width: "100%" }}>
          <div
            className="btn btn-success"
            style={{ width: "70%" }}
            onClick={this.saveKey}
          >
            Save
          </div>
          <div
            className="btn btn-danger"
            style={{ width: "30%" }}
            onClick={this.resetKey}
          >
            x
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  workingPYE: state.pyeState.workingPYE,
  workingLayer: state.layerState.workingLayer,
  workingKey: state.keyState.workingKey,
  layers: state.layerState.layers,
  coloris: state.layerState.coloris,
});

export default connect(mapStateToProps, {
  addLayer,
  editLayer,
  editKey,
  saveKey,
  resetKey,
})(ToolBox);
