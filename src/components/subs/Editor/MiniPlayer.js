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
//          The Factory FR-90405 is Mini Player for the React Frontend.           //
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
import Toolbox from "./Toolbox";
import { editKey, saveKey, resetKey, updateKey } from "../../action/keyActions";
import { deleteLayer, editLayer, updateLayer } from "../../action/layerActions";
class MiniPlayer extends Component {
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
  };

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
  update() {
    let xVal = this.props.workingKey.layerParams.x;
    let yVal = this.props.workingKey.layerParams.y;
    console.log("Media // ", this.props.workingKey);
    let z4 = `${(4 / 100) * parseInt(this.props.workingKey.layerParams.z)}em`;
    let z2 = `${(2 / 100) * this.props.workingKey.layerParams.z}em`;
    console.log(z2, z4);
    let keyZero = {
      opacity: this.props.workingKey.layerParams.o / 100,
      height:
        this.props.workingPYE.formatX !== 900
          ? `${this.props.workingKey.layerParams.z}%`
          : "auto",
      width:
        this.props.workingPYE.formatX === 900
          ? `${this.props.workingKey.layerParams.z}%`
          : "auto",
      transform: `rotate(${this.props.workingKey.layerParams.r}deg)`,
      position: "absolute",
      fontSize: this.props.workingKey.booly ? z4 : z2,
      top: this.props.workingKey.booly ? yVal : yVal / 2,
      left: this.props.workingKey.booly ? xVal : xVal / 2,
      fill: this.props.coloris.mint,
    };
    return keyZero;
  }
  render() {
    const keyZero = this.update();
    const layers = this.props.layers.filter(
      (layer) => parseInt(layer.layerID) !== 0
    );
    return (
      <div style={{ width: "820px", height: "820px", margin: "0px auto" }}>
        <div
          id="md-screen"
          style={{
            background: "darkgrey",

            backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
            width: this.props.workingPYE.formatX / 1,
            height: this.props.workingPYE.formatY / 1,
            overflow: "hidden",
            position: "relative",
            top: "10px",
            left: "10px",
            marginBottom: "20px",
          }}
        >
          {/*display.sort((a, b) => b.layerID - a.layerID),*/
          layers.map((layer) =>
            layer.layerType === "img" ? (
              <img
                key={layer.layerID}
                src={layer.layerFS.url}
                style={keyZero}
                alt=""
              />
            ) : layer.layerType === "form" ? (
              <img
                src={layer.layerFS.url}
                key={layer.layerID}
                style={keyZero}
                alt=""
              />
            ) : layer.layerType === "typo" ? (
              <h1
                key={layer.layerID}
                src={layer.layerFS.url}
                style={keyZero}
                alt=""
              >
                {layer.layerName}
              </h1>
            ) : layer.layerType === "audio" ? (
              <img
                key={layer.layerID}
                src={layer.layerFS.url}
                style={keyZero}
                alt=""
              />
            ) : layer.layerType === "video" ? (
              <img
                key={layer.layerID}
                src={layer.layerFS.url}
                style={keyZero}
                alt=""
              />
            ) : layer.layerType === "empty" ? null : null
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
});

export default connect(mapStateToProps, {
  deleteLayer,
  editLayer,
  updateLayer,
  editKey,
  saveKey,
  resetKey,
  updateKey,
})(MiniPlayer);
