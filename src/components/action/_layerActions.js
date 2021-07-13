import {
  LOAD_LAYERS,
  ADD_LAYER,
  DEL_LAYER,
  EDIT_LAYER,
  EDIT_LAYERS,
  MOVE_LAYER,
  DISC_LAYERS,
  SAVE_LAYER,
  BAKE_FS,
  BAKE_ORACLE,
  BAKE_EXT,
  SAVE_KEYS_2_LAYER,
  UPDATE_LAYER,
  LOAD_WORK_LAYER,
} from "./types";

export const loadLayer2work = (layer) => {
  return {
    type: LOAD_WORK_LAYER,
    payload: layer,
  };
};

export const saveKeys2Layer = (keys) => {
  return {
    type: SAVE_KEYS_2_LAYER,
    payload: keys,
  };
};

export const updateLayer = () => {
  return {
    type: UPDATE_LAYER,
  };
};
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

export const editLayers = (edited) => {
  console.log("action edit layer", edited);

  return {
    type: EDIT_LAYERS,
    payload: edited,
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
export const discardLayers = () => {
  return {
    type: DISC_LAYERS,
  };
};
