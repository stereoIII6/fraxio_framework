import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { doToggle, activateLayer, deActivateLayer, changeKey, addLayer, deleteLayer, moveLayer, layersLoaded, bakeAlpha, editLayer } from "./action/layerActions.js";
import Modal from "./Modal";
const _ = require('lodash');
class Empty extends Component {
    state = {
    }
    static propTypes = {
        layers: PropTypes.array,
        priceFeed: PropTypes.object,
        addLayer: PropTypes.func,
        deleteLayer: PropTypes.func,
        moveLayer: PropTypes.func,
        layersLoaded: PropTypes.func,
        bakeAlpha: PropTypes.func,
        editLayer: PropTypes.func,
        activeLayer: PropTypes.number,
        activeKey: PropTypes.number,
        isOpen: PropTypes.bool,
        doToggle: PropTypes.func,
        activateLayer: PropTypes.func,
        deActivateLayer: PropTypes.func,
        changeKey: PropTypes.func,
    };

    render() {

        return (
            <div className="col-3" style={{ wordWrap: "break-word", fontSize: "0.6em" }} >
                {JSON.stringify(this.props.layers)}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    layers: state.layerState.layers,
    priceFeed: state.layerState.priceFeed,
    isOpen: state.layerState.isOpen,
    activeLayer: state.layerState.activeLayer,
    activeKey: state.layerState.activeKey
});
export default connect(mapStateToProps, { doToggle, changeKey, activateLayer, deActivateLayer, addLayer, deleteLayer, moveLayer, layersLoaded, bakeAlpha, editLayer })(Empty);
