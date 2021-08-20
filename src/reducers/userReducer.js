import {
  DO_CREATE,
  DO_ORDER,
  GO_HOME,
  GRAB_FEED,
  GET_USER,
  GO_WALLET,
  GET_NFT_LIST,
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
    iData: {
      format: {
        name: "",
        w: 1080,
        h: 1080,
      },
      token: {
        name: "",
        symbol: "",
        info: "",
        features: [],
      },
      layers: [
        {
          lId: 0,
          lConf: {},
          lData: {},
          lFeed: {},
        },
      ],
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
