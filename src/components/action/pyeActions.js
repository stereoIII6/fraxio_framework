import {
  LOAD_PYES,
  UPD_PYE_NAME,
  UPD_PYE_SYM,
  UPD_PYE_DESC,
  UPD_PYE_X,
  UPD_PYE_Y,
  CREATE_PYE,
  DRAFT_PYE,
  MINT_PYE,
} from "./types";

export const getPyeAssets = (feed) => {
  console.log("ACTION // get pyes ");
  return {
    type: LOAD_PYES,
    payload: feed,
  };
};

export const getPyeData = (feed) => {
  console.log("ACTION // get pye Data ");
  return {
    type: LOAD_PYES,
    payload: feed,
  };
};

export const createPye = (feed) => {
  console.log("ACTION // get pyes ");
  return {
    type: CREATE_PYE,
    payload: feed,
  };
};

export const updateWPname = (feed) => {
  console.log("ACTION // update pye name ");
  return {
    type: UPD_PYE_NAME,
    payload: feed,
  };
};
export const updateWPsym = (feed) => {
  console.log("ACTION // update pye symbol");
  return {
    type: UPD_PYE_SYM,
    payload: feed,
  };
};
export const updateWPdesc = (feed) => {
  console.log("ACTION // update pye description");
  return {
    type: UPD_PYE_DESC,
    payload: feed,
  };
};
export const updateWPfx = (feed) => {
  console.log("ACTION // update pye format width");
  return {
    type: UPD_PYE_X,
    payload: feed,
  };
};
export const updateWPfy = (feed) => {
  console.log("ACTION // update pye format height");
  return {
    type: UPD_PYE_Y,
    payload: feed,
  };
};
export const discardPye = () => {
  console.log("ACTION // discard PYE ");
  return {
    type: CREATE_PYE,
    payload: {},
  };
};
