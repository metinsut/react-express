import { combineReducers } from "redux";
import siteLayout from "./siteLayout";
import siteLang from "./siteLang";
import formResult from "./formResult";
import statusLogin from "./statusLogin";
import getUser from "./getUser";

const reducers = combineReducers({
   siteLayout,
   siteLang,
   formResult,
   statusLogin,
   getUser
});

export default reducers;
