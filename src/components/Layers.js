import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import {
    doToggle,
    activateLayer,
    deActivateLayer,
    changeKey, addLayer,
    deleteLayer, moveLayer,
    layersLoaded,
    bakeAlpha, bakeOracle, editLayer
} from "./action/layerActions.js";
import Modal from "./Modal";
const _ = require('lodash');
class Layers extends Component {
    state = {
        path: null,
        key: null,
        oracle: "",
        obj: {
            alpha: {
                d: 0,
                x: 10, // xposition
                y: 10, // yposition
                z: 100, // scale
                o: 100, // opacity
                r: 0, // rotation
                s: 500 // squeeze auto set values
            },
            top: null,
            mid: null,
            start: null,
            low: null,
            bottom: null,
            custom: null
        
        },
        iObj: {
            alpha: {
                d: 0,
                x: 10, // xposition
                y: 10, // yposition
                z: 100, // scale
                o: 100, // opacity
                r: 0, // rotation
                s: 500 // squeeze auto set values
            },
            top: null,
            mid: null,
            start: null,
            low: null,
            bottom: null,
            custom: null
        },

    }
    static propTypes = {
        layers: PropTypes.array,
        priceFeed: PropTypes.object,
        addLayer: PropTypes.func,
        deleteLayer: PropTypes.func,
        moveLayer: PropTypes.func,
        layersLoaded: PropTypes.func,
        bakeAlpha: PropTypes.func,
        bakeOracle: PropTypes.func,
        editLayer: PropTypes.func,
        activeLayer: PropTypes.number,
        activeKey: PropTypes.number,
        isOpen: PropTypes.bool,
        doToggle: PropTypes.func,
        activateLayer: PropTypes.func,
        deActivateLayer: PropTypes.func,
        changeKey: PropTypes.func,
    };

