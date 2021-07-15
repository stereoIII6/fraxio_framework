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
import {
  discardFrame,
  resetFrame,
  saveDraft,
  saveSlice,
} from "../../action/pyeActions";
import { Button } from "reactstrap";
import KeyFrames from "./KeyFrames";
import MediaPreview from "./MediaPreview";
// class definition
class MaskThree extends Component {
  // import redux state to local props
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
    discardFrame: PropTypes.func,
    resetFrame: PropTypes.func,
    saveDraft: PropTypes.func,
    saveSlice: PropTypes.func,
  };
  // set local state
  state = {
    cols:
      this.props.lighting === "light"
        ? this.props.cols.light
        : this.props.lighting === "dark"
        ? this.props.cols.dark
        : this.props.lighting === "irie"
        ? this.props.cols.irie
        : this.props.cols.light,
  };
  goQuitKeys = (e) => {
    e.preventDefault();
    let layers = this.props.PYE.layers;
    layers[this.props.activeL].keys = this.props.INIT.layers[0].keys;
    this.props.discardFrame(layers);
  };
  goSaveSlice = (e) => {
    e.preventDefault();
    this.props.saveSlice();
  };
  goResetKeys = (e) => {
    e.preventDefault();
  };
  goSaveDraft = (e) => {
    e.preventDefault();
  };
  render() {
    const { bg1, bg2, bg3, c1, c2, c3, w, b, r } = this.state.cols;
    return (
      <div>
        <h1 className="m-0 p-0">
          PYE Keyframe Editor
          <Button
            style={{
              background: bg2,
              color: c1,
              float: "right",
            }}
            onClick={this.goQuitKeys}
          >
            X
          </Button>
          <Button
            style={{
              background: bg3,
              color: c3,
              float: "right",
              marginRight: "1em",
            }}
            onClick={this.goSaveSlice}
          >
            Save Layer
          </Button>
          <Button
            style={{
              background: bg3,
              color: c3,
              float: "right",
              marginRight: "1em",
            }}
            onClick={this.goSaveKeys}
          >
            Save Draft
          </Button>
        </h1>
        <hr></hr>
        {/* IMPORT KEYFRAMES */}
        <KeyFrames />
        <MediaPreview />
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

export default connect(mapStateToProps, {
  discardFrame,
  resetFrame,
  saveDraft,
  saveSlice,
})(MaskThree);
