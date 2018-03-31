import { combineReducers } from "redux";
import siteLayout from "./siteLayout";
import siteLang from "./siteLang";
import formResult from "./formResult";
import statusLogin from "./statusLogin";

const reducers = combineReducers({
      siteLayout,
      siteLang,
      formResult,
      statusLogin
});

export default reducers;
