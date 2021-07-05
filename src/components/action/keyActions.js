import {
  SET_KEY_ACTIVE,
  SET_KEY_INACTIVE,
  ADD_KEY,
  DELETE_KEY,
  EDIT_KEY,
  SAVE_KEY,
  RESET_KEY,
} from "./types";

export const setWork = (feed) => {
  console.log("ACT set key to work // ");
  return {
    type: SET_KEY_ACTIVE,
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
export const resetKey = () => {
  console.log("ACT reset key // ");
  return {
    type: RESET_KEY,
  };
};

export const quitWork = () => {
  console.log("ACT quit work // ");
  return {
    type: SET_KEY_INACTIVE,
  };
};

/* */
