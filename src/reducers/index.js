import { combineReducers } from "redux";
import siteLayout from "./siteLayout";
import lang from "./lang";

const reducers = combineReducers({
      siteLayout,
      lang
});

export default reducers;
