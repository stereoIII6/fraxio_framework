import { Input } from "reactstrap";
import {
    LOAD_LAYERS,
    LAYERS_LOADED,
    ADD_LAYER,
    DEL_LAYER,
    MOVE_LAYER,
    BAKE_ALPHA
} from "./types";

export const getLayers = () => (dispatch) => {
    console.log("action get layers");
    dispatch(setLoadLayer());
};

export const layersLoaded = () => {
    console.log("action layers loaded");
    return {
        type: LAYERS_LOADED
    }
}

export const setLoadLayer = () => {
    console.log("action layers loading");
    return {
        type: LOAD_LAYERS
    };

};

export const bakeAlpha = (inputAlpha, layer, param, layers) => {
    // console.log("action bake ruler " + param + "layer" + layer + "to ", inputAlpha);
    let bakeLayers = [];

    layers.map(laya => (
        laya.key.toString() === layer.toString() ? (laya.obj.alpha = inputAlpha, console.log("baking done")) : null,
        bakeLayers.push(laya)
    ));
    console.log("action bake Ruler", bakeLayers)
    return {
        type: BAKE_ALPHA,
        payload: bakeLayers
    };
};

export const addLayer = (newLayer) => {
    console.log("action add layer", newLayer);
    return {
        type: ADD_LAYER,
        payload: newLayer
    };
};

export const deleteLayer = (newLayers) => {
    console.log("action delete layer", newLayers);
    return {
        type: DEL_LAYER,
        payload: newLayers
    };
};

export const moveLayer = () => {
    return {
        type: MOVE_LAYER
    };
};
