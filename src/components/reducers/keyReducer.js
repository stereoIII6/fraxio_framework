import { GET_FRAMES, SET_KEY_ACTIVE, SET_KEY_INACTIVE } from "../action/types";
const initState = {
  keys: [],
  workingKey: { booly: false, layerID: 0 },
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
        workingKey: { booly: false, layerID: 0 },
      };
    default:
      return state;
  }
}
