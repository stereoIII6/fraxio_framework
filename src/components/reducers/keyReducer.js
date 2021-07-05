import {
  GET_FRAMES,
  SET_KEY_ACTIVE,
  SET_KEY_INACTIVE,
  EDIT_KEY,
  SAVE_KEY,
  RESET_KEY,
} from "../action/types";
const initState = {
  keys: [],
  workingKey: {
    booly: false,
    layerID: 0,
    kid: 0,
    layerParams: {
      x: 0,
      y: 0,
      o: 1,
      r: 0,
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
      return {
        ...state,
        workingKey: action.payload,
      };
    case SET_KEY_INACTIVE:
      return {
        ...state,
        workingKey: initState.workingKey,
      };
    case EDIT_KEY:
      return {
        ...state,
        workingKey: action.payload,
      };
    case SAVE_KEY:
      return {
        ...state,
        keys: [action.payload, ...state.keys],
      };
    case RESET_KEY:
      return {
        ...state,
        workingKey: initState.workingKey,
      };
    default:
      return state;
  }
}
