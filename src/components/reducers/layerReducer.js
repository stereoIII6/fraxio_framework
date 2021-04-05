import {
    LOAD_LAYERS,
    LAYERS_LOADED,
    ADD_LAYER,
    DEL_LAYER,
    BAKE_ALPHA,
    MOVE_LAYER
} from "../action/types";
const initState = {
    layers: [],
    loadingLayers: true,

};

export default function (state = initState, action) {
    switch (action.type) {
        case LOAD_LAYERS:
            return {
                ...state,
                loadingLayers: true
            };
        case LAYERS_LOADED:
            return {
                ...state,
                loadingLayers: false
            };
        case ADD_LAYER:
            console.log("reduced add layer", action.payload);
            return {
                ...state,
                layers: [...state.layers, action.payload]
            };
        case DEL_LAYER:
            console.log("reduced delete layer", action.payload);
            return {
                ...state,
                layers: action.payload
            };
        case BAKE_ALPHA:
            console.log("reduced bakeAlpha layer", action.payload);
            return {
                ...state,
                layers: action.payload
            };
        default:
            return state;
    }
}
