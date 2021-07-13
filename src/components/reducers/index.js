import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import pyeReducer from "./pyeReducer";
import userReducer from "./userReducer";

export default combineReducers({
  errorState: errorReducer,
  pyeState: pyeReducer,
  userState: userReducer,
});
