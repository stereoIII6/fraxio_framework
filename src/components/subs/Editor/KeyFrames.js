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
import { setWork, editKey } from "../../action/keyActions";

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
  };
  state = {
    actKey: null,
    zero: {
      keyID: 0,
      layerID: this.props.workingLayer.layerID,
      oracle: this.props.workingLayer.layerOracle,
      oracleState: 100,
      layerParams: {
        x: 0,
        y: 0,
        o: 100,
        r: 0,
        z: 90,
      },
    },
    ups: 1,
    downs: 1,
    display: [
      {
        keyID: 0,
        layerID: this.props.workingLayer.layerID,
        oracle: this.props.workingLayer.layerOracle,
        oracleState: 100,
        layerParams: {
          x: 0,
          y: 0,
          o: 100,
          r: 0,
          z: 90,
        },
      },
    ],
  };
  loadKeys() {}
  addKeyDown = (e) => {
    e.preventDefault();
    console.log("down");
    const newKey = {
      keyID: parseInt(e.target.id) * -1,
      layerID: this.props.workingLayer.layerID,
      oracle: this.props.workingLayer.layerOracle,
      oracleState: 0,
      layerParams: {
        x: 0,
        y: 0,
        o: 100,
        r: 0,
        z: 90,
      },
    };
    this.setState({
      downs: this.state.downs + 1,
      display: [newKey, ...this.state.display],
    });
  };
  addKeyUp = (e) => {
    e.preventDefault();
    console.log("up");
    const newKey = {
      keyID: parseInt(e.target.id),
      layerID: this.props.workingLayer.layerID,
      oracle: this.props.workingLayer.layerOracle,
      oracleState: 0,
      layerParams: {
        x: 0,
        y: 0,
        o: 100,
        r: 0,
        z: 90,
      },
    };
    this.setState({
      ups: this.state.ups + 1,
      display: [...this.state.display, newKey],
    });
  };
  activateKey = (e) => {
    console.log(e.target.id, this.props.workingKey);
    this.setState({ actKey: parseInt(e.target.id) });
    let wKey = this.props.workingKey;
    wKey.keyID = e.target.id;
    wKey.edit = true;
    this.props.editKey(wKey);
  };
  saveKey = (e) => {
    console.log(e.target.id);
    this.setState({ actKey: null });
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginBottom: "2em" }}>
        {this.props.workingKey.edit ? (
          <Toolbox style={{ width: "120px" }} />
        ) : null}
        {this.state.display.length < 9 ? (
          <Button
            className="btn btn-info m-2"
            onClick={this.addKeyDown}
            id={this.state.downs}
          >
            +
          </Button>
        ) : null}
        {this.state.display.length === 1 ? (
          <Button
            className="btn btn-success m-2"
            key={0}
            id={0}
            onClick={this.activateKey}
          >
            Key 0
          </Button>
        ) : (
          this.state.display.map((key) => (
            <Button
              className="btn btn-success m-2"
              key={key.keyID}
              id={key.keyID}
              onClick={this.activateKey}
            >
              {`Key ${key.keyID}`}
            </Button>
          ))
        )}
        {this.state.display.length < 9 ? (
          <Button
            className="btn btn-info m-2"
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
})(KeyFrames);
