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
import { Button } from "reactstrap";
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
      <div className="alert alert-success" style={{ width: "150px" }}>
        {this.props.workingLayer.layerType !== "audio" ||
        this.props.workingLayer.layerType !== "empty" ||
        this.props.workingLayer.layerType !== "video" ? (
          <div>
            <div className="btn" style={{ float: "left" }}>
              {`x ${this.props.workingLayer.layerParams.x} y ${this.props.workingLayer.layerParams.y}
              Position`}
            </div>
            <div className="btn" style={{ float: "left" }}>
              Scale
            </div>
            <div className="btn" style={{ float: "left" }}>
              Rotation
            </div>
            <div className="btn" style={{ float: "left" }}>
              Opacity
            </div>
            {this.props.workingLayer.layerType === "typo" ||
            this.props.workingLayer.layerType === "svg" ? (
              <div className="btn" style={{ float: "left" }}>
                Color
              </div>
            ) : null}
            {this.props.workingLayer.layerType === "typo" ||
            this.props.workingLayer.layerType === "svg" ? (
              <div className="btn" style={{ float: "left" }}>
                Border
              </div>
            ) : null}
            {this.props.workingLayer.layerType === "typo" ||
            this.props.workingLayer.layerType === "svg" ? (
              <div className="btn" style={{ float: "left" }}>
                BorderColor
              </div>
            ) : null}
          </div>
        ) : null}
        {this.props.workingLayer.layerType === "audio" ||
        this.props.workingLayer.layerType === "video" ? (
          <div>
            <div className="btn" style={{ float: "left" }}>
              lCut
            </div>
            <div className="btn" style={{ float: "left" }}>
              rCut
            </div>
            <div className="btn" style={{ float: "left" }}>
              Play
            </div>
            <div className="btn" style={{ float: "left" }}>
              Pause
            </div>
            <div className="btn" style={{ float: "left" }}>
              Stop
            </div>
            <div className="btn" style={{ float: "left" }}>
              Loop
            </div>
            <div className="btn" style={{ float: "left" }}>
              Go2Play
            </div>
            <div className="btn" style={{ float: "left" }}>
              Go2Pause
            </div>
            <div className="btn" style={{ float: "left" }}>
              Volume
            </div>
            <div className="btn" style={{ float: "left" }}>
              Pan
            </div>
          </div>
        ) : null}

        <div>
          <Button>Save</Button>
        </div>
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
