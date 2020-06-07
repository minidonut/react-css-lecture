import { combineReducers } from "redux";
import { facebookReducer } from "./facebookReducer";
import { watchaReducer } from "./watchaReducer";
import { instagramReducer } from "./instagramReducer";


export default combineReducers({
  facebook: facebookReducer,
  watcha: watchaReducer,
  instagram: instagramReducer,
});
