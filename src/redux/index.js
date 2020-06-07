import { createStore } from "redux";
import reducers from "./reducers";

let storeCache = undefined;
const initStore = () => {
  if (storeCache) return storeCache;

  return createStore(reducers);
};


export default initStore();