    closeLayer = (e) => {
        e.preventDefault();
        // console.log(!this.props.isOpen, "new modal state");
        this.props.doToggle(!this.props.isOpen);
        this.props.deActivateLayer();
        // console.log(this.props.priceFeed);
    }
    openLayer = (e) => {
        e.preventDefault();
        // console.log(!this.props.isOpen, "new modal state");
        this.props.doToggle(!this.props.isOpen);
        this.props.activateLayer(e.target.id);
        this.setState(
            this.props.layers[e.target.id]
        );
        // console.log(this.props.priceFeed);
    }
    rulerChange = (e) => {
        e.preventDefault();
        // console.log(`init by layer ${this.props.activeLayer}`, this.props.layers[this.props.activeLayer].obj.alpha);
        // if (this.props.layers[e.target.name].obj.alpha !== null) {
        switch (e.target.id) {
            case "x":
                this.props.layers.map(laya => (
                    Number(e.target.name) === this.props.activeLayer ?
                        this.props.bakeAlpha({
                            d: this.props.layers[e.target.name].obj.alpha.d,
                            x: parseInt(e.target.value), // xposition
                            y: this.props.layers[e.target.name].obj.alpha.y, // yposition
                            z: this.props.layers[e.target.name].obj.alpha.z, // scale
                            o: this.props.layers[e.target.name].obj.alpha.o, // opacity
                            r: this.props.layers[e.target.name].obj.alpha.r,// rotation
                            s: this.props.layers[e.target.name].obj.alpha.s, // opacity


                        }, e.target.name, this.state, this.props.layers) : console.log(this.props.activeLayer)
                ),
                    this.setState(this.props.layers[e.target.name])
                )
                break;
            case "y":
                this.props.layers.map(laya => (
                    Number(e.target.name) === this.props.activeLayer ?
                        this.props.bakeAlpha({
                            d: this.props.layers[e.target.name].obj.alpha.d,
                            x: this.props.layers[e.target.name].obj.alpha.x, // yposition
                            y: parseInt(e.target.value), // xposition
                            z: this.props.layers[e.target.name].obj.alpha.z, // scale
                            o: this.props.layers[e.target.name].obj.alpha.o, // opacity
                            r: this.props.layers[e.target.name].obj.alpha.r,// rotation
                            s: this.props.layers[e.target.name].obj.alpha.s, // opacity


                        }, e.target.name, this.state, this.props.layers) : null
                ), this.setState(this.props.layers[e.target.name])
                )
                break;
            case "z":
                this.props.layers.map(laya => (
                    Number(e.target.name) === this.props.activeLayer ?
                        this.props.bakeAlpha({
                            d: this.props.layers[e.target.name].obj.alpha.d,
                            x: this.props.layers[e.target.name].obj.alpha.x, // x position
                            y: this.props.layers[e.target.name].obj.alpha.y, // y position
                            z: parseInt(e.target.value), // scale
                            o: this.props.layers[e.target.name].obj.alpha.o, // opacity
                            r: this.props.layers[e.target.name].obj.alpha.r,// rotation
                            s: this.props.layers[e.target.name].obj.alpha.s, // opacity


                        }, e.target.name, this.state, this.props.layers) : null
                ), this.setState(this.props.layers[e.target.name])
                )
                break;
            case "o":
                this.props.layers.map(laya => (
                    Number(e.target.name) === this.props.activeLayer ?
                        this.props.bakeAlpha({
                            d: this.props.layers[e.target.name].obj.alpha.d,
                            x: this.props.layers[e.target.name].obj.alpha.x, // opacity
                            y: this.props.layers[e.target.name].obj.alpha.y, // yposition
                            z: this.props.layers[e.target.name].obj.alpha.z, // scale
                            o: parseInt(e.target.value), // xposition
                            r: this.props.layers[e.target.name].obj.alpha.r,// rotation
                            s: this.props.layers[e.target.name].obj.alpha.s, // opacity


                        }, e.target.name, this.state, this.props.layers) : null
                ), this.setState(this.props.layers[e.target.name])
                )
                break;
            case "r":
                this.props.layers.map(laya => (
                    Number(e.target.name) === this.props.activeLayer ?
                        this.props.bakeAlpha({
                            d: this.props.layers[e.target.name].obj.alpha.d,
                            x: this.props.layers[e.target.name].obj.alpha.x,// rotation
                            y: this.props.layers[e.target.name].obj.alpha.y, // yposition
                            z: this.props.layers[e.target.name].obj.alpha.z, // scale
                            o: this.props.layers[e.target.name].obj.alpha.o, // opacity
                            r: parseInt(e.target.value), // xposition
                            s: this.props.layers[e.target.name].obj.alpha.s, // opacity

                        }, e.target.name, this.state, this.props.layers) : null
                ), this.setState(this.props.layers[e.target.name])
                )
                break;
            case "s":
                this.props.layers.map(laya => (
                    Number(e.target.name) === this.props.activeLayer ?
                        this.props.bakeAlpha({
                            d: this.props.layers[e.target.name].obj.alpha.d,
                            x: this.props.layers[e.target.name].obj.alpha.x,// rotation
                            y: this.props.layers[e.target.name].obj.alpha.y, // yposition
                            z: this.props.layers[e.target.name].obj.alpha.z, // scale
                            o: this.props.layers[e.target.name].obj.alpha.o, // opacity
                            r: this.props.layers[e.target.name].obj.alpha.r,
                            s: parseInt(e.target.value), // xposition

                        }, e.target.name, this.state, this.props.layers) : null
                ), this.setState(this.props.layers[e.target.name])
                )
                break;
            case "d":
                this.props.layers.map(laya => (
                    Number(e.target.name) === this.props.activeLayer ?
                        this.props.bakeAlpha({
                            d: parseInt(e.target.value),
                            x: this.props.layers[e.target.name].obj.alpha.x,// rotation
                            y: this.props.layers[e.target.name].obj.alpha.y, // yposition
                            z: this.props.layers[e.target.name].obj.alpha.z, // scale
                            o: this.props.layers[e.target.name].obj.alpha.o, // opacity
                            r: this.props.layers[e.target.name].obj.alpha.r,
                            s: this.props.layers[e.target.name].obj.alpha.s, // xposition

                        }, e.target.name, this.state, this.props.layers) : null
                ), this.setState(this.props.layers[e.target.name])
                )
                break;
        }
        // console.log(`ruler change alpha.${e.target.id, e.target.value}`);
    }
    onChange = (e) => {
        const value =
            e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value;
        this.setState({ [e.target.name]: value });
        console.log("onChange name", e.target.name, e.target.value);
    }
    onSwitch = (e) => {
        e.preventDefault();
        const chosenFeed = e.target.value.split("-");
        this.props.layers.map(laya => (
            Number(e.target.name) === this.props.activeLayer ?
                this.props.bakeOracle({
                    obj: {
                        alpha: {
                            d: chosenFeed[1],
                            x: this.props.layers[e.target.name].obj.alpha.x, // xposition
                            y: this.props.layers[e.target.name].obj.alpha.y, // yposition
                            z: this.props.layers[e.target.name].obj.alpha.z, // scale
                            o: this.props.layers[e.target.name].obj.alpha.o, // opacity
                            r: this.props.layers[e.target.name].obj.alpha.r,// rotation
                            s: this.props.layers[e.target.name].obj.alpha.s, // opacity
                        }
                        , top: this.props.layers[e.target.name].obj.top,
                        mid: this.props.layers[e.target.name].obj.mid,
                        start: this.props.layers[e.target.name].obj.start,
                        low: this.props.layers[e.target.name].obj.low,
                        bottom: this.props.layers[e.target.name].obj.bottom,
                        custom: this.props.layers[e.target.name].obj.custom
                    }, oracle: e.target.value
                }, e.target.name, this.state, this.props.layers) : console.log("oracle baked", this.props.activeLayer)
        ),
            this.setState(this.props.layers[e.target.name])
        )
        console.log("switch state", this.state);
    }
    goAddLayer = (e) => {
        e.preventDefault();
        const newLayer = {
            path: document.getElementById("path").value,
            key: this.props.layers.length,
            name: document.getElementById("name").value !== "" ? document.getElementById("name").value : this.props.layers.length,
            oracle: "",
            obj: this.state.iObj
        }

        console.log("click add layer", newLayer);
        this.props.addLayer(newLayer);
        this.setState(newLayer);
        document.getElementById("path").value = "";
        document.getElementById("name").value = "";
    }
    goDeleteLayer = (e) => {
        e.preventDefault();
        console.log("click delete layer ", e.target.id);
        const dropLayer = e.target.id;
        // drop layer
        const newLayers = this.props.layers.filter(layer => layer.key !== Number(dropLayer));
        console.log(newLayers, "click delete layers new list");
        this.props.deleteLayer(newLayers);
    }
    goResetLayer = (e) => {
        e.preventDefault();
        const layerState = {
            path: this.props.layers[this.props.activeLayer].path,
            key: this.props.layers[this.props.activeLayer].key,
            name: this.props.layers[this.props.activeLayer].name,
            obj: this.state.iObj
        }
        console.log(layerState);
        this.setState(layerState);
        let editedLayers = this.props.layers;
        editedLayers[this.props.activeLayer] = layerState;
        this.props.editLayer(editedLayers);
        console.log("reset layer ", editedLayers);
    }
    goChangeKey = (e) => {
        e.preventDefault();
        this.props.changeKey(e.target.key);
    }
    goSaveLayer = (e) => {
        e.preventDefault();
        // console.log(this.props.layers[e.target.id].obj, "click go save layer");
        const fillIn = this.state.obj.alpha;
        console.log("fillIn", fillIn);
        console.log( this.props.layers[this.props.activeLayer].obj,"savecheck");
        // console.log(this.props.layers[this.props.activeLayer], this.props.layers[e.target.id]);
        const fillTop = this.props.activeKey === 0 ? fillIn : this.props.layers[this.props.activeLayer].obj.top;
        const fillMid = this.props.activeKey === 1 ? fillIn : this.props.layers[this.props.activeLayer].obj.mid;
        const fillStart = this.props.activeKey === 2 ? fillIn : this.props.layers[this.props.activeLayer].obj.start;
        const fillLow = this.props.activeKey === 3 ? fillIn : this.props.layers[this.props.activeLayer].obj.low;
        const fillBottom = this.props.activeKey === 4 ? fillIn : this.props.layers[this.props.activeLayer].obj.bottom;
        const fillCustom = this.props.activeKey === 5 ? fillIn : this.props.layers[this.props.activeLayer].obj.custom;
        const layerState = {
            path: this.props.layers[e.target.id].path,
            key: this.props.layers[e.target.id].key,
            name: this.props.layers[e.target.id].name,
            oracle: this.state.oracle,
            obj: {
                start: fillStart,
                top: fillTop,
                mid: fillMid,
                alpha: {
                    d: 0,
                    x: 10, // xposition
                    y: 10, // yposition
                    z: 100, // scale
                    o: 100, // opacity
                    r: 0, // rotation
                    s: 500,
                },
                low: fillLow,
                bottom: fillBottom,
                custom: fillCustom
            }
        }
        let editedLayers = this.props.layers;
        editedLayers[this.props.activeLayer] = layerState;
        this.props.editLayer(editedLayers);
        console.log("goedit layer ", editedLayers);
        console.log(this.state.obj);
        this.setState(editedLayers);
        this.closeLayer(e);
    }

