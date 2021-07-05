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
import Draggable from "react-draggable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editKey, saveKey, resetKey } from "../../action/keyActions";
import { deleteLayer, editLayer, updateLayer } from "../../action/layerActions";
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
    resetKey: PropTypes.func,
  };
  componentDidMount() {
    this.props.updateLayer();
  }
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
    const xVal = this.props.workingKey.layerParams.x;
    const yVal = this.props.workingKey.layerParams.y;
    const keyZero = {
      opacity: 1,
      height: this.props.workingPYE.formatX !== 900 ? "90%" : "auto",
      width: this.props.workingPYE.formatX === 900 ? "90%" : "auto",
      transform: `"rotate(${0}deg)"`,
      position: "absolute",
      fontSize: this.props.workingKey.booly ? "4em" : "2em",
      top: `5%`,
      left: `5%`,
      fill: this.props.coloris.mint,
    };
    const display = this.props.layers.filter(
      (layer) => parseInt(layer.layerID) !== 0
    );
    return (
      <div
        id="md-screen"
        style={{
          background: "white",

          backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
          width: this.props.workingKey.booly
            ? this.props.workingPYE.formatX / 1
            : this.props.workingPYE.formatX / 2,
          height: this.props.workingKey.booly
            ? this.props.workingPYE.formatY / 1
            : this.props.workingPYE.formatY / 2,
          overflow: "hidden",
          position: "relative",
          top: "10px",
          left: this.props.workingKey.booly
            ? `${20 + (800 - this.props.workingPYE.formatX) / 2}px`
            : `${70 + (800 - this.props.workingPYE.formatX) / 4}px`,
          marginBottom: "20px",
        }}
      >
        {/*display.sort((a, b) => b.layerID - a.layerID),*/
        display.map((layer) =>
          layer.layerType === "img" ? (
            layer.layerID === this.props.workingLayer.layerID &&
            this.props.workingKey.booly ? (
              <Draggable
                key={layer.layerID}
                id={layer.layerID}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
              >
                <img
                  key={layer.layerID}
                  src={layer.layerFS.url}
                  style={keyZero}
                  alt=""
                />
              </Draggable>
            ) : (
              <img
                key={layer.layerID}
                src={layer.layerFS.url}
                style={keyZero}
                alt=""
              />
            )
          ) : layer.layerType === "form" ? (
            layer.layerID === this.props.workingLayer.layerID &&
            this.props.workingKey.booly ? (
              <Draggable
                key={layer.layerID}
                id={layer.layerID}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
              >
                <img
                  src={layer.layerFS.url}
                  key={layer.layerID}
                  style={keyZero}
                  alt=""
                />
              </Draggable>
            ) : (
              <img
                src={layer.layerFS.url}
                key={layer.layerID}
                style={keyZero}
                alt=""
              />
            )
          ) : layer.layerType === "typo" ? (
            layer.layerID === this.props.workingLayer.layerID &&
            this.props.workingKey.booly ? (
              <Draggable
                key={layer.layerID}
                id={layer.layerID}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
              >
                <h1
                  key={layer.layerID}
                  src={layer.layerFS.url}
                  style={keyZero}
                  alt=""
                >
                  {layer.layerName}
                </h1>
              </Draggable>
            ) : (
              <h1
                key={layer.layerID}
                src={layer.layerFS.url}
                style={keyZero}
                alt=""
              >
                {layer.layerName}
              </h1>
            )
          ) : layer.layerType === "audio" ? (
            layer.layerID === this.props.workingLayer.layerID &&
            this.props.workingKey.booly ? (
              <Draggable
                key={layer.layerID}
                id={layer.layerID}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
              ></Draggable>
            ) : (
              <img
                key={layer.layerID}
                src={layer.layerFS.url}
                style={keyZero}
                alt=""
              />
            )
          ) : layer.layerType === "video" ? (
            layer.layerID === this.props.workingLayer.layerID &&
            this.props.workingKey.booly ? (
              <Draggable
                key={layer.layerID}
                id={layer.layerID}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
              ></Draggable>
            ) : (
              <img
                key={layer.layerID}
                src={layer.layerFS.url}
                style={keyZero}
                alt=""
              />
            )
          ) : layer.layerType === "empty" ? null : null
        )}
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
  deleteLayer,
  editLayer,
  updateLayer,
  editKey,
  saveKey,
  resetKey,
})(MediaPreview);
