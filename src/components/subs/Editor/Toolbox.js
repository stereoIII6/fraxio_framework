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
import Draggable from "react-draggable";
import { addLayer, editLayer } from "../../action/layerActions";
import { editKey, saveKey, saveKeys, resetKey } from "../../action/keyActions";
import { Button, Input, InputGroup, CustomInput } from "reactstrap";
// class definition
class ToolBox extends Component {
  // proptype definition
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    workingKey: PropTypes.object,
    addLayer: PropTypes.func,
    layers: PropTypes.array,
    coloris: PropTypes.object,
    editKey: PropTypes.func,
    saveKeys: PropTypes.func,
    saveKey: PropTypes.func,
    resetKey: PropTypes.func,
    keys: PropTypes.array,
  };
  state = this.props.workingKey.initKey;
  // move layer x position
  slideX = (e) => {
    //console.log(e);
    let wKey = this.props.workingKey.initKey;
    wKey.layerParams.x = e.target.value;
    this.setState(wKey);
    // this.props.editKey(wKey);
  };
  // move layer y position
  slideY = (e) => {
    console.log(e);
    let wKey = this.props.workingKey.initKey;
    wKey.layerParams.y = e.target.value;
    this.setState(wKey);
    // this.props.editKey(wKey);
  };
  // scale layer
  slideZ = (e) => {
    console.log(e);
    let wKey = this.props.workingKey.initKey;
    wKey.layerParams.z = e;
    this.setState(wKey);
    // this.props.editKey(wKey);
  };
  // rotate layer
  slideR = (e) => {
    console.log(e);
    let wKey = this.props.workingKey.initKey;
    wKey.layerParams.r = e;
    this.setState(wKey);
    // this.props.editKey(wKey);
  };
  // opacity layer
  slideO = (e) => {
    console.log(e);
    let wKey = this.props.workingKey.initKey;
    wKey.layerParams.o = e;
    this.setState(wKey);
    // this.props.editKey(wKey);
  };
  // save workingkey
  saveKey = (e) => {
    e.preventDefault();
    const wKey = this.props.workingKey.initKey;
    wKey.edit = false;
    wKey.booly = false;
    console.log(parseInt(wKey.keyID));
    if (
      this.props.keys.find(
        (key) => parseInt(key.keyID) !== parseInt(wKey.keyID)
      )
    ) {
      console.log("not same keys");
      this.props.saveKey(wKey);
    } else {
      console.log("same keys");
      let layerKeys = this.props.keys;
      let x = 0;
      let h = 0;
      layerKeys.filter((key) => key.keyID === wKey.keyID);
      layerKeys.push(wKey);
      console.log(layerKeys);
      this.props.saveKeys(layerKeys);
    }
  };
  //
  resetKey = (e) => {
    e.preventDefault();
    const wKey = this.props.workingKey.initKey;
    wKey.edit = false;
    wKey.booly = false;
    this.props.editKey(wKey);
  };
  render() {
    console.log(this.state);
    return (
      <Draggable>
        <div
          className="alert alert-success"
          style={{
            width: "260px",
            padding: "10px",
            position: "absolute",
            zIndex: 100,
            background: this.props.coloris.sky,
            color: this.props.coloris.palm,
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
                {this.props.workingKey.oracle !== "no" &&
                this.props.workingKey.oracle !== "static" ? (
                  <InputGroup
                    style={{
                      width: "240px",
                      background: this.props.coloris.grey,
                      color: this.props.coloris.palm,
                    }}
                  >
                    <Input
                      type="text"
                      placeholder={this.props.workingLayer.layerOracle.param}
                      disabled
                      style={{
                        width: "30px",
                        fontSize: "0.5em",
                      }}
                    />
                    <Input
                      type="text"
                      defaultValue={
                        this.props.workingLayer.layerOracle.initValue
                      }
                      style={{
                        width: "80px",
                        fontSize: "0.5em",
                      }}
                    />
                  </InputGroup>
                ) : null}
              </h3>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
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
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Scale
                <CustomInput
                  id="zR"
                  type="range"
                  value={this.state.layerParams.z}
                  onChange={this.slideZ}
                  max={200}
                  min={1}
                />
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Rotation
                <CustomInput
                  id="rR"
                  type="range"
                  value={this.state.layerParams.r}
                  onChange={this.slideR}
                  max={360}
                  min={-360}
                />
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Opacity
                <CustomInput
                  id="oR"
                  type="range"
                  value={this.state.layerParams.o}
                  onChange={this.slideO}
                  max={100}
                  min={0}
                />
              </div>
              {this.props.workingLayer.layerType === "typo" ||
              this.props.workingLayer.layerType === "svg" ? (
                <div
                  className="btn"
                  style={{
                    width: "100%",
                    background: this.props.coloris.grey,
                    color: this.props.coloris.palm,
                  }}
                >
                  Color
                </div>
              ) : null}
              {this.props.workingLayer.layerType === "typo" ||
              this.props.workingLayer.layerType === "svg" ? (
                <div
                  className="btn"
                  style={{
                    width: "100%",
                    background: this.props.coloris.grey,
                    color: this.props.coloris.palm,
                  }}
                >
                  Border
                </div>
              ) : null}
              {this.props.workingLayer.layerType === "typo" ||
              this.props.workingLayer.layerType === "svg" ? (
                <div className="btn" style={{ width: "100%" }}>
                  BorderColor
                </div>
              ) : null}
            </div>
          ) : null}
          {this.props.workingLayer.layerType === "audio" ||
          this.props.workingLayer.layerType === "video" ? (
            <div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                lCut
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                rCut
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Play
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Pause
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Stop
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Loop
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Go2Play
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Go2Pause
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Volume
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: this.props.coloris.grey,
                  color: this.props.coloris.palm,
                }}
              >
                Pan
              </div>
            </div>
          ) : null}

          <div
            style={{
              width: "100%",
              marginTop: "1em",
              background: this.props.coloris.grey,
              color: this.props.coloris.palm,
            }}
          >
            <div
              className="btn"
              style={{
                width: "70%",
                background: this.props.coloris.mint,
                color: this.props.coloris.purple,
              }}
              onClick={this.saveKey}
            >
              Save
            </div>
            <div
              className="btn"
              style={{
                width: "30%",
                background: this.props.coloris.purple,
                color: this.props.coloris.mint,
              }}
              onClick={this.resetKey}
            >
              x
            </div>
          </div>
        </div>
      </Draggable>
    );
  }
}
const mapStateToProps = (state) => ({
  workingPYE: state.pyeState.workingPYE,
  workingLayer: state.layerState.workingLayer,
  workingKey: state.keyState.workingKey,
  keys: state.keyState.keys,
  layers: state.layerState.layers,
  coloris: state.layerState.coloris,
});

export default connect(mapStateToProps, {
  addLayer,
  editLayer,
  editKey,
  saveKeys,
  saveKey,
  resetKey,
})(ToolBox);
