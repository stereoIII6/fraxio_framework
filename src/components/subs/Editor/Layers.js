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
//          @id :: FR-92727                                                         //
//          @versiom :: 1.0.0                                                       //
//                                                                                  //
//          @description ::                                                         //
//          The Factory FR-92727 is Layers Editor for the React Frontend.           //
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
import Draggable from "react-draggable";
import { activateSlice } from "../../action/pyeActions";
import LayerInput from "./LayerInput";
import MediaPreview from "./MediaPreview";
import MiniPlayer from "./MiniPlayer";
import Layer from "./Layer";
import { Button } from "reactstrap";

// class definition
class Layers extends Component {
  // redux state prop declaration
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
    activateSlice: PropTypes.func,
  };

  // set local state
  state = {
    layerSize: true,
    cols: this.props.cols,
  };
  onSizeLayers = (e) => {
    e.preventDefault();
    this.setState({ layerSize: !this.state.layerSize });
  };
  onLayerActivate = (e) => {
    e.preventDefault();
    this.props.activateSlice(e.target.id);
  };
  render() {
    const { bg1, bg2, bg3, c1, c2, c3, w, b, r } = this.state.cols;
    // exclude layer 0
    const display = this.props.PYE.layers.filter(
      (layer) => parseInt(layer.layerID) !== 0
    );

    return (
      <div>
        {/* CREATE NEW LAYER FORM*/}
        <LayerInput />
        <div>
          {display.length < 1 ? (
            console.log("no layer")
          ) : (
            <Draggable>
              <div
                className="alert alert-info"
                style={{
                  position: "absolute",
                  top: "400px",
                  left: "20px",
                  width: "280px",
                  minHeight: this.state.layerSize ? "200px" : "70px",
                  maxHeight: this.state.layerSize ? "900px" : "70px",
                  zIndex: 100,
                  overflow: "scroll",
                }}
              >
                <div style={{ height: "70px" }}>
                  Layers{" "}
                  <Button
                    className="btn sm-btn"
                    onClick={this.onSizeLayers}
                    style={{ float: "right" }}
                  >
                    {this.state.layerSize ? " - " : " + "}
                  </Button>
                </div>
                {
                  (console.log("LAYER // just a check up", display),
                  display.map((layer) => (
                    <Layer
                      key={layer.layerID}
                      id={layer.layerID}
                      layerProps={layer.layerID}
                      onMouseOver={this.onLayerActivate}
                      style={{
                        border: `5px ${
                          this.props.activeL === layer.layerID ? bg1 : bg2
                        } solid`,
                        background:
                          this.props.activeL === layer.layerID ? bg3 : c3,
                      }}
                    />
                  )))
                }
              </div>
            </Draggable>
          )}

          <div className="alert alert-warning">
            Layer Preview
            {/* MINI PREVIEW OF TOKEN */}
            <MediaPreview />
          </div>
        </div>
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

export default connect(mapStateToProps, { activateSlice })(Layers);
