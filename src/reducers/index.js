import { combineReducers } from "redux";
import siteLayout from "./siteLayout";
import siteLang from "./siteLang";
import formResult from "./formResult";
import loginStatus from "./loginStatus";

const reducers = combineReducers({
      siteLayout,
      siteLang,
      formResult,
      loginStatus
});

export default reducers;
