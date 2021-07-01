import {
  LOAD_PYES,
  PYES_LOADED,
  CREATE_PYE,
  DISCARD_PYE,
  DRAFT_PYE,
} from "../action/types";
const initState = {
  pyes: [],
  workingPYE: {},
  loadingPyes: false,
};

export default function(state = initState, action) {
  switch (action.type) {
    case CREATE_PYE:
      console.log("RED // ", action.payload);
      return {
        ...state,
        workingPYE: action.payload,
      };
    case DRAFT_PYE:
      console.log("RED // ", action.payload);
      return {
        ...state,
        workingPYE: action.payload,
      };
    case DISCARD_PYE:
      console.log("RED // empty PYE");
      return {
        ...state,
        workingPYE: {},
      };
    default:
      return state;
  }
}
