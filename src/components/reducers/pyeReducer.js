import {
  // PYE RED
  LOAD_SAMPLES,
  LOAD_DRAFTS,
  START_BAKING,
  RESET_PYE,
  DISCARD_PYE,
  SAVE_DRAFT, // GRAPH PUSH
  PYE_GO_OVEN, // LAYER RED
  START_SLICING,
  EDIT_SLICE,
  SAVE_SLICE,
  ACTIVATE_SLICE,
  RESET_SLICE,
  DISCARD_SLICE,
  GRAB_STATE, // KEY RED
  START_FRAMING,
  ADD_FRAME,
  ACTIVATE_FRAME,
  RESET_FRAME,
  EDIT_FRAME,
  SAVE_FRAME,
  DISCARD_FRAME,
  GET_FEED,
} from "../action/types";
const initState = {
  pyeDrafts: [],
  pyeSamples: [],
  pyes: [],
  bake: false,
  slice: false,
  activeL: 0, // active LayerID
  frame: false,
  kopn: false,
  activeK: 0,
  stateK: null,
  priceFeeds: [],
  PYE: {
    id: 0,
    vrf: false,
    author: 0x0,
    name: "Asset-Name",
    symbol: "Asset-Symbol",
    description: "Asset-Description",
    format: {
      // Token Format
      formatX: 8, // Token width
      formatY: 8, // Token height
    },

    layers: [
      {
        layerID: 0, // layerID
        layerName: null, // layerName
        layerType: "no", // Type of Layer // empty / image / text / form / audio / video
        layerData: {
          access: {
            private: false,
            limitedTo: [],
          }, // access object
          file: null, // IPFS hash
          text: null, // text to display in text layer
          font: null, // font to display in text layer
        },
        layerOracle: {
          // oracle object
          type: "",
          name: null, // Oracle Feed Name
          stamps: [], // THE GRAPH IMPORT timestamps of Oracle
          starter: null, // Initial Custom Start Price at Mint // Default Real Time Value NOW
        },
        exTrigger: {
          // External Trigger Object
          abi: null, // contract ABI
          contractAdr: null, // contract address
          funcName: null, // function to call
          funcParams: null, // params to call in function (optional)
        },
        keys: [
          {
            keyID: 0,
            keyParams: {
              v: 0, // oracle value TRIGGER
              e: false, // external triggered by thhis key boolean
              x: 0, // x position in % (-100 - 100)
              y: 0, // y position in % (-100 - 100)
              z: 90, // fixed scale (10 - 500)
              p: 0, // x/y ratio // default 0(1:1) // min -1(10:1) max 1(1:10)
              o: 100, // opacity (0 - 100)
              r: 0, // rotation (-360 - 360)
              b: 0, // border thickness (1 - 5)
              c: null, // font and border color in #HEX // (#000000 - #ffffff)
              h: null, // bgcolor in #HEX // (#000000 - #ffffff)
              lc: 0, // left cut in timeline from start // video and audio only
              rc: 0, // right cut in timeline from end // video and audio only
              pl: false, // play timeline // video and audio only
              re: false, // restart play timeline // video and audio only
              ps: 0, // pause in timeline // video and audio only
              gp: 0,
              gs: 0,
              st: false, // stop and reset// video and audio only
              lp: false, // loop // video and audio only
              vl: 63, // audio volume // video and audio only
              pn: 63, // l r pan //
            },
          },
        ],
      },
    ],
  },

  INIT: {
    // Initial State at creation of NEW PYE Tokens
    id: 0, // saves ID in Object
    vrf: false, // optional VRF ID for Token
    author: null, // author address
    owners: [], // chrono list of owners of the token
    name: null, // Token Name
    symbol: null, // Token Symbol
    description: null, // Token Description
    format: {
      // Token Format
      formatX: 8, // Token width
      formatY: 8, // Token height
    },

    layers: [
      {
        layerID: 0, // layerID
        layerName: null, // layerName
        layerType: null, // Type of Layer // empty / image / text / form / audio / video
        layerData: {
          access: {
            private: false,
            limitedTo: [],
          }, // access object
          file: null, // IPFS hash
          text: null, // text to display in text layer
          font: null, // font to display in text layer
        },
        layerOracle: {
          // oracle object
          type: "",
          name: null, // Oracle Feed Name
          stamps: [], // THE GRAPH IMPORT timestamps of Oracle
          starter: null, // Initial Custom Start Price at Mint // Default Real Time Value NOW
        },
        exTrigger: {
          // External Trigger Object
          abi: null, // contract ABI
          contractAdr: null, // contract address
          funcName: null, // function to call
          funcParams: null, // params to call in function (optional)
        },
        keys: [
          {
            keyID: 0,
            keyParams: {
              v: 0, // oracle value TRIGGER
              e: false, // external triggered by thhis key boolean
              x: 0, // x position in % (-100 - 100)
              y: 0, // y position in % (-100 - 100)
              z: 90, // fixed scale (10 - 500)
              p: 0, // x/y ratio // default 0(1:1) // min -1(10:1) max 1(1:10)
              o: 100, // opacity (0 - 100)
              r: 0, // rotation (-360 - 360)
              b: 0, // border thickness (1 - 5)
              c: null, // font and border color in #HEX // (#000000 - #ffffff)
              h: null, // bgcolor in #HEX // (#000000 - #ffffff)
              lc: 0, // left cut in timeline from start // video and audio only
              rc: 0, // right cut in timeline from end // video and audio only
              pl: false, // play timeline // video and audio only
              re: false, // restart play timeline // video and audio only
              ps: 0, // pause in timeline // video and audio only
              gp: 0,
              gs: 0,
              st: false, // stop and reset// video and audio only
              lp: false, // loop // video and audio only
              vl: 63, // audio volume // video and audio only
              pn: 63, // l r pan //
            },
          },
        ],
      },
    ],
  },
};

