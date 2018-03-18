import { combineReducers } from "redux";
import siteLayout from "./siteLayout";
import siteLang from "./siteLang";
import formResult from "./result";

const reducers = combineReducers({
      siteLayout,
      siteLang,
      formResult
});

export default reducers;
