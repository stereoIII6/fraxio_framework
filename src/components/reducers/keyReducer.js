import {
  GET_FRAMES,
  SET_KEY_ACTIVE,
  SET_KEY_INACTIVE,
  EDIT_KEY,
  SAVE_KEYS,
  SAVE_KEY,
  RESET_KEY,
  UPDATE_KEY,
} from "../action/types";
const initState = {
  keys: [],
  edit: false,
  booly: false,
  workingKey: {
    layerID: 0,
    keyID: 0,
    layerParams: {
      x: 0,
      y: 0,
      o: 100,
      r: 0,
      z: 90,
    },
  },
  loadingFrames: false,
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_FRAMES:
      return {
        ...state,
        frames: action.payload,
        loadingFrames: false,
      };
    case SET_KEY_ACTIVE:
      console.log("RED initKey // ", action.payload.initKey);
      return {
        ...state,
        workingKey: action.payload,
        keys: [action.payload.initKey],
      };
    case SET_KEY_INACTIVE:
      return {
        ...state,
        workingKey: initState.workingKey,
      };
    case EDIT_KEY:
      console.log("RED edit key //", action.payload);
      return {
        ...state,
        workingKey: action.payload,
      };
    case SAVE_KEY:
      return {
        ...state,
        keys: [action.payload, ...state.keys],
      };
    case SAVE_KEYS:
      return {
        ...state,
        keys: action.payload,
        workingKey: initState.workingKey,
      };
    case RESET_KEY:
      return {
        ...state,
        workingKey: initState.workingKey,
      };
    case UPDATE_KEY:
      console.log("update key RED //");
      return {
        ...state,
      };
    default:
      return state;
  }
}
