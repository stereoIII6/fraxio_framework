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
import Draggable from "react-draggable";
import { Button, Input, InputGroup, CustomInput } from "reactstrap";
import { editFrame } from "../../action/pyeActions";
// class definition
class ToolBox extends Component {
  // proptype definition
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
    editFrame: PropTypes.func,
  };
  state = {
    drg: false,
    key: this.props.PYE.layers[this.props.activeL].keys[this.props.activeK],
    cols: this.props.cols,
  };

  // move layer x position
  slideX = (e) => {
    // console.log(e.target.value);
    let wKeys = this.props.PYE.layers[this.props.activeL].keys;
    console.log(
      "before check wkeys // ",
      wKeys,
      "range value // ",
      e.target.value
    );
    // find index for key ID
    let y = 0;
    let i = null;
    for (y; y < wKeys.length; y++) {
      console.log("at", y);
      if (wKeys[y].keyID === this.props.activeK) i = y;
    }
    console.log("after", i);
    wKeys[i].keyParams.x = parseInt(e.target.value);
    console.log(
      "after check wkeys // ",
      wKeys,
      "range value // ",
      e.target.value
    );
    let layers = this.props.PYE.layers;
    layers[this.props.activeL].keys = wKeys;
    this.props.editFrame(layers);
    this.setState({ key: wKeys[i] });
  };
  // move layer y position
  slideY = (e) => {
    // console.log(e.target.value);
    let wKeys = this.props.PYE.layers[this.props.activeL].keys;
    console.log(
      "before check wkeys // ",
      wKeys,
      "range value // ",
      e.target.value
    );
    // find index for key ID
    let y = 0;
    let i = null;
    for (y; y < wKeys.length; y++) {
      console.log("at", y);
      if (wKeys[y].keyID === this.props.activeK) i = y;
    }
    console.log("after", i);
    wKeys[i].keyParams.y = parseInt(e.target.value);
    console.log(
      "after check wkeys // ",
      wKeys,
      "range value // ",
      e.target.value
    );
    let layers = this.props.PYE.layers;
    layers[this.props.activeL].keys = wKeys;
    this.props.editFrame(layers);
    this.setState({ key: wKeys[i] });
  };
  // scale layer
  slideZ = (e) => {
    // console.log(e.target.value);
    let wKeys = this.props.PYE.layers[this.props.activeL].keys;
    console.log(
      "before check wkeys // ",
      wKeys,
      "range value // ",
      e.target.value
    );
    // find index for key ID
    let y = 0;
    let i = null;
    for (y; y < wKeys.length; y++) {
      console.log("at", y);
      if (wKeys[y].keyID === this.props.activeK) i = y;
    }
    console.log("after", i);
    wKeys[i].keyParams.z = parseInt(e.target.value);
    console.log(
      "after check wkeys // ",
      wKeys,
      "range value // ",
      e.target.value
    );
    let layers = this.props.PYE.layers;
    layers[this.props.activeL].keys = wKeys;
    this.props.editFrame(layers);
    this.setState({ key: wKeys[i] });
  };
  // rotate layer
  slideR = (e) => {
    // console.log(e.target.value);
    let wKeys = this.props.PYE.layers[this.props.activeL].keys;
    console.log(
      "before check wkeys // ",
      wKeys,
      "range value // ",
      e.target.value
    );
    // find index for key ID
    let y = 0;
    let i = null;
    for (y; y < wKeys.length; y++) {
      console.log("at", y);
      if (wKeys[y].keyID === this.props.activeK) i = y;
    }
    console.log("after", i);
    wKeys[i].keyParams.r = parseInt(e.target.value);
    console.log(
      "after check wkeys // ",
      wKeys,
      "range value // ",
      e.target.value
    );
    let layers = this.props.PYE.layers;
    layers[this.props.activeL].keys = wKeys;
    this.props.editFrame(layers);
    this.setState({ key: wKeys[i] });
  };
  // opacity layer
  slideO = (e) => {
    // console.log(e.target.value);
    let wKeys = this.props.PYE.layers[this.props.activeL].keys;
    console.log(
      "before check wkeys // ",
      wKeys,
      "range value // ",
      e.target.value
    );
    // find index for key ID
    let y = 0;
    let i = null;
    for (y; y < wKeys.length; y++) {
      console.log("at", y);
      if (wKeys[y].keyID === this.props.activeK) i = y;
    }
    console.log("after", i);
    wKeys[i].keyParams.o = parseInt(e.target.value);
    console.log(
      "after check wkeys // ",
      wKeys,
      "range value // ",
      e.target.value
    );
    let layers = this.props.PYE.layers;
    layers[this.props.activeL].keys = wKeys;
    this.props.editFrame(layers);
    this.setState({ key: wKeys[i] });
  };

  // save workingkey
  goQuit = (e) => {
    e.preventDefault();
  };
  goSave2Layer = (e) => {
    e.preventDefault();
  };
  mouser = (e) => {
    this.setState({ drg: !this.state.drg });
  };
  kIndex = () => {
    let x = null;
    for (
      let i = 0;
      i < this.props.PYE.layers[this.props.activeL].keys.length;
      i++
    ) {
      if (
        this.props.PYE.layers[this.props.activeL].keys[i].keyID ===
        this.props.activeK
      )
        x = i;
    }
    return x;
  };
  render() {
    console.log(this.props);
    const kIndx = this.kIndex();
    const { bg1, bg2, bg3, c1, c2, c3, w, b, r } = this.state.cols;
    return (
      <Draggable id="drg" disabled={this.state.drg}>
        <div
          className="alert alert-success"
          style={{
            width: "260px",
            padding: "10px",
            position: "absolute",
            zIndex: 100,
            background: c3,
            color: bg3,
            top: "400px",
            left: "20px",
          }}
        >
          {this.props.PYE.layers[this.props.activeL].layerType !== "audio" ||
          this.props.PYE.layers[this.props.activeL].layerType !== "empty" ||
          this.props.PYE.layers[this.props.activeL].layerType !== "video" ? (
            <div>
              <h3>
                {" "}
                Layer {this.props.activeL} Key {this.props.activeK} Spot {kIndx}
                {this.props.PYE.layers[this.props.activeL].layerOracle.name !==
                  "no" ||
                this.props.PYE.layers[this.props.activeL].layerOracle.name !==
                  "static" ? (
                  <InputGroup
                    style={{
                      width: "240px",
                      background: bg1,
                      color: bg3,
                    }}
                  >
                    <Input
                      type="text"
                      placeholder={
                        this.props.PYE.layers[this.props.activeL].layerOracle
                          .name
                      }
                      disabled
                      style={{
                        width: "30px",
                        fontSize: "0.5em",
                      }}
                    />
                    <Input
                      type="text"
                      defaultValue={
                        this.props.PYE.layers[this.props.activeL].layerOracle
                          .starter
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
                  background: bg1,
                  color: bg3,
                }}
              >
                Position - x:{" "}
                {parseInt(
                  this.props.PYE.layers[this.props.activeL].keys[kIndx]
                    .keyParams.x
                )}{" "}
                y:{" "}
                {parseInt(
                  this.props.PYE.layers[this.props.activeL].keys[kIndx]
                    .keyParams.y
                )}
                <br></br>
                <CustomInput
                  id="xR"
                  type="range"
                  value={parseInt(
                    this.props.PYE.layers[this.props.activeL].keys[kIndx]
                      .keyParams.x
                  )}
                  onChange={this.slideX}
                  onMouseOver={this.mouser}
                  onMouseLeave={this.mouser}
                  max={100}
                  min={-100}
                />
                <CustomInput
                  id="yR"
                  type="range"
                  value={parseInt(
                    this.props.PYE.layers[this.props.activeL].keys[kIndx]
                      .keyParams.y
                  )}
                  onChange={this.slideY}
                  onMouseOver={this.mouser}
                  onMouseLeave={this.mouser}
                  max={100}
                  min={-100}
                />
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
                }}
              >
                Scale{" "}
                {
                  this.props.PYE.layers[this.props.activeL].keys[kIndx]
                    .keyParams.z
                }
                <CustomInput
                  id="zR"
                  type="range"
                  value={parseInt(
                    this.props.PYE.layers[this.props.activeL].keys[kIndx]
                      .keyParams.z
                  )}
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
                  background: bg1,
                  color: bg3,
                }}
              >
                Rotation{" "}
                {
                  this.props.PYE.layers[this.props.activeL].keys[kIndx]
                    .keyParams.r
                }
                <CustomInput
                  id="rR"
                  type="range"
                  value={parseInt(
                    this.props.PYE.layers[this.props.activeL].keys[kIndx]
                      .keyParams.r
                  )}
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
                  background: bg1,
                  color: bg3,
                }}
              >
                Opacity{" "}
                {
                  this.props.PYE.layers[this.props.activeL].keys[kIndx]
                    .keyParams.o
                }
                <CustomInput
                  id="oR"
                  type="range"
                  value={parseInt(
                    this.props.PYE.layers[this.props.activeL].keys[kIndx]
                      .keyParams.o
                  )}
                  onChange={this.slideO}
                  onMouseOver={this.mouser}
                  onMouseLeave={this.mouser}
                  max={100}
                  min={0}
                />
              </div>
              {this.props.PYE.layers[this.props.activeL].layerType === "typo" ||
              this.props.PYE.layers[this.props.activeL].layerType === "svg" ? (
                <div
                  className="btn"
                  style={{
                    width: "100%",
                    background: bg1,
                    color: bg3,
                  }}
                >
                  Color
                </div>
              ) : null}
              {this.props.PYE.layers[this.props.activeL].layerType === "typo" ||
              this.props.PYE.layers[this.props.activeL].layerType === "svg" ? (
                <div
                  className="btn"
                  style={{
                    width: "100%",
                    background: bg1,
                    color: bg3,
                  }}
                >
                  Border
                </div>
              ) : null}
              {this.props.PYE.layers[this.props.activeL].layerType === "typo" ||
              this.props.PYE.layers[this.props.activeL].layerType === "svg" ? (
                <div className="btn" style={{ width: "100%" }}>
                  BorderColor
                </div>
              ) : null}
            </div>
          ) : null}
          {this.props.PYE.layers[this.props.activeL].layerType === "audio" ||
          this.props.PYE.layers[this.props.activeL].layerType === "video" ? (
            <div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
                }}
              >
                lCut
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
                }}
              >
                rCut
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
                }}
              >
                Play
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
                }}
              >
                Pause
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
                }}
              >
                Stop
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
                }}
              >
                Loop
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
                }}
              >
                Go2Play
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
                }}
              >
                Go2Pause
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
                }}
              >
                Volume
              </div>
              <div
                className="btn"
                style={{
                  width: "100%",
                  background: bg1,
                  color: bg3,
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
              background: bg1,
              color: bg3,
            }}
          >
            <div
              className="btn"
              id={this.props.active}
              style={{
                width: "70%",
                background: c1,
                color: bg2,
              }}
              onClick={this.goSave2Layer}
            >
              Save
            </div>
            <div
              className="btn"
              id={this.props.active}
              style={{
                width: "30%",
                background: bg2,
                color: c1,
                display: "none",
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
  pyes: state.pyeState.pyes,
  bake: state.pyeState.bake,
  slice: state.pyeState.slice,
  activeL: state.pyeState.activeL,
  frame: state.pyeState.frame,
  activeK: state.pyeState.activeK,
  stateK: state.pyeState.stateK,
  pyeDrafts: state.pyeState.pyeDrafts,
  pyeSamples: state.pyeState.pyeSamples,
  PYE: state.pyeState.PYE,
  INIT: state.pyeState.INIT,
  users: state.userState.users,
  cols: state.userState.cols,
});

export default connect(mapStateToProps, { editFrame })(ToolBox);
