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
import {
  editKey,
  editKeys,
  saveKey,
  saveKeys,
  resetKey,
} from "../../action/keyActions";
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
    editKeys: PropTypes.func,
    saveKeys: PropTypes.func,
    saveKey: PropTypes.func,
    resetKey: PropTypes.func,
    keys: PropTypes.array,
    active: PropTypes.number,
  };
  state = { drg: false, key: this.props.workingKey.initKey };

  // move layer x position
  slideX = (e) => {
    console.log(e.target.value);
    let wKeys = this.props.keys;
    wKeys[this.props.active].layerParams.x = parseInt(e.target.value);
    this.props.editKeys(wKeys);
    this.setState(wKeys[e.target.value]);
  };
  // move layer y position
  slideY = (e) => {
    console.log(e.target.value);
    let wKeys = this.props.keys;
    wKeys[this.props.active].layerParams.y = parseInt(e.target.value);
    this.props.editKeys(wKeys);
    this.setState(wKeys[e.target.value]);
  };
  // scale layer
  slideZ = (e) => {
    console.log(e.target.value);
    let wKeys = this.props.keys;
    wKeys[this.props.active].layerParams.z = parseInt(e.target.value);
    this.props.editKeys(wKeys);
    this.setState(wKeys[e.target.value]);
  };
  // rotate layer
  slideR = (e) => {
    console.log(e.target.value);
    let wKeys = this.props.keys;
    wKeys[this.props.active].layerParams.r = parseInt(e.target.value);
    this.props.editKeys(wKeys);
    this.setState(wKeys[e.target.value]);
  };
  // opacity layer
  slideO = (e) => {
    console.log(e.target.value);
    let wKeys = this.props.keys;
    wKeys[this.props.active].layerParams.o = parseInt(e.target.value);
    this.props.editKeys(wKeys);
    this.setState(wKeys[e.target.value]);
  };
  // save workingkey
  saveKey = (e) => {
    e.preventDefault();
  };
  //
  resetKey = (e) => {
    e.preventDefault();
  };
  mouser = (e) => {
    this.setState({ drg: !this.state.drg });
  };

  render() {
    console.log(this.props);
    return (
      <Draggable id="drg" disabled={this.state.drg}>
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
                Layer {this.props.workingLayer.layerID} Key {this.props.active}
                {this.props.workingKey.oracle === "no" ||
                this.props.workingKey.oracle === "static" ? (
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
                Position
                <br></br>
                <Input
                  type="text"
                  id="x"
                  value={parseInt(this.state.key.layerParams.x)}
                  style={{
                    width: "50%",

                    float: "left",
                  }}
                  onChange={this.slideX}
                />
                <Input
                  type="text"
                  id="y"
                  value={parseInt(this.state.key.layerParams.y)}
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
                Scale {this.state.key.layerParams.z}
                <CustomInput
                  id="zR"
                  type="range"
                  value={parseInt(this.state.key.layerParams.z)}
                  onChange={this.slideZ}
                  onMouseOver={this.mouser}
                  onMouseLeave={this.mouser}
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
                Rotation {this.state.key.layerParams.r}
                <CustomInput
                  id="rR"
                  type="range"
                  value={parseInt(this.state.key.layerParams.r)}
                  onChange={this.slideR}
                  onMouseOver={this.mouser}
                  onMouseLeave={this.mouser}
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
                Opacity {this.state.key.layerParams.o}
                <CustomInput
                  id="oR"
                  type="range"
                  value={parseInt(this.state.key.layerParams.o)}
                  onChange={this.slideO}
                  onMouseOver={this.mouser}
                  onMouseLeave={this.mouser}
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
  active: state.keyState.active,
});

export default connect(mapStateToProps, {
  addLayer,
  editLayer,
  editKey,
  editKeys,
  saveKeys,
  saveKey,
  resetKey,
})(ToolBox);