    render() {
        // console.log(this.props.layers.length);
        // console.log(this.props.check);
        const btn_colors = ["MediumSeaGreen", "LimeGreen", "cornflowerblue", "violet", "tomato", "orange"];
        const colori = btn_colors[this.props.activeKey];
        return (
            <div id="layers" className="col-3 p-0 m-0" style={{ height: "450px", color: "ivory", background: colori, opacity: "0.8" }}>
                <h3 className="d-inline ml-2">LAYERS</h3>
                <div id="list">

                    <Form onSubmit={this.goAddLayer}> <InputGroup>
                        <Input type="text" id="path" placeholder="IPFS PATH" onChange={this.onChange} />
                        <Input type="text" id="name" placeholder="LAYER NAME" onChange={this.onChange} />

                        <Button type="submit" value="+" >+</Button>
                    </InputGroup>
                    </Form>
                    <div>{
                        // console.log(this.props.layers),

                        this.props.layers.map(layer => (

                            <div key={layer.key} className="alert alert-success" >
                                <h5 style={{ float: "left", marginRight: "1em" }}>{layer.name}</h5>
                                <Button style={{ float: "left", marginRight: "1em", width: "4em" }}>
                                    <img src={`https://ipfs.io/ipfs/${layer.path}`} alt="" style={{ height: `24px`, float: "left", marginRight: "2em" }} />

                                </Button>

                                <Button className={layer.obj ? "btn-sm btn-success" : "btn-sm btn-warning"} id={layer.key} onClick={this.openLayer}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-wide-connected" viewBox="0 0 16 16" id={layer.key}>
                                        <path id={layer.key} d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646l.087.065-.087-.065z" />
                                    </svg>
                                </Button>

                                <Button className="btn-sm btn-danger" id={layer.key} onClick={this.goDeleteLayer}>
                                    <svg id={layer.key} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16"  >
                                        <path id={layer.key} d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </Button>
                            </div>
                        ))

                    }</div>
                    <Modal
                        open={this.props.isOpen}
                        priceFeed={this.props.priceFeed}
                        goResetLayer={this.goResetLayer}
                        goSaveLayer={this.goSaveLayer}
                        onSwitch={this.onSwitch}
                        onChange={this.onChange}
                        onClose={this.closeLayer}
                        layer={this.props.activeLayer}
                        aKey={this.props.activeKey}
                        oracle={this.state.obj.alpha.d}
                        layers={this.props.layers}
                        rulerChange={this.rulerChange}>

                        Dynamic Content Editor&nbsp;
                    </Modal>
                </div>
            </div >
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
export default connect(mapStateToProps, { doToggle, changeKey, activateLayer, deActivateLayer, addLayer, deleteLayer, moveLayer, layersLoaded, bakeAlpha, bakeOracle, editLayer })(Layers);
