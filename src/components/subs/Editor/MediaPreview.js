import React, { Component } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { deleteLayer, editLayer, updateLayer } from "../../action/layerActions";
class MediaPreview extends Component {
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    coloris: PropTypes.object,
    layers: PropTypes.array,
    deleteLayer: PropTypes.func,
    editLayer: PropTypes.func,
    updateLayer: PropTypes.func,
  };
  componentDidMount() {
    this.props.updateLayer();
  }
  render() {
    const keyZero = {
      opacity: 1,
      height: "100%",
      width: "auto",
      transform: `"rotate(${0}deg)"`,
      position: "absolute",
      top: 0,
      left: 0,
    };
    const display = this.props.layers.filter(
      (layer) => parseInt(layer.layerID) !== 0
    );
    return (
      <div
        style={{
          background: "white",
          backgroundImage: `url("https://ipfs.io/ipfs/QmTNbkJ5x3iY4VEiEUARfrCreqBZ3tXHU3oFnsUK7QnDie")`,
          width: "100%",
          height: "430px",
          overflow: "hidden",
          position: "relative",
          top: "10px",
          left: "0px",
          marginBottom: "20px",
        }}
      >
        {/*display.sort((a, b) => b.layerID - a.layerID),*/
        display.map((layer) =>
          layer.layerType === "img" ? (
            <img key={layer.layerID} src={layer.layerFS.url} style={keyZero} />
          ) : null
        )}
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

export default connect(mapStateToProps, {
  deleteLayer,
  editLayer,
  updateLayer,
})(MediaPreview);
