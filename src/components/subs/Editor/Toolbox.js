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

import { addLayer } from "../../action/layerActions";
class ToolBox extends Component {
  state = {};
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    addLayer: PropTypes.func,
    layers: PropTypes.array,
    coloris: PropTypes.object,
  };
  render() {
    return (
      <div className="alert alert-success">
        {this.props.workingLayer.layerType !== "audio" ||
        this.props.workingLayer.layerType !== "video" ? (
          <div className="row">
            <div className="col btn">Position</div>
            <div className="col btn">Scale</div>
            <div className="col btn">Rotation</div>
            <div className="col btn">Opacity</div>
            <div className="col btn">Color</div>
            <div className="col btn">Border</div>
            <div className="col btn">BorderColor</div>
          </div>
        ) : null}
        {this.props.workingLayer.layerType === "audio" ||
        this.props.workingLayer.layerType === "video" ? (
          <div className="row">
            <div className="col btn">lCut</div>
            <div className="col btn">rCut</div>
            <div className="col btn">Play</div>
            <div className="col btn">Pause</div>
            <div className="col btn">Stop</div>
            <div className="col btn">Loop</div>
            <div className="col btn">Go2Play</div>
            <div className="col btn">Go2Pause</div>
            <div className="col btn">Volume</div>
            <div className="col btn">Pan</div>
          </div>
        ) : null}
        <hr></hr>
        <div>Keyframe Toolkit</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  workingPYE: state.pyeState.workingPYE,
  workingLayer: state.layerState.workingLayer,
  layers: state.layerState.layers,
  coloris: state.layerState.coloris,
});

export default connect(mapStateToProps, { addLayer })(ToolBox);
