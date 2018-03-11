import { combineReducers } from "redux";
import siteLayout from "./siteLayout";
import siteLang from "./siteLang";

const reducers = combineReducers({
      siteLayout,
      siteLang
});

export default reducers;
