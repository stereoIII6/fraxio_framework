import {
  LOAD_PYES,
  PYES_LOADED,
  CREATE_PYE,
  DISCARD_PYE,
  DRAFT_PYE,
  UPD_PYE_NAME,
  UPD_PYE_SYM,
  UPD_PYE_DESC,
  UPD_PYE_X,
  UPD_PYE_Y,
} from "../action/types";
const initState = {
  pyes: [],
  workingPYE: {
    formatX: 8,
    formatY: 8,
  },
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
    case UPD_PYE_NAME:
      console.log("RED update PYE name // ", action.payload);
      return {
        ...state,
        workingPYE: {
          name: action.payload,
        },
      };
    case UPD_PYE_DESC:
      console.log("RED update PYE description // ", action.payload);
      return {
        ...state,
        workingPYE: {
          desc: action.payload,
        },
      };
    case UPD_PYE_SYM:
      console.log("RED update PYE symbol // ", action.payload);
      return {
        ...state,
        workingPYE: {
          symbol: action.payload,
        },
      };
    case DISCARD_PYE:
      console.log("RED // empty PYE");
      return state;
    default:
      return state;
  }
}
