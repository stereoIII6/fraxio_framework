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
//          @id :: FR-90405                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90405 is Media Preview for the React Frontend.           //
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
import Toolbox from "./Toolbox";
import {} from "../../action/pyeActions";
// class definition
class MediaPreview extends Component {
  static propTypes = {
    bake: PropTypes.bool,
    slice: PropTypes.bool,
    activeL: PropTypes.number,
    frame: PropTypes.bool,
    kopn: PropTypes.bool,
    activeK: PropTypes.number,
    stateK: PropTypes.object,
    pyes: PropTypes.array,
    pyeDrafts: PropTypes.array,
    pyeSamples: PropTypes.array,
    users: PropTypes.array,
    cols: PropTypes.object,
    PYE: PropTypes.object,
    INIT: PropTypes.object,
  };
  state = {
    cols: this.props.cols,
  };

  render() {
    console.log(this.state.access);
    const { bg1, bg2, bg3, c1, c2, c3, w, b, r } = this.state.cols;
    let keyINX = 0;
    for (let i = 0; i < this.props.PYE.layers[this.props.activeL].keys; i++) {
      if (
        this.props.PYE.layers[this.props.activeL].keys[i].keyID ===
        this.props.activeK
      ) {
        keyINX = i;
      }
    }
    console.log("keyINX // ", keyINX);
    const keyZero = this.props.PYE.layers[this.props.activeL].keys[keyINX];
    const layerZero = this.props.PYE.layers[this.props.activeL];
    console.log(keyZero);
    const keyActive = {
      position: "absolute",
      left: `${parseInt(keyZero.keyParams.x) + 5}%`,
      top: `${parseInt(keyZero.keyParams.y) + 5}%`,
      fontSize: `${keyZero.keyParams.z / 20}em`,
      height:
        this.props.PYE.format.x !== 8 ? `${keyZero.keyParams.z}%` : "auto",
      width:
        this.props.PYE.format.x === 8 || layerZero.layerType.name !== "typo"
          ? `${keyZero.keyParams.z}%`
          : "auto",
      transform: `rotate(${keyZero.keyParams.r}deg)`,
      color: "none",
      borderColor: "none",
      border: `${0}px solid`,
      opacity:
        keyZero.keyID === this.props.activeK ? keyZero.keyParams.o / 100 : 0.3,
      zIndex: keyZero.keyID === this.props.activeK ? 100 : keyZero.keyID + 11,
    };
    const nowKey = this.props.activeK || 0;
    const display = this.props.PYE.layers.filter(
      (layer) => parseInt(layer.layerID) !== 0
    );

    return (
      <div
        style={{
          width: "820px",
          height: `${this.props.PYE.format.y}20px`,
          margin: "0px auto",
        }}
      >
        {this.props.kopn ? <Toolbox style={{ width: "260px" }} /> : null}
        <div
          id="md-screen"
          style={{
            background: "white",

            backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
            width: this.props.PYE.format.x * 100,

            height: this.props.PYE.format.y * 100,
            overflow: "hidden",
            position: "relative",
            top: "10px",
            left: (820 - this.props.PYE.format.x * 100) / 2,
            marginBottom: "20px",
          }}
        >
          {// console.log(this.props.workingLayer.keys, this.props.active),
          display.map((layer) =>
            parseInt(layer.layerID) === parseInt(this.props.activeL) ? (
              // ACTIVE LAYER
              layer.layerType === "no" ? null : layer.layerType ===
                "empty" ? null : layer.layerType === "form" ? (
                <img
                  key={layer.layerID}
                  src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
                  alt=""
                  style={keyActive}
                />
              ) : layer.layerType === "img" ? (
                <img
                  key={layer.layerID}
                  src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
                  alt=""
                  style={keyActive}
                />
              ) : layer.layerType === "typo" ? (
                <div style={keyActive} key={layer.layerID}>
                  {layer.layerData.text}
                </div>
              ) : layer.layerType === "audio" ? (
                <audio
                  key={layer.layerID}
                  src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
                ></audio>
              ) : layer.layerType === "video" ? (
                <video
                  key={layer.layerID}
                  src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
                ></video>
              ) : null
            ) : // INACTIVE LAYER GRAB KEYS FROM LAYERSTATE
            layer.layerType === "no" ? null : layer.layerType ===
              "empty" ? null : layer.layerType === "form" ? (
              <img
                key={layer.layerID}
                src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
                alt=""
                style={{
                  position: "absolute",
                  left: `${parseInt(layer.keys[nowKey].keyParams.x) + 5}%`,
                  top: `${parseInt(layer.keys[nowKey].keyParams.y) + 5}%`,
                  height:
                    this.props.PYE.format.x !== 900
                      ? `${layer.keys[nowKey].keyParams.z}%`
                      : "auto",
                  width:
                    this.props.PYE.format.x === 900
                      ? `${layer.keys[nowKey].keyParams.z}%`
                      : "auto",
                  transform: `rotate(${layer.keys[nowKey].keyParams.r}deg)`,

                  opacity: 1,
                  zIndex: layer.keys[nowKey].keyID,
                }}
              />
            ) : layer.layerType === "img" ? (
              <img
                key={layer.layerID}
                src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
                alt=""
                style={{
                  position: "absolute",
                  left: `${parseInt(layer.keys[nowKey].keyParams.x) + 5}%`,
                  top: `${parseInt(layer.keys[nowKey].keyParams.y) + 5}%`,
                  height:
                    this.props.PYE.format.x !== 900
                      ? `${layer.keys[nowKey].keyParams.z}%`
                      : "auto",
                  width:
                    this.props.PYE.format.x === 900
                      ? `${layer.keys[nowKey].keyParams.z}%`
                      : "auto",
                  transform: `rotate(${layer.keys[nowKey].keyParams.r}deg)`,
                  opacity: 0.3,
                  zIndex: layer.keys[nowKey].keyID,
                }}
              />
            ) : layer.layerType === "typo" ? (
              <b
                key={layer.layerID}
                style={{
                  position: "absolute",
                  left: `${parseInt(layer.keys[nowKey].keyParams.x) + 5}%`,
                  top: `${parseInt(layer.keys[nowKey].keyParams.y) + 5}%`,
                  height: "auto",
                  width: "auto",
                  fontSize: `${layer.keys[nowKey].keyParams.z / 20}em`,
                  transform: `rotate(${layer.keys[nowKey].keyParams.r}deg)`,
                  color: "none",
                  borderColor: "none",
                  border: `${0}px solid`,
                  opacity: 0.3,
                  zIndex: layer.keys[nowKey].keyID,
                }}
              >
                {layer.layerData.text}
              </b>
            ) : layer.layerType === "audio" ? (
              <audio
                key={layer.layerID}
                src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
              ></audio>
            ) : layer.layerType === "video" ? (
              <video
                key={layer.layerID}
                src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
              ></video>
            ) : null
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  pyes: state.pyeState.pyes,
  bake: state.pyeState.bake,
  slice: state.pyeState.slice,
  activeL: state.pyeState.activeL,
  frame: state.pyeState.frame,
  kopn: state.pyeState.kopn,
  activeK: state.pyeState.activeK,
  stateK: state.pyeState.stateK,
  pyeDrafts: state.pyeState.pyeDrafts,
  pyeSamples: state.pyeState.pyeSamples,
  PYE: state.pyeState.PYE,
  INIT: state.pyeState.INIT,
  users: state.userState.users,
  cols: state.userState.cols,
});

export default connect(mapStateToProps, {})(MediaPreview);
