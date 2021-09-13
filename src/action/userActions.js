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
  SET_ALPHA,
  SET_MOVE,
  SET_SCALE,
  SET_TURN,
} from "./types";

export const addSlice = (newSlice) => {
  console.log("layer added", newSlice);
  return { type: ADD_SLICE, payload: newSlice };
};
export const discardToken = () => {
  console.log("token discarded");
  return { type: DISCARD_TOKEN };
};

export const onCreateNow = () => {
  console.log("create pushed");
  return { type: DO_CREATE };
};
export const activateLayer = (lId) => {
  console.log("activate Layer ", lId);
  return { type: ACTIVATE_LAYER, payload: lId };
};
export const setFormat = (format) => {
  console.log("set format pushed");
  return { type: SET_FORMAT, payload: format };
};
export const setAlpha = (layers) => {
  console.log("set format pushed");
  return { type: SET_ALPHA, payload: layers };
};
export const setMove = (layers) => {
  console.log("set format pushed");
  return { type: SET_MOVE, payload: layers };
};
export const setScale = (layers) => {
  console.log("set scale pushed");
  return { type: SET_SCALE, payload: layers };
};
export const setTurn = (layers) => {
  console.log("set format pushed");
  return { type: SET_TURN, payload: layers };
};
export const onOrderNow = () => {
  console.log("order clicked");
  return { type: DO_ORDER };
};

export const onGoHome = () => {
  console.log("back home");
  return { type: GO_HOME };
};
export const onGoWallet = () => {
  console.log("back home");
  return { type: GO_WALLET };
};

export const grabFeed = (feed) => {
  console.log("ACT feed // ", feed);
  return { type: GRAB_FEED, payload: feed };
};
export const getNFTList = (feed) => {
  console.log("ACT feed // ", feed);
  return { type: GET_NFT_LIST, payload: feed };
};

export const getUser = (accounts, network, balance, eth) => {
  console.log("ACT get user // ", accounts[0], network, balance, eth);
  return {
    type: GET_USER,
    payload: accounts[0],
    net: network,
    balance: balance,
    eth: eth,
  };
};
