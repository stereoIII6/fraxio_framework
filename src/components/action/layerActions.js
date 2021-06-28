import {
  LOAD_LAYERS,
  ADD_LAYER,
  DEL_LAYER,
  EDIT_LAYER,
  MOVE_LAYER,
  BAKE_FS,
  BAKE_ORACLE,
  BAKE_EXT,
} from "./types";
/* 
export const getLayers = () => (dispatch) => {
    console.log("action get layers");
    dispatch(setLoadLayer());
};

export const getPriceFeeds = (feed) => {
    console.log("action get prices // ", feed);
    return {
        type: GET_FEED,
        payload: feed
    }
};

/* */

export const addLayer = (newLayer) => {
  console.log("add ACT //", newLayer);
  return {
    type: ADD_LAYER,
    payload: newLayer,
  };
};

export const deleteLayer = (newLayers) => {
  console.log("action delete layer", newLayers);
  return {
    type: DEL_LAYER,
    payload: newLayers,
  };
};

export const editLayer = (edited) => {
  console.log("action edit layer", edited);
  return {
    type: EDIT_LAYER,
    payload: edited,
  };
};

export const moveLayer = () => {
  return {
    type: MOVE_LAYER,
  };
};
