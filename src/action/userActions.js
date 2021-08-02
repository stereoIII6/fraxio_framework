import { DO_CREATE, GO_HOME, GRAB_FEED, GET_USER } from "./types";

export const onCreateNow = () => {
  console.log("create pushed");
  return { type: DO_CREATE };
};

export const onGoHome = () => {
  console.log("back home");
  return { type: GO_HOME };
};

export const grabFeed = (feed) => {
  console.log("ACT feed // ", feed);
  return { type: GRAB_FEED, payload: feed };
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
