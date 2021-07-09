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
import {
  editKey,
  saveKey,
  resetKey,
  updateKey,
  activeKey,
} from "../../action/keyActions";
import { deleteLayer, editLayer, updateLayer } from "../../action/layerActions";
// class definition
class MediaPreview extends Component {
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    workingKey: PropTypes.object,
    coloris: PropTypes.object,
    layers: PropTypes.array,
    deleteLayer: PropTypes.func,
    editLayer: PropTypes.func,
    updateLayer: PropTypes.func,
    editKey: PropTypes.func,
    saveKey: PropTypes.func,
    updateKey: PropTypes.func,
    resetKey: PropTypes.func,
    active: PropTypes.number,
    keys: PropTypes.array,
  };
  state = this.props.keys[this.props.active];

  handleStop = (e) => {
    // GET drag X position relative to screen
    const newX =
      e.clientX -
      (window.innerWidth - document.getElementById("screen").offsetWidth) / 2 -
      (e.layerX + 18);
    // GET drag X position relative to screen
    const newY = e.clientY - (e.layerY + 322 - window.pageYOffset);
    let wKey = this.props.workingKey;
    wKey.layerParams.x = newX;
    wKey.layerParams.y = newY;
    this.props.editKey(wKey);
    console.log(wKey);
  };
  render() {
    const keyZero = this.props.keys[this.props.active];
    const keyActive = {
      position: "absolute",
      left: `${parseInt(keyZero.layerParams.x) + 5}%`,
      top: `${parseInt(keyZero.layerParams.y) + 5}%`,
      fontSize: `${keyZero.layerParams.z / 20}em`,
      height:
        this.props.workingPYE.formatX !== 8
          ? `${keyZero.layerParams.z}%`
          : "auto",
      width:
        this.props.workingPYE.formatX === 8 ||
        this.props.workingLayer.layerType.name !== "typo"
          ? `${keyZero.layerParams.z}%`
          : "auto",
      transform: `rotate(${keyZero.layerParams.r}deg)`,
      color: "none",
      borderColor: "none",
      border: `${0}px solid`,
      opacity:
        keyZero.keyID === this.props.active ? keyZero.layerParams.o / 100 : 0.3,
      zIndex: keyZero.keyID === this.props.active ? 100 : keyZero.keyID,
    };
    const nowKey = 0;
    const display = this.props.layers.filter(
      (layer) => parseInt(layer.layerID) !== 0
    );

    return (
      <div style={{ width: "820px", height: "820px", margin: "0px auto" }}>
        {this.props.workingKey.edit ? (
          <Toolbox style={{ width: "260px" }} />
        ) : null}
        <div
          id="md-screen"
          style={{
            background: "white",

            backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
            width: this.props.workingPYE.formatX * 100,

            height: this.props.workingPYE.formatY * 100,
            overflow: "hidden",
            position: "relative",
            top: "10px",
            left: (820 - this.props.workingPYE.formatX * 100) / 2,
            marginBottom: "20px",
          }}
        >
          {display.map((layer) =>
            parseInt(layer.layerID) ===
            parseInt(this.props.keys[this.props.active].layerID) ? (
              // ACTIVE LAYER
              layer.layerType === "no" ? null : layer.layerType ===
                "empty" ? null : layer.layerType === "form" ? (
                <img src={layer.layerFS.url} alt="" style={keyActive} />
              ) : layer.layerType === "img" ? (
                <img src={layer.layerFS.url} alt="" style={keyActive} />
              ) : layer.layerType === "typo" ? (
                <div style={keyActive}>{layer.layerFS.text}</div>
              ) : layer.layerType === "audio" ? (
                <audio src={layer.layerFS.url}></audio>
              ) : layer.layerType === "video" ? (
                <video src={layer.layerFS.url}></video>
              ) : null
            ) : // INACTIVE LAYER GRAB KEYS FROM LAYERSTATE
            layer.layerType === "no" ? null : layer.layerType ===
              "empty" ? null : layer.layerType === "form" ? (
              <img
                src={layer.layerFS.url}
                alt=""
                style={{
                  position: "absolute",
                  left: `${parseInt(layer.keys[nowKey].layerParams.x) + 5}%`,
                  top: `${parseInt(layer.keys[nowKey].layerParams.y) + 5}%`,
                  height:
                    this.props.workingPYE.formatX !== 900
                      ? `${layer.keys[nowKey].layerParams.z}%`
                      : "auto",
                  width:
                    this.props.workingPYE.formatX === 900
                      ? `${layer.keys[nowKey].layerParams.z}%`
                      : "auto",
                  transform: `rotate(${layer.keys[nowKey].layerParams.r}deg)`,

                  opacity: 0.3,
                  zIndex: layer.keys[nowKey].keyID,
                }}
              />
            ) : layer.layerType === "img" ? (
              <img
                src={layer.layerFS.url}
                alt=""
                style={{
                  position: "absolute",
                  left: `${parseInt(layer.keys[nowKey].layerParams.x) + 5}%`,
                  top: `${parseInt(layer.keys[nowKey].layerParams.y) + 5}%`,
                  height:
                    this.props.workingPYE.formatX !== 900
                      ? `${layer.keys[nowKey].layerParams.z}%`
                      : "auto",
                  width:
                    this.props.workingPYE.formatX === 900
                      ? `${layer.keys[nowKey].layerParams.z}%`
                      : "auto",
                  transform: `rotate(${layer.keys[nowKey].layerParams.r}deg)`,
                  opacity: 0.3,
                  zIndex: layer.keys[nowKey].keyID,
                }}
              />
            ) : layer.layerType === "typo" ? (
              <b
                style={{
                  position: "absolute",
                  left: `${parseInt(layer.keys[nowKey].layerParams.x) + 5}%`,
                  top: `${parseInt(layer.keys[nowKey].layerParams.y) + 5}%`,
                  height: "auto",
                  width: "auto",
                  fontSize: `${layer.keys[nowKey].layerParams.z / 20}em`,
                  transform: `rotate(${layer.keys[nowKey].layerParams.r}deg)`,
                  color: "none",
                  borderColor: "none",
                  border: `${0}px solid`,
                  opacity: 0.3,
                  zIndex: layer.keys[nowKey].keyID,
                }}
              >
                {layer.layerFS.text}
              </b>
            ) : layer.layerType === "audio" ? (
              <audio src={layer.layerFS.url}></audio>
            ) : layer.layerType === "video" ? (
              <video src={layer.layerFS.url}></video>
            ) : null
          )}
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
  keys: state.keyState.keys,
  active: state.keyState.active,
});

export default connect(mapStateToProps, {
  deleteLayer,
  editLayer,
  updateLayer,
  editKey,
  saveKey,
  resetKey,
  updateKey,
})(MediaPreview);