export default function(state = initState, action) {
  switch (action.type) {
    case LOAD_SAMPLES:
      console.log(
        "Fractio Framework :: RED// Load PYE Samples :: ",
        action.payload
      );
      return {
        ...state,
        pyeSamples: action.payload,
      };
    case LOAD_DRAFTS:
      console.log(
        "Fractio Framework :: RED// Loading your PYE  Drafts :: ",
        action.payload
      );
      return {
        ...state,
        pyeDrafts: action.payload,
      };
    case START_BAKING:
      console.log(
        "Fractio Framework :: RED// Creating a Digital Asset :: ",
        action.payload
      );
      return {
        ...state,
        bake: true,
        slice: true,
        PYE: action.payload,
      };
    case RESET_PYE:
      console.log("Fractio Framework :: RED// Reset PYE to initial :: ");
      return {
        ...state,
        PYE: { ...state.PYE, activeL: 0, layers: state.INIT.layers },
      };
    case DISCARD_PYE:
      console.log("Fractio Framework :: RED// Discard PYE :: ");
      return {
        ...state,
        bake: false,
        slice: false,
        frame: false,
        kopn: false,
        activeL: 0,
        PYE: state.INIT,
      };
    case SAVE_DRAFT:
      console.log(
        "Fractio Framework :: RED// Saving your draft to THE GRAPH :: ",
        action.payload
      );
      return {
        ...state,
        pyeDrafts: [...state.pyeDrafts, action.payload],
      };
    case PYE_GO_OVEN:
      console.log(
        "Fractio Framework :: RED// Going to Mint your Asset :: ",
        action.payload
      );
      return {
        ...state,
        pyes: action.payload,
      };
    case ACTIVATE_SLICE:
      console.log(
        "Fractio Framework :: RED// Add a new Layer to your Asset :: ",
        action.payload
      );
      return {
        ...state,
        bake: true,
        slice: true,
        frame: true,
        activeL: action.payload,
        activeK: 0,
      };
    case START_SLICING:
      console.log(
        "Fractio Framework :: RED// Add a new Layer to your Asset :: ",
        action.payload,
        action.id
      );
      return {
        ...state,
        bake: true,
        slice: true,
        activeL: action.id,
        PYE: {
          ...state.PYE,
          layers: action.payload,
        },
      };
    case ADD_FRAME:
    case EDIT_SLICE:
      console.log(
        "Fractio Framework :: RED// Editing Layer of your Asset :: Layer",
        state.activeL,
        action.payload
      );
      return {
        ...state,
        PYE: {
          ...state.PYE,
          layers: action.payload,
        },
      };
    case EDIT_FRAME:
      console.log(
        "Fractio Framework :: RED// Editing Frame of Layer of your Asset :: Layer",
        state.activeL,
        action.payload
      );
      return {
        ...state,
        PYE: {
          ...state.PYE,
          layers: action.payload,
        },
      };
    case SAVE_SLICE:
      console.log(
        "Fractio Framework :: RED// Save Layer of your Asset :: Layer"
      );
      return {
        ...state,
        frame: false,
        kopn: false,
      };
    case SAVE_FRAME:
      console.log(
        "Fractio Framework :: RED// Save Layer of your Asset :: Layer"
      );
      return {
        ...state,
        kopn: false,
      };
    case DISCARD_SLICE:
      console.log(
        "Fractio Framework :: RED// Editing Layer of your Asset :: Layer",
        state.activeL,
        action.payload
      );
      return {
        ...state,
        kopn: false,
        activeL: 0,
        PYE: {
          ...state.PYE,
          layers: action.payload,
        },
      };
    case START_FRAMING:
    case RESET_FRAME:
    case DISCARD_FRAME:
      console.log(
        "Fractio Framework :: RED// Editing Keys of your Assets Layer :: Layer ",
        state.activeL,
        action.payload
      );
      return {
        ...state,
        frame: false,
        kopn: false,
        PYE: {
          ...state.PYE,
          layers: action.payload,
        },
      };
    case GRAB_STATE:
      console.log(
        "Fractio Framework :: RED// Export State from Assets Frame  :: Frame ",
        state.activeK,
        action.payload
      );
      return {
        ...state,
        activeK: action.payload,
      };
    case ACTIVATE_FRAME:
      console.log(
        "Fractio Framework :: RED// Activate Keys of your Assets Layer :: Layer ",
        action.payload
      );
      return {
        ...state,
        kopn: true,
        activeK: action.payload,
        stateK: action.key,
      };
    default:
      return state;
  }
}
