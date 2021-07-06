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
//          @id :: FR-90108                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90108 is Layer Input for the React Frontend.             //
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
  getPyeAssets,
  getPyeData,
  createPye,
  discardPye,
} from "../../action/pyeActions";
import { discardLayers } from "../../action/layerActions";
import { Button } from "reactstrap";
import Layers from "./Layers";
// class definition
class MaskTwo extends Component {
  // redux state import
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    workingKey: PropTypes.object,
    getPyeAssets: PropTypes.func,
    getPyeData: PropTypes.func,
    createPye: PropTypes.func,
    discardPye: PropTypes.func,
    discardLayers: PropTypes.func,
    layers: PropTypes.array,
    keys: PropTypes.array,
  };
  // local state setup
  state = {};

  // handler on discard all layers
  onDiscard = (e) => {
    e.preventDefault();
    this.props.discardPye();
    this.props.discardLayers();
  };
  // handler on save
  onSave = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  render() {
    return this.props.workingPYE.booly && !this.props.workingKey.booly ? (
      <div>
        <h1 className="m-0 p-0">
          {this.props.workingPYE.name} Layer Editor
          <Button
            style={{ color: "tomato", float: "right" }}
            onClick={this.onDiscard}
          >
            DISCARD
          </Button>
          <Button
            style={{ color: "lime", float: "right", marginRight: "1em" }}
            onClick={this.onSave}
          >
            SAVE DRAFT [3 MLQ]
          </Button>
          <Button
            style={{ color: "lime", float: "right", marginRight: "1em" }}
            onClick={this.onMint}
          >
            MINT [15 MLQ]
          </Button>
        </h1>
        <hr></hr>
        {/* IMPORT LAYERS MODULE */}
        <Layers />
      </div>
    ) : null;
  }
}
// mapping redux state to local props
const mapStateToProps = (state) => ({
  workingPYE: state.pyeState.workingPYE,
  workingLayer: state.layerState.workingLayer,
  workingKey: state.keyState.workingKey,
  layers: state.layerState.layers,
  keys: state.keyState.keys,
});

export default connect(mapStateToProps, {
  getPyeAssets,
  getPyeData,
  createPye,
  discardPye,
  discardLayers,
})(MaskTwo);
