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
//          @id :: FR-90972                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-90972 is KeyFrame Editor for the React Frontend.         //
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
import { Button, Input, InputGroup } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Toolbox from "./Toolbox";
// Action Imports
import {
  deleteLayer,
  editLayer,
  loadLayer2work,
} from "../../action/layerActions";
import {
  setWork,
  editKey,
  addKeyUp,
  addKeyDown,
} from "../../action/keyActions";

// Class Keyframes Definition
class KeyFrames extends Component {
  // Importing Proptypes from Redux store
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    workingKey: PropTypes.object,
    coloris: PropTypes.object,
    layers: PropTypes.array,
    keys: PropTypes.array,
    deleteLayer: PropTypes.func,
    editLayer: PropTypes.func,
    loadLayer2work: PropTypes.func,
    setWork: PropTypes.func,
    editKey: PropTypes.func,
    addKeyUp: PropTypes.func,
    addKeyDown: PropTypes.func,
  };
  // set local state
  state = {
    actKey: null,
    keys: [],
    ups: 1,
    downs: 1,
  };

  loadKeys() {}
  // additional key frame to layer negative feedline
  addKeyDown = (e) => {
    e.preventDefault();
    console.log("down");
    const newKey = {
      booly: true,
      edit: true,
      keyID: parseInt(e.target.id) * -1,
      layerID: this.props.workingLayer.layerID,
      oracle: this.props.workingLayer.layerOracle.name,
      oracleState: this.props.workingLayer.layerOracle.oracleState,
      layerParams: {
        x: this.props.workingKey.initKey.layerParams.x,
        y: this.props.workingKey.initKey.layerParams.y,
        o: this.props.workingKey.initKey.layerParams.o,
        r: this.props.workingKey.initKey.layerParams.r,
        z: this.props.workingKey.initKey.layerParams.z,
      },
    };
    let oldWKey = this.props.workingKey;
    oldWKey.keys = [newKey, ...oldWKey.keys];
    this.props.addKeyUp(oldWKey);
    this.setState({
      downs: this.state.downs + 1,
      keys: [newKey, ...this.state.keys],
    });
  };
  // additional key frame to layer positive feedline
  addKeyUp = (e) => {
    e.preventDefault();
    console.log("up");
    const newKey = {
      keys: this.props.workingLayer.keys,
      keyID: parseInt(e.target.id),
      layerID: this.props.workingLayer.layerID,
      oracle: this.props.workingLayer.layerOracle.name,
      oracleState: this.props.workingLayer.layerOracle.oracleState,
      layerParams: {
        x: this.props.workingKey.initKey.layerParams.x,
        y: this.props.workingKey.initKey.layerParams.y,
        o: this.props.workingKey.initKey.layerParams.o,
        r: this.props.workingKey.initKey.layerParams.r,
        z: this.props.workingKey.initKey.layerParams.z,
      },
    };
    let oldWKey = this.props.workingKey;
    oldWKey.keys = [...oldWKey.keys, newKey];
    this.props.addKeyUp(oldWKey);
    this.setState({
      ups: this.state.ups + 1,
      keys: [...this.state.keys, newKey],
    });
  };
  // set key ready to edit
  activateKey = (e) => {
    console.log(e.target.id, this.props.workingKey);
    this.setState({ actKey: parseInt(e.target.id) });
    let wKey = this.props.workingKey;
    wKey.keyID = e.target.id;
    wKey.edit = true;
    this.props.editKey(wKey);
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginBottom: "2em" }}>
        {this.props.workingKey.keys.length < 9 ? (
          <Button
            className="m-2"
            style={{
              background: this.props.coloris.palm,
              color: this.props.coloris.mint,
            }}
            onClick={this.addKeyDown}
            id={this.state.downs}
          >
            +
          </Button>
        ) : null}
        {this.props.workingKey.keys.map((key) => (
          <Button
            className="m-2"
            style={{
              background: this.props.coloris.purple,
              color: this.props.coloris.mint,
            }}
            key={key.keyID}
            id={key.keyID}
            onClick={this.activateKey}
          >
            {`Key ${key.keyID}`}
          </Button>
        ))}
        {this.props.workingKey.keys.length < 9 ? (
          <Button
            className="m-2"
            style={{
              background: this.props.coloris.palm,
              color: this.props.coloris.sky,
            }}
            onClick={this.addKeyUp}
            id={this.state.ups}
          >
            +
          </Button>
        ) : null}
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
  loadLayer2work,
  editLayer,
  setWork,
  editKey,
  addKeyDown,
  addKeyUp,
})(KeyFrames);
