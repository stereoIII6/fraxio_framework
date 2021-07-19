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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {} from "../../action/pyeActions";
class OraclePreview extends Component {
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
  };

  state = {};
  fiindOracles = () => {
    const layerCount = this.props.PYE.layers.length;
    let oracleInfo = [];
    for (let i = 0; i < layerCount; i++) {
      if (
        this.props.PYE.layers[i].layerOracle.name !== "no" ||
        this.props.PYE.layers[i].layerOracle.name !== "static"
      ) {
        oracleInfo[i] = {
          layerID: this.props.PYE.layers[i].layerID,
          type: "static",
          keys: [],
        };
      } else if (
        this.props.PYE.layers[i].layerOracle.name !== "crypto" ||
        this.props.PYE.layers[i].layerOracle.name !== "currency" ||
        this.props.PYE.layers[i].layerOracle.name !== "commodity"
      ) {
        const keyCount = this.props.PYE.layers[i].keys.length;
        let keyInfo = [];
        for (let j = 0; j < keyCount; j++) {
          keyInfo[j] = {
            keyID: this.props.PYE.layers[i].keys[j].keyID,
            keyVal: this.props.PYE.layers[i].keys[j].keyParams.v,
          };
        }
        oracleInfo[i] = {
          layerID: this.props.PYE.layers[i].layerID,
          type: "",
          keys: keyInfo,
        };
      }
      return oracleInfo;
    }
  };
  render() {
    const oI = this.fiindOracles();
    return (
      <div
        style={{
          width: "820px",
          height: `${this.props.PYE.format.y}20px`,
          margin: "0px auto",
        }}
      >
        <div
          id="md-screen"
          style={{
            background: "black",

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
          {this.props.PYE.layers.map((layer) =>
            layer.layerID === 0 ? null : layer.layerOracle.type === "static" ? (
              // STATIC LAYER
              layer.layerType === "empty" ? null : layer.layerType === // handle empty layer types
                "text" ? (
                <div style={{ fontFamily: layer.layerData.font }}>
                  {layer.layerData.text}
                </div> // handle text layer types
              ) : (
                <img
                  src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
                  alt=""
                  style={{
                    position: "absolute",
                    width:
                      this.props.PYE.format.x > this.props.PYE.format.y
                        ? `${layer.keys[0].keyParams.z}%`
                        : "auto",
                    height:
                      this.props.PYE.format.x > this.props.PYE.format.y
                        ? "auto"
                        : `${layer.keys[0].keyParams.z}%`,
                    opacity: layer.keys[0].keyParams.o,
                    transform: `rotate(${layer.keys[0].keyParams.r}deg)`,
                    left: `${parseInt(layer.keys[0].keyParams.x) + 5}%`,
                    top: `${parseInt(layer.keys[0].keyParams.y) + 5}%`,
                  }}
                /> // handle image layer types
              )
            ) : // ORACLE LAYER
            layer.layerType === "empty" ? null : layer.layerType === "text" ? ( // handle empty layer types
              <div style={{ fontFamily: layer.layerData.font }}>
                {layer.layerData.text}
              </div> // handle text layer types
            ) : (
              <img
                src={`https://ipfs.io/ipfs/${layer.layerData.file}`}
                alt=""
                style={{
                  position: "absolute",
                  width:
                    this.props.PYE.format.x > this.props.PYE.format.y
                      ? `${layer.keys[0].keyParams.z}%`
                      : "auto",
                  height:
                    this.props.PYE.format.x > this.props.PYE.format.y
                      ? "auto"
                      : `${layer.keys[0].keyParams.z}%`,
                  opacity: layer.keys[0].keyParams.o,
                  transform: `rotate(${layer.keys[0].keyParams.r}deg)`,
                  left: `${parseInt(layer.keys[0].keyParams.x) + 5}%`,
                  top: `${parseInt(layer.keys[0].keyParams.y) + 5}%`,
                }}
              />
            )
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
  activeK: state.pyeState.activeK,
  stateK: state.pyeState.stateK,
  pyeDrafts: state.pyeState.pyeDrafts,
  pyeSamples: state.pyeState.pyeSamples,
  PYE: state.pyeState.PYE,
  INIT: state.pyeState.INIT,
  users: state.userState.users,
  cols: state.userState.cols,
});

export default connect(mapStateToProps, {})(OraclePreview);
