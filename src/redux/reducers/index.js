import { combineReducers } from "redux";
import { facebookReducer } from "./facebookReducer";
import { watchaReducer } from "./watchaReducer";


export default combineReducers({
  facebook: facebookReducer,
  watcha: watchaReducer,
});
