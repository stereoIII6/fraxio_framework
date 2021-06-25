import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import {getPyeAssets, getPyeData, createPye} from "../../action/pyeActions";
import { Button, InputGroup, Input, Form } from 'reactstrap';
import KeyFrames from './KeyFrames';
import MediaPreview from './MediaPreview';
import ToolBox from './Toolbox';
class MaskThree extends Component {
    static propTypes = {
        workingPYE: PropTypes.object,
        workingLayer: PropTypes.object
    };
    state = {}
    render() {
        return (
            this.props.workingPYE.booly && this.props.workingLayer.booly ? 
            <div>
                <h1 className="m-0 p-0">PYE Keyframe Editor</h1>
                <hr></hr>
                <MediaPreview />
                <KeyFrames />
                <ToolBox />
            </div> : null
        );
    }
}
const mapStateToProps = state => ({
    workingPYE: state.pyeState.workingPYE,
    workingLayer: state.layerState.workingLayer
});
 
export default connect(mapStateToProps, { getPyeAssets,getPyeData,createPye })(MaskThree);