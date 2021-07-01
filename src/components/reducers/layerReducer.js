import {
  LOAD_LAYERS,
  BAKE_FS,
  BAKE_ORACLE,
  BAKE_EXT,
  ADD_LAYER,
  DEL_LAYER,
  EDIT_LAYER,
  MOVE_LAYER,
  UPDATE_LAYER,
  LOAD_WORK_LAYER,
} from "../action/types";
const initState = {
  layers: [
    { layerID: 0, layerOracle: { name: "empty" }, layerFS: { url: "" } },
  ],
  coloris: {
    mint: "#9fe6c3",
    sky: "#aad9d8",
    purple: "#9f95c3",
    grey: "#e2e3db",
    palm: "#7c9cb6",
    dgrey: "darkgrey",
    white: "ivory",
    tomato: "tomato",
  },
  workingLayer: {
    booly: false,
    layerID: null,
    layerType: "",
    layerOracle: {
      type: "",
      name: "",
      stamp: 0,
    },
    layerFS: {
      user: "",
      pye: "",
      file: "",
      url: "",
    },
    layerName: "",
    layerExternal: {
      abi: {},
      adr: 0x0,
      function: "",
      data: {},
    },
    keys: [],
  },
  loadingLayers: true,
};

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_LAYER:
      console.log("add RED // " + action.payload);
      return {
        ...state,
        layers: [...state.layers, action.payload],
        workingLayer: action.payload,
      };
    case EDIT_LAYER:
      console.log("edit RED //" + action.payload);
      return {
        ...state,
        layers: [...action.payload],
      };
    case DEL_LAYER:
      console.log("delete RED //" + action.payload);
      return {
        ...state,
        layers: [...action.payload],
      };
    case UPDATE_LAYER:
      console.log("update RED //" + action.payload);
      return {
        ...state,
      };
    case LOAD_WORK_LAYER:
      console.log("update RED //" + action.payload);
      return {
        ...state,
        workingLayer: action.payload,
      };
    default:
      return state;
  }
}
