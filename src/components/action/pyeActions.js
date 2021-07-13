import {
  LOAD_SAMPLES,
  LOAD_DRAFTS,
  START_BAKING,
  RESET_PYE,
  DISCARD_PYE,
  SAVE_DRAFT, // GRAPH PUSH
  PYE_GO_OVEN, // GRAPH PUSH
  START_SLICING,
  EDIT_SLICE,
  ACTIVATE_SLICE,
  RESET_SLICE,
  DISCARD_SLICE,
  GRAB_STATE,
  PUSH_STATE,
  START_FRAMING,
  ADD_FRAME,
  ACTIVATE_FRAME,
  RESET_FRAME,
  EDIT_FRAME,
  DISCARD_FRAME,
} from "./types";

// INPUT // array of Sample PYES
export const loadSamples = (samples) => {
  console.log("ACT// Get PYE sample Tokens // ");
  return {
    type: LOAD_SAMPLES,
    payload: samples,
  };
};
// INPUT // array of DRAFT PYES
export const loadDrafts = (drafts) => {
  console.log("ACT// Get your PYE Draft Saved Tokens // ", drafts);
  return {
    type: LOAD_DRAFTS,
    payload: drafts,
  };
};
// INPUT // new PYE Object
export const startBaking = (initPYE) => {
  console.log("ACTION // create your digital asset ", initPYE);
  return {
    type: START_BAKING,
    payload: initPYE,
  };
};
// INPUT // no
export const resetPYE = () => {
  console.log("ACTION // reset Asset to your base settings ");
  return {
    type: RESET_PYE,
  };
};
// INPUT // no
export const discardPYE = () => {
  console.log("ACTION // discard Asset");
  return {
    type: DISCARD_PYE,
  };
};
// INPUT // draft PYE Object
export const saveDraft = (PYE) => {
  console.log("ACTION // save Draft of current version of your Asset ");
  return {
    type: SAVE_DRAFT,
    payload: PYE,
  };
};
// INPUT // final PYE Object
export const mintPYE = (PYE) => {
  console.log("ACTION // mint current version of your Asset ");
  return {
    type: PYE_GO_OVEN,
    payload: PYE,
  };
};
// INPUT // array of LAYERS
export const startSlicing = (LAYERS, ID) => {
  console.log("ACTION // create new layer in your Asset ", LAYERS, ID);
  return {
    type: START_SLICING,
    payload: LAYERS,
    id: ID,
  };
};
// INPUT // array of LAYERS
export const editSlice = (LAYERS) => {
  console.log("ACTION // edit layer in your Asset ", LAYERS);
  return {
    type: EDIT_SLICE,
    payload: LAYERS,
  };
};
// INPUT // LAYER ID
export const activateSlice = (ID) => {
  console.log("ACTION // activate layer in your Asset ", ID);
  return {
    type: ACTIVATE_SLICE,
    payload: ID,
  };
};
// INPUT // array of LAYERS
export const resetSlice = (LAYERS) => {
  console.log("ACTION // reset layer in your Asset ", LAYERS);
  return {
    type: RESET_SLICE,
    payload: LAYERS,
  };
};
// INPUT // array of LAYERS
export const discardSlice = (LAYERS) => {
  console.log("ACTION // discard layer in your Asset ", LAYERS);
  return {
    type: DISCARD_SLICE,
    payload: LAYERS,
  };
};
// INPUT // Key Params Object
export const grabState = (PARAMS) => {
  console.log("ACTION // discard layer in your Asset ", PARAMS);
  return {
    type: GRAB_STATE,
    payload: PARAMS,
  };
};
// INPUT // Key Params Object
export const pushState = (PARAMS) => {
  console.log("ACTION // discard layer in your Asset ", PARAMS);
  return {
    type: PUSH_STATE,
    payload: PARAMS,
  };
};
// INPUT // array of LAYERS
export const startFraming = (LAYERS) => {
  console.log("ACTION // First Frame of Layer in your Asset ", LAYERS);
  return {
    type: START_FRAMING,
    payload: LAYERS,
  };
};
// INPUT // array of LAYERS
export const addFrame = (LAYERS) => {
  console.log("ACTION // create new Frame of Layer in your Asset ", LAYERS);
  return {
    type: ADD_FRAME,
    payload: LAYERS,
  };
};
// INPUT // KEY ID
export const activateFrame = (ID, KEY) => {
  console.log("ACTION // activate Key of Layer in your Asset ", ID);
  return {
    type: ACTIVATE_FRAME,
    payload: ID,
    kopn: KEY,
  };
};
// INPUT // array of LAYERS
export const resetFrame = (LAYERS) => {
  console.log("ACTION // create new Frame of Layer in your Asset ", LAYERS);
  return {
    type: RESET_FRAME,
    payload: LAYERS,
  };
};
// INPUT // array of LAYERS
export const editFrame = (LAYERS) => {
  console.log("ACTION // create new Frame of Layer in your Asset ", LAYERS);
  return {
    type: EDIT_FRAME,
    payload: LAYERS,
  };
};
// INPUT // array of LAYERS
export const discardFrame = (LAYERS) => {
  console.log("ACTION // create new Frame of Layer in your Asset ", LAYERS);
  return {
    type: DISCARD_FRAME,
    payload: LAYERS,
  };
};
