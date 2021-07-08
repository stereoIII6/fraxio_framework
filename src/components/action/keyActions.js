import {
  SET_KEY_ACTIVE,
  SET_KEY_INACTIVE,
  ADD_KEY,
  DELETE_KEY,
  ADD_KEY_DOWN,
  ADD_KEY_UP,
  EDIT_KEY,
  SAVE_KEY,
  SAVE_KEYS,
  RESET_KEY,
  UPDATE_KEY,
} from "./types";

export const setWork = (feed) => {
  console.log("ACT set key to work // ");
  return {
    type: SET_KEY_ACTIVE,
    payload: feed,
  };
};
export const edit = (feed) => {
  console.log("ACT edit // ");
  return {
    type: EDIT_KEY,
    payload: feed,
  };
};
export const editKey = (feed) => {
  console.log("ACT edit key // ", feed);
  return {
    type: EDIT_KEY,
    payload: feed,
  };
};
export const saveKey = (feed) => {
  console.log("ACT save key to array// ", feed);
  return {
    type: SAVE_KEY,
    payload: feed,
  };
};
export const addKeyUp = (feed) => {
  console.log("ACT save key to array// ", feed);
  return {
    type: ADD_KEY_UP,
    payload: feed,
  };
};
export const addKeyDown = (feed) => {
  console.log("ACT save key to array// ", feed);
  return {
    type: ADD_KEY_DOWN,
    payload: feed,
  };
};
export const saveKeys = (feed) => {
  console.log("ACT save key to array// ", feed);
  return {
    type: SAVE_KEYS,
    payload: feed,
  };
};
export const resetKey = () => {
  console.log("ACT reset key // ");
  return {
    type: RESET_KEY,
  };
};
export const updateKey = () => {
  console.log("ACT reset key // ");
  return {
    type: UPDATE_KEY,
  };
};

export const quitWork = () => {
  console.log("ACT quit work // ");
  return {
    type: SET_KEY_INACTIVE,
  };
};

/* */
