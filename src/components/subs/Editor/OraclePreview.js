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
          keyInfo: [],
        };
      } else if (
        this.props.PYE.layers[i].layerOracle.name !== "crypto" ||
        this.props.PYE.layers[i].layerOracle.name !== "currency" ||
        this.props.PYE.layers[i].layerOracle.name !== "commodity"
      ) {
        const keyCount = this.props.PYE.layers[i].keys.length;
        let keyInfo = [];
        for (let j = 0; j < keyCount; j++) {
          keyInfo[j] = {};
        }
        oracleInfo[i] = {};
      }
    }
  };
  render() {
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
        ></div>
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
