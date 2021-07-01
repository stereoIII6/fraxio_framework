import React, { Component } from "react";
import { Button, InputGroup, Input, Form } from "reactstrap";
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { deleteLayer, editLayer, updateLayer } from "../../action/layerActions";
import LayerInput from "./LayerInput";
import MediaPreview from "./MediaPreview";
import Layer from "./Layer";
import { a } from "@react-spring/web";
class Layers extends Component {
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    layers: PropTypes.array,
    coloris: PropTypes.object,
    updateLayer: PropTypes.func,
  };

  render() {
    this.props.updateLayer();
    const display = this.props.layers.filter(
      (layer) => parseInt(layer.layerID) !== 0
    );

    return (
      <div>
        <LayerInput />
        <div className="row">
          <div className="col-4 alert alert-info">
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
          <div className="col-8 alert alert-warning">
            Layer Preview
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
