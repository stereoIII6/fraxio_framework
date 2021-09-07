import {
  DO_CREATE,
  DO_ORDER,
  GO_HOME,
  GRAB_FEED,
  GET_USER,
  GO_WALLET,
  GET_NFT_LIST,
  SET_FORMAT,
  DISCARD_TOKEN,
  ADD_SLICE,
  ACTIVATE_LAYER,
} from "../action/types";

const initState = {
  // visibility of subPages
  seeHome: true,
  seeEdit: false,
  seeWallet: false,
  seeOrders: false,
  seeSelect: false,
  seeDocs: false,
  seeLayers: false,
  seeFrames: false,
  // oracle data
  feeds: [],
  // user data
  user: {
    nik: "",
    adr: null,
    mlq: 0,
    eth: 0,
    nfts: [],
  },
  imlas: [],
  newImla: {
    activeL: null,
    activeK: 0,
    iData: {
      format: {
        name: "instagram",
        w: 1080,
        h: 1080,
      },
      token: {
        name: "",
        symbol: "",
        info: "",
        features: [],
      },
      layers: [],
    },
  },
};

export default function(state = initState, action) {
  switch (action.type) {
    case DO_CREATE:
      console.log("RED // ", action.type);
      return {
        ...state,
        seeHome: false,
        seeEdit: true,
        seeSelect: false,
        seeWallet: false,
        seeOrders: false,
      };
    case ADD_SLICE:
      console.log("RED // ", action.type, action.payload);
      return {
        ...state,
        seeHome: false,
        seeEdit: true,
        seeSelect: false,
        seeWallet: false,
        seeOrders: false,
        newImla: {
          ...state.newImla,
          iData: {
            format: state.newImla.iData.format,
            token: state.newImla.iData.token,
            layers: [...state.newImla.iData.layers, action.payload],
          },
        },
      };
    case ACTIVATE_LAYER:
      console.log("RED // ", action.type, action.payload);
      return {
        ...state,
        seeHome: false,
        seeEdit: true,
        seeSelect: false,
        seeWallet: false,
        seeOrders: false,
        newImla: {
          activeL: action.payload,
          activeK: 0,
          iData: state.newImla.iData,
        },
      };
    case DO_ORDER:
      console.log("RED // ", action.type);
      return {
        ...state,
        seeHome: false,
        seeEdit: false,
        seeSelect: false,
        seeWallet: false,
        seeOrders: true,
      };
    case GO_HOME:
      console.log("RED // ", action.type);
      return {
        ...state,
        seeHome: true,
        seeEdit: false,
        seeSelect: false,
        seeWallet: false,
        seeOrders: false,
      };
    case GO_WALLET:
      return {
        ...state,
        seeHome: false,
        seeEdit: false,
        seeSelect: false,
        seeWallet: true,
        seeOrders: false,
      };
    case GRAB_FEED:
      console.log("RED // ", action.type);
      return {
        ...state,
        feeds: action.payload,
      };
    case GET_NFT_LIST:
      console.log("RED // ", action.type, action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          nfts: action.payload,
        },
      };
    case SET_FORMAT:
      console.log("RED // ", action.type, action.payload);
      return {
        ...state,
        newImla: {
          iData: { ...state.iData, format: action.payload },
        },
      };
    case DISCARD_TOKEN:
      console.log("RED // ", action.type);
      return {
        ...state,
        seeHome: true,
        seeEdit: false,
        seeSelect: false,
        seeWallet: false,
        seeOrders: false,
        newImla: initState.newImla,
      };

    case GET_USER:
      console.log("RED // ", action.payload, action.net, action.balance);
      return {
        ...state,
        user: {
          ...state.user,
          nik: action.payload,
          adr: action.payload,
          net: action.net,
          mlq: action.balance,
          eth: action.eth,
        },
      };

    default:
      return state;
  }
}
