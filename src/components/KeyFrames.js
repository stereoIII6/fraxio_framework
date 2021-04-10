import React, { Component } from 'react';
import { InputGroup, Input, Form } from 'reactstrap';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { doToggle, activateLayer, deActivateLayer, changeKey, addLayer, deleteLayer, moveLayer, layersLoaded, bakeAlpha, editLayer } from "./action/layerActions.js";


class KeyFrames extends Component {
    state = {}
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
    changeKey = (e) => {
        e.preventDefault();
        console.log("go change key", e.target.id, e.target);
        this.props.changeKey(Number(e.target.id));
    }
    render() {
        return (<InputGroup className="row m-0 p-0">{console.log(this.props.activeKey)}
            <Input type="button" className="alert col p-0" onClick={this.changeKey} style={{ textAlign: "center" }, this.props.activeKey === 0 ? { fontWeight: 500, textDecoration: "line-through", color: "white", background: "MediumSeaGreen", border: "0px solid white" } : { border: "3px solid white", background: "MediumSeaGreen", disabled: true }} id="0" value="top" />
            <Input type="button" className="alert col p-0" onClick={this.changeKey} style={{ textAlign: "center" }, this.props.activeKey === 1 ? { fontWeight: 500, textDecoration: "line-through", color: "white", background: "LimeGreen", border: "0px solid white" } : { border: "3px solid white", background: "LimeGreen", disabled: true }} id="1" value="mid" />
            <Input type="button" className="alert col p-0" onClick={this.changeKey} style={{ textAlign: "center" }, this.props.activeKey === 2 ? { fontWeight: 500, textDecoration: "line-through", color: "white", background: "cornflowerblue", border: "0px solid white" } : { border: "3px solid white", background: "cornflowerblue", disabled: true }} id="2" value="start" />
            <Input type="button" className="alert col p-0" onClick={this.changeKey} style={{ textAlign: "center" }, this.props.activeKey === 3 ? { fontWeight: 500, textDecoration: "line-through", color: "white", background: "violet", border: "0px solid white" } : { border: "3px solid white", background: "violet", disabled: true }} id="3" value="low" />
            <Input type="button" className="alert col p-0" onClick={this.changeKey} style={{ textAlign: "center" }, this.props.activeKey === 4 ? { fontWeight: 500, textDecoration: "line-through", color: "white", background: "tomato", border: "0px solid white" } : { border: "3px solid white", background: "tomato", disabled: true }} id="4" value="bottom" />
            <Input type="button" className="alert col p-0" onClick={this.changeKey} style={{ textAlign: "center" }, this.props.activeKey === 5 ? { fontWeight: 500, textDecoration: "line-through", color: "white", background: "orange", border: "0px solid white" } : { border: "3px solid white", background: "orange", disabled: true }} id="5" value="custom" />
        </InputGroup>);
    }
}

const mapStateToProps = state => ({
    layers: state.layerState.layers,
    priceFeed: state.layerState.priceFeed,
    isOpen: state.layerState.isOpen,
    activeLayer: state.layerState.activeLayer,
    activeKey: state.layerState.activeKey
});
export default connect(mapStateToProps, { doToggle, changeKey, activateLayer, deActivateLayer, addLayer, deleteLayer, moveLayer, layersLoaded, bakeAlpha, editLayer })(KeyFrames);