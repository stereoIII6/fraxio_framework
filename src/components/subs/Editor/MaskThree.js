import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { getPyeAssets, getPyeData, createPye } from "../../action/pyeActions";
import { quitWork } from "../../action/keyActions";
import { Button, InputGroup, Input, Form } from "reactstrap";
import KeyFrames from "./KeyFrames";
import MediaPreview from "./MediaPreview";
import ToolBox from "./Toolbox";
class MaskThree extends Component {
  static propTypes = {
    workingPYE: PropTypes.object,
    workingLayer: PropTypes.object,
    workingKey: PropTypes.object,
  };
  state = {};
  goQuit = (e) => {
    e.preventDefault();
    this.props.quitWork();
  };
  render() {
    return this.props.workingPYE.booly &&
      this.props.workingLayer.booly &&
      this.props.workingKey.booly ? (
      <div>
        <h1 className="m-0 p-0">
          PYE Keyframe Editor
          <Button
            style={{ color: "tomato", float: "right" }}
            onClick={this.goQuit}
          >
            X
          </Button>
          <Button
            style={{ color: "lime", float: "right", marginRight: "1em" }}
            onClick={this.goQuit}
          >
            RESET
          </Button>
        </h1>
        <hr></hr>
        <MediaPreview />
        <KeyFrames />
        <ToolBox />
      </div>
    ) : null;
  }
}
const mapStateToProps = (state) => ({
  workingPYE: state.pyeState.workingPYE,
  workingLayer: state.layerState.workingLayer,
  workingKey: state.keyState.workingKey,
});

export default connect(mapStateToProps, {
  getPyeAssets,
  getPyeData,
  createPye,
  quitWork,
})(MaskThree);
