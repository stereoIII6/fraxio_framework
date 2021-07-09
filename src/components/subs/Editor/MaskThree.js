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
import { quitWork, saveKeys2Keys } from "../../action/keyActions";
import { saveKeys2Layer } from "../../action/layerActions";
import { Button } from "reactstrap";
import Toolbox from "./Toolbox";
import KeyFrames from "./KeyFrames";
import MediaPreview from "./MediaPreview";
// class definition
class MaskThree extends Component {
  // import redux state to local props
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    workingKey: PropTypes.object,
    keys: PropTypes.array,
    coloris: PropTypes.object,
    quitWork: PropTypes.func,
    saveKeys2Layer: PropTypes.func,
    saveKeys2Keys: PropTypes.func,
  };
  // set local state
  state = {};

  render() {
    return this.props.workingPYE.booly &&
      this.props.workingLayer.booly &&
      this.props.workingKey.booly ? (
      <div>
        <h1 className="m-0 p-0">
          PYE Keyframe Editor
          <Button
            style={{
              background: this.props.coloris.purple,
              color: this.props.coloris.mint,
              float: "right",
            }}
            onClick={this.goQuit}
          >
            X
          </Button>
          <Button
            style={{
              background: this.props.coloris.palm,
              color: this.props.coloris.sky,
              float: "right",
              marginRight: "1em",
            }}
            onClick={this.goSave2Layer}
          >
            SAVE TO LAYER
          </Button>
        </h1>
        <hr></hr>
        {/* IMPORT KEYFRAMES */}
        <KeyFrames />
        <MediaPreview />
      </div>
    ) : null;
  }
}
const mapStateToProps = (state) => ({
  workingPYE: state.pyeState.workingPYE,
  workingLayer: state.layerState.workingLayer,
  workingKey: state.keyState.workingKey,
  keys: state.keyState.keys,
  coloris: state.layerState.coloris,
});

export default connect(mapStateToProps, {
  getPyeAssets,
  getPyeData,
  createPye,
  quitWork,
  saveKeys2Layer,
  saveKeys2Keys,
})(MaskThree);
