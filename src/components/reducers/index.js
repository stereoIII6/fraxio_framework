
import { combineReducers } from "redux";
import layerReducer from "./layerReducer";
import keyReducer from "./keyReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    layerState: layerReducer,
    errorState: errorReducer,
    keyState: keyReducer

});