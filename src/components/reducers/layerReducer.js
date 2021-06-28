import {
    LOAD_LAYERS,
    BAKE_FS ,   
    BAKE_ORACLE ,
    BAKE_EXT ,  
    ADD_LAYER ,
    DEL_LAYER ,
    EDIT_LAYER ,
    MOVE_LAYER 

} from "../action/types";
const initState = {
    layers: [{layerID:0}],
    workingLayer: {
        booly: false,
        layerID: 0,
        layerType: "",
        layerOracle: {
            type: "",
            name: "",
            stamp: 0,
        },
        layerFS: {
            user:"",
            pye:"",
            file:"",
            url:""
        },
        layerName: "",
        layerExternal: {
            abi: {},
            adr: 0x0,
            function: "",
            data: {}
        },
        keys:[]
    },
    loadingLayers: true,
};

export default function (state = initState, action) {
    switch (action.type) {

        case ADD_LAYER:
            console.log("add RED // " + action.payload);
            return {
                state,
                layers: [...state.layers, action.payload],
                workingLayer: action.payload
            }

        default:
            return state;
    }
}
