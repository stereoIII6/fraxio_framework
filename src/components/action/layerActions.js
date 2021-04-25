import {
    LOAD_LAYERS,
    LAYERS_LOADED,
    ADD_LAYER,
    DEL_LAYER,
    EDIT_LAYER,
    MOVE_LAYER,
    BAKE_ALPHA,
    BAKE_ORACLE,
    GET_FEED,
    TOGGLE_MODAL,
    SET_LAYER_ACTIVE,
    SET_LAYER_INACTIVE,
    SET_KEY_ACTIVE
} from "./types";

export const getLayers = () => (dispatch) => {
    console.log("action get layers");
    dispatch(setLoadLayer());
};

export const getPriceFeeds = (feed) => {
    console.log("action get prices // ", feed);
    return {
        type: GET_FEED,
        payload: feed
    }
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

export const bakeAlpha = (inputAlpha, layer, layerState, layers) => {
    // console.log("action bake ruler " + param + "layer" + layer + "to ", inputAlpha);
    let bakeLayers = layers;
    bakeLayers[layer].obj.alpha = inputAlpha;
    // console.log("action bake Ruler", bakeLayers)
    return {
        type: BAKE_ALPHA,
        payload: bakeLayers
    };
};
export const bakeOracle = (inputOracle, layer, layerState, layers) => {
    // console.log("action bake ruler " + param + "layer" + layer + "to ", inputAlpha);
    let bakeLayers = layers;
    bakeLayers[layer].obj = inputOracle.obj;
    bakeLayers[layer].oracle = inputOracle.oracle;

    // console.log("action bake Ruler", bakeLayers)
    return {
        type: BAKE_ORACLE,
        payload: bakeLayers
    };
};
export const doToggle = (bool) => {
    return {
        type: TOGGLE_MODAL,
        payload: bool
    };
};
export const activateLayer = (id) => {
    return {
        type: SET_LAYER_ACTIVE,
        payload: Number(id)
    };

};
export const deActivateLayer = () => {
    return {
        type: SET_LAYER_INACTIVE,
        payload: null
    };

};
export const changeKey = (frame) => {
    console.log(frame, "action activeKey")
    return {
        type: SET_KEY_ACTIVE,
        payload: frame
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

export const editLayer = (edited) => {
    console.log("action edit layer", edited);
    return {
        type: EDIT_LAYER,
        payload: edited
    };
};

export const moveLayer = () => {
    return {
        type: MOVE_LAYER
    };
};
