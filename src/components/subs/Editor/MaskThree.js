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
//          @id :: FR-90207                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90207 is Layer Input for the React Frontend.             //
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
import { getPyeAssets, getPyeData, createPye } from "../../action/pyeActions";
import { quitWork } from "../../action/keyActions";
import { Button } from "reactstrap";
import KeyFrames from "./KeyFrames";
import MediaPreview from "./MediaPreview";
import ToolBox from "./Toolbox";
class MaskThree extends Component {
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    workingKey: PropTypes.object,
    keys: PropTypes.array,
  };
  state = {};
  goQuit = (e) => {
    e.preventDefault();
    this.props.quitWork();
  };
  render() {
    return this.props.workingPYE.booly &&
      this.props.workingLayer.booly &&
      this.props.workingKey.booly ? (
      <div>
        <h1 className="m-0 p-0">
          PYE Keyframe Editor
          <Button
            style={{ color: "tomato", float: "right" }}
            onClick={this.goQuit}
          >
            X
          </Button>
          <Button
            style={{ color: "lime", float: "right", marginRight: "1em" }}
            onClick={this.goQuit}
          >
            RESET
          </Button>
        </h1>
        <hr></hr>
        <MediaPreview />
        <KeyFrames />
      </div>
    ) : null;
  }
}
const mapStateToProps = (state) => ({
  workingPYE: state.pyeState.workingPYE,
  workingLayer: state.layerState.workingLayer,
  workingKey: state.keyState.workingKey,
  keys: state.keyState.keys,
});

export default connect(mapStateToProps, {
  getPyeAssets,
  getPyeData,
  createPye,
  quitWork,
})(MaskThree);
