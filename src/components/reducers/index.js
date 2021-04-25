
import { combineReducers } from "redux";
import layerReducer from "./layerReducer";
import keyReducer from "./keyReducer";
import errorReducer from "./errorReducer";
import pyeReducer from "./pyeReducer";
import userReducer from "./userReducer";


export default combineReducers({
    layerState: layerReducer,
    errorState: errorReducer,
    keyState: keyReducer,
    pyeState: pyeReducer,
    userState: userReducer

});