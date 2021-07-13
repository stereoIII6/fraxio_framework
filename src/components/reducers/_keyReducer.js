import {
  GET_FRAMES,
  SET_KEY_ACTIVE,
  SET_KEY_INACTIVE,
  EDIT_KEY,
  EDIT_KEYS,
  ADD_KEY_DOWN,
  ADD_KEY_UP,
  SAVE_KEYS,
  SAVE_KEY,
  RESET_KEY,
  UPDATE_KEY,
  ACTIVE_KEY,
  SAVE_KEYS_2_KEYS,
  RESET_ACTIVE,
} from "../action/types";
const initState = {
  keys: [
    {
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
  ],
  edit: false,
  booly: false,
  active: 0,
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
  initKey: {
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
        edit: true,
        booly: true,
        active: 0,
        workingKey: action.payload.initKey,
        keys: action.payload.keys,
      };
    case ADD_KEY_UP:
      console.log("RED initKey // ", action.payload.initKey);
      const l = action.payload.length;
      return {
        ...state,
        workingKey: action.payload.initKey,
        keys: action.payload,
      };
    case ADD_KEY_DOWN:
      console.log("RED initKey // ", action.payload.initKey);
      return {
        ...state,
        workingKey: action.payload.initKey,
        keys: action.payload,
      };
    case ACTIVE_KEY:
      console.log("RED active Key // ", action.payload);
      return {
        ...state,
        active: action.payload,
        workingKey: action.key,
      };
    case SET_KEY_INACTIVE:
      return {
        ...state,
        workingKey: state.initKey,
      };
    case EDIT_KEYS:
      console.log("RED edit key //", action.payload);
      return {
        ...state,
        workingKey: {
          ...state.workingKey,
          keys: action.payload,
        },
      };
    case EDIT_KEY:
      console.log("RED edit key //", action.payload);
      return {
        ...state,
        workingKey: action.payload,
        initKey: action.payload,
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
    case SAVE_KEYS_2_KEYS:
      return {
        ...state,
        edit: false,
        booly: false,
        active: 0,
        keys: action.payload,
        workingKey: {
          edit: false,
          booly: false,
          active: 0,
        },
      };
    case RESET_KEY:
      return {
        ...state,
        workingKey: initState.workingKey,
      };
    case RESET_ACTIVE:
      return {
        ...state,
        active: 0,
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
