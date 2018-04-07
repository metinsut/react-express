import * as S from "../services/webServices";
import * as A from "../constants/actionTypes";

//GET SITE DATA TO STORE
export const getSite = data => ({
      type: A.GET_SITE,
      payload: data
});

//GET AND CHANGE LANG
export const getLang = lang => ({
      type: A.GET_LANG,
      payload: lang
});

export const getResult = data => ({
      type: A.FORM_RESULT,
      payload: data
});

export const statusLogin = data => ({
      type: A.STATUS_LOGIN,
      payload: data
});

export const getUser = data => ({
      type: A.GET_USER,
      payload: data
});

export const clearGetUser = () => ({
      type: A.CLEAR_GET_USER
});

//GET SITE INFO
export const getSiteData = () => dispatch => {
      S.getSiteApi().then(res => {
            if (res.data.success) {
                  dispatch(getSite(res.data.success));
            }
      });
};

export const signUp = data => dispatch => {
      S.signUpApi(data).then(res => {
            if (res.data) {
                  dispatch(getResult(res.data));
            }
      });
};

export const login = data => dispatch => {
      S.loginToken(data).then(res => {
            if (res.data.status) {
                  localStorage.setItem("userToken", res.data.token);
                  localStorage.setItem("userName", res.data.name);
                  dispatch(statusLogin(res.data));
            } else {
                  dispatch(statusLogin(res.data));
            }
      });
};

export const logOut = () => dispatch => {
      const token = localStorage.getItem("userToken");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userName");
      return S.leaveUser({ token: token }).then(res => {
            if (res.data) {
                  dispatch(statusLogin(res.data));
            }
      });
};

export const getAccount = token => dispatch => {
      S.getAccountData({ token: token }).then(res => {
            if (res.data.success) {
                  dispatch(getUser(res.data.success));
            }
      });
};

export const updateUser = data => dispatch => {
      S.updateAccountData(data).then(res => {
            if (res.data.success) {
                  dispatch(getResult(res.data.success));
            }
      });
};
