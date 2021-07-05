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
import { Button, Input } from "reactstrap";
class ToolBox extends Component {
  state = {};
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    workingKey: PropTypes.object,
    addLayer: PropTypes.func,
    layers: PropTypes.array,
    coloris: PropTypes.object,
  };
  render() {
    return (
      <div
        className="alert alert-success"
        style={{
          width: "160px",
          padding: "10px",
          position: "absolute",
          top: "400px",
          left: "20px",
        }}
      >
        {this.props.workingLayer.layerType !== "audio" ||
        this.props.workingLayer.layerType !== "empty" ||
        this.props.workingLayer.layerType !== "video" ? (
          <div>
            <h3> Key {this.props.workingKey.kid}</h3>
            <div className="btn btn-info" style={{ width: "100%" }}>
              x<Input type="ruler" value={this.props.workingLayer.formatX} />
              y<Input type="ruler" value={this.props.workingLayer.formatY} />
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Scale
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Rotation
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Opacity
            </div>
            {this.props.workingLayer.layerType === "typo" ||
            this.props.workingLayer.layerType === "svg" ? (
              <div className="btn btn-info" style={{ width: "100%" }}>
                Color
              </div>
            ) : null}
            {this.props.workingLayer.layerType === "typo" ||
            this.props.workingLayer.layerType === "svg" ? (
              <div className="btn btn-info" style={{ width: "100%" }}>
                Border
              </div>
            ) : null}
            {this.props.workingLayer.layerType === "typo" ||
            this.props.workingLayer.layerType === "svg" ? (
              <div className="btn btn-info" style={{ width: "100%" }}>
                BorderColor
              </div>
            ) : null}
          </div>
        ) : null}
        {this.props.workingLayer.layerType === "audio" ||
        this.props.workingLayer.layerType === "video" ? (
          <div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              lCut
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              rCut
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Play
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Pause
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Stop
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Loop
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Go2Play
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Go2Pause
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Volume
            </div>
            <div className="btn btn-info" style={{ width: "100%" }}>
              Pan
            </div>
          </div>
        ) : null}

        <div style={{ width: "100%" }}>
          <div className="btn btn-success" style={{ width: "70%" }}>
            Save
          </div>
          <div className="btn btn-danger" style={{ width: "30%" }}>
            x
          </div>
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

export default connect(mapStateToProps, { addLayer })(ToolBox);
