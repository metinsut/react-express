import { combineReducers } from "redux";
import siteLayout from "./siteLayout";
import siteLang from "./siteLang";
import formResult from "./formResult";
import statusLogin from "./statusLogin";
import getUser from "./getUser";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
   siteLayout,
   siteLang,
   formResult,
   statusLogin,
   getUser,
   form: formReducer
});

export default reducers;
