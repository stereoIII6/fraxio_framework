import {
  SET_KEY_ACTIVE,
  SET_KEY_INACTIVE,
  ADD_KEY,
  DELETE_KEY,
  EDIT_KEY,
  SAVE_KEY,
} from "./types";

export const setWork = (feed) => {
  console.log("ACT set key to work // ");
  return {
    type: SET_KEY_ACTIVE,
    payload: feed,
  };
};

export const quitWork = () => {
  console.log("ACT quit work // ");
  return {
    type: SET_KEY_INACTIVE,
  };
};

/* */
