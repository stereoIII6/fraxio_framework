import {
  LOAD_USERS,
  USERS_LOADED,
  SET_SCREEN_MODE,
  GET_ERC721_TX,
  GET_FEEDS,
} from "../action/types";

const initState = {
  users: [],
  net: "",
  bal: null,
  erc721s: [],
  loadingUsers: false,
  screenMode: "landing_lnk",
  cols: {
    lighting: "dark",
    light: {
      bg1: "#e2e3db", // grey
      bg2: "#9f95c3", // purple
      bg3: "#7c9cb6", // palm
      c1: "9fe6c3", // mint
      c2: "121212", // dark grey
      c3: "#aad9d8", // sky
      w: "ivory", // white
      b: "011001", // almost black
      r: "tomato", // red
    },
    dark: {
      bg1: "121212",
      bg2: "9fe6c3",
      c3: "#7c9cb6",
      c1: "#9f95c3",
      c2: "#e2e3db",
      bg3: "#aad9d8",
      w: "011001",
      b: "ivory",
      r: "tomato",
    },
    irie: {
      bg1: "#e2e3db",
      bg2: "#9f95c3",
      bg3: "#7c9cb6",
      c1: "9fe6c3",
      c2: "121212",
      c3: "#aad9d8",
      w: "ivory",
      b: "011001",
      r: "tomato",
    },
    patriot: {
      bg1: "#e2e3db",
      bg2: "#9f95c3",
      bg3: "#7c9cb6",
      c1: "9fe6c3",
      c2: "121212",
      c3: "#aad9d8",
      w: "ivory",
      b: "011001",
      r: "tomato",
    },
  },
};

export default function(state = initState, action) {
  switch (action.type) {
    case LOAD_USERS:
      console.log("RED // User", action.payload);
      return {
        ...state,
        users: action.payload,
        net: action.net,
        bal: action.bal,
        loadingUsers: false,
      };
    case SET_SCREEN_MODE:
      return {
        ...state,
        screenMode: action.payload,
      };
    case GET_ERC721_TX:
      return {
        ...state,
        erc721s: [action.payload],
      };
    case GET_FEEDS:
      return {
        ...state,
        feeds: action.payload,
      };
    default:
      return state;
  }
}
