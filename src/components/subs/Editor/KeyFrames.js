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

// Action Imports
import { activateFrame, addFrame } from "../../action/pyeActions";

// Class Keyframes Definition
class KeyFrames extends Component {
  // Importing Proptypes from Redux store
  static propTypes = {
    bake: PropTypes.bool,
    slice: PropTypes.bool,
    activeL: PropTypes.number,
    frame: PropTypes.bool,
    kopn: PropTypes.bool,
    activeK: PropTypes.number,
    stateK: PropTypes.object,
    pyes: PropTypes.array,
    pyeDrafts: PropTypes.array,
    pyeSamples: PropTypes.array,
    users: PropTypes.array,
    cols: PropTypes.object,
    PYE: PropTypes.object,
    INIT: PropTypes.object,
    activateFrame: PropTypes.func,
    addFrame: PropTypes.func,
  };
  // set local state
  state = {
    cols:
      this.props.lighting === "light"
        ? this.props.cols.light
        : this.props.lighting === "dark"
        ? this.props.cols.light
        : this.props.lighting === "irie"
        ? this.props.cols.light
        : this.props.cols.light,
    keys: this.props.PYE.layers[this.props.activeL].keys,
    ups: 1,
    downs: 1,
  };

  loadKeys() {}
  // additional key frame to layer negative feedline
  addKeyDown = (e) => {
    e.preventDefault();
    console.log("down", this.state.downs);
    let newKey = {
      keyID: parseInt(e.target.id) * -1,
      keyParams: this.props.INIT.layers[0].keys[0].keyParams,
    };
    let oldWKey = this.state.keys;
    oldWKey.push(newKey);
    oldWKey.sort((a, b) => a.keyID - b.keyID);
    console.log(oldWKey);
    let layers = this.props.PYE.layers;
    layers[this.props.activeL].keys = oldWKey;
    this.props.addFrame(layers);
    this.setState({
      downs: this.state.downs + 1,
      keys: oldWKey,
    });
  };
  // additional key frame to layer positive feedline
  addKeyUp = (e) => {
    e.preventDefault();
    console.log("up", this.state.ups);
    let newKey = {
      keyID: parseInt(e.target.id),
      keyParams: this.props.INIT.layers[0].keys[0].keyParams,
    };
    let oldWKey = this.state.keys;
    oldWKey.push(newKey);
    oldWKey.sort((a, b) => a.keyID - b.keyID);
    console.log(oldWKey);
    let layers = this.props.PYE.layers;
    layers[this.props.activeL].keys = oldWKey;
    this.props.addFrame(layers);
    this.setState({
      ups: this.state.ups + 1,
      keys: oldWKey,
    });
  };
  // set key ready to edit
  activateKey = (e) => {
    console.log(e.target.id, this.state.key);
    this.props.activateFrame(parseInt(e.target.id), this.state.key);
  };
  render() {
    console.log(this.state);
    const { bg1, bg2, bg3, c1, c2, c3, w, b, r } = this.state.cols;
    return (
      <div style={{ textAlign: "center", marginBottom: "2em" }}>
        {this.state.keys.length < 9 ? (
          <Button
            className="m-2"
            style={{
              background: bg3,
              color: c3,
            }}
            onClick={this.addKeyDown}
            id={this.state.downs}
          >
            +
          </Button>
        ) : null}
        {this.state.keys.map((key) => (
          <Button
            className="m-2"
            style={{
              background: bg2,
              color: c1,
            }}
            key={key.keyID}
            id={key.keyID}
            onClick={this.activateKey}
          >
            {`Key ${key.keyID}`}
          </Button>
        ))}
        {this.state.keys.length < 9 ? (
          <Button
            className="m-2"
            style={{
              background: bg3,
              color: c3,
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
  pyes: state.pyeState.pyes,
  bake: state.pyeState.bake,
  slice: state.pyeState.slice,
  activeL: state.pyeState.activeL,
  frame: state.pyeState.frame,
  kopn: state.pyeState.key,
  activeK: state.pyeState.activeK,
  stateK: state.pyeState.stateK,
  pyeDrafts: state.pyeState.pyeDrafts,
  pyeSamples: state.pyeState.pyeSamples,
  PYE: state.pyeState.PYE,
  INIT: state.pyeState.INIT,
  users: state.userState.users,
  cols: state.userState.cols,
});

export default connect(mapStateToProps, { activateFrame, addFrame })(KeyFrames);
