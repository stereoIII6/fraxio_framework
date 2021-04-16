import {
    LOAD_LAYERS,
    LAYERS_LOADED,
    ADD_LAYER,
    DEL_LAYER,
    BAKE_ALPHA,
    BAKE_ORACLE,
    MOVE_LAYER,
    GET_FEED,
    EDIT_LAYER,
    TOGGLE_MODAL,
    SET_LAYER_ACTIVE,
    SET_LAYER_INACTIVE,
    SET_KEY_ACTIVE

} from "../action/types";
const initState = {
    layers: [],
    priceFeed: {},
    loadingLayers: true,
    activeLayer: null,
    activeKey: 2,
    isOpen: false
};

export default function (state = initState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isOpen: action.payload,
                layers: [...state.layers]
            };
        case SET_LAYER_ACTIVE:
            return {
                ...state,
                activeLayer: action.payload,
                // layers: [...state.layers]
            };
        case SET_LAYER_INACTIVE:
            return {
                ...state,
                activeLayer: null,
                layers: [...state.layers]
            };
        case SET_KEY_ACTIVE:
            return {
                ...state,
                activeKey: action.payload,

            };
        case LOAD_LAYERS:
            return {
                ...state,
                loadingLayers: true
            };
        case LAYERS_LOADED:
            return {
                ...state,
                loadingLayers: false,
                layers: [...state.layers]
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
        case EDIT_LAYER:
            console.log("reduced edit layer", action.payload);
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

        case BAKE_ORACLE:
            console.log("reduced bakeAlpha layer", action.payload);
            return {
                ...state,
                layers: action.payload
            };
        case GET_FEED:
            console.log("reduced price feed // ", action.payload);
            return {
                ...state,
                priceFeed: action.payload
            };
        default:
            return state;
    }
}
