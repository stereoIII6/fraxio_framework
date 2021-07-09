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
import { updateLayer } from "../../action/layerActions";
import LayerInput from "./LayerInput";
import MediaPreview from "./MediaPreview";
import MiniPlayer from "./MiniPlayer";
import Layer from "./Layer";
import { Button } from "reactstrap";

// class definition
class Layers extends Component {
  // redux state prop declaration
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    layers: PropTypes.array,
    coloris: PropTypes.object,
    updateLayer: PropTypes.func,
  };

  // set local state
  state = {
    layerSize: true,
  };
  onSizeLayers = (e) => {
    e.preventDefault();
    this.setState({ layerSize: !this.state.layerSize });
  };
  render() {
    this.props.updateLayer();
    // exclude layer 0
    const display = this.props.layers.filter(
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
                {display.map((layer) =>
                  layer.layerID !== 0 ? (
                    <Layer key={layer.layerID} layerid={layer.layerID} />
                  ) : (
                    <div key={0} layerid={0}>
                      Layers
                    </div>
                  )
                )}
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
  workingPYE: state.pyeState.workingPYE,
  workingLayer: state.layerState.workingLayer,
  layers: state.layerState.layers,
  coloris: state.layerState.coloris,
});

export default connect(mapStateToProps, { updateLayer })(Layers);
