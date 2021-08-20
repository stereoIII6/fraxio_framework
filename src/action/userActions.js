import {
  DO_CREATE,
  DO_ORDER,
  GO_HOME,
  GRAB_FEED,
  GET_USER,
  GO_WALLET,
  GET_NFT_LIST,
} from "./types";

export const onCreateNow = () => {
  console.log("create pushed");
  return { type: DO_CREATE };
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
