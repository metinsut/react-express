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

export const loginStatus = data => ({
      type: A.LOGIN_STATUS,
      payload: data
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
      S.loginApi(data).then(res => {
            if (res.data.status) {
                  localStorage.setItem("userToken", res.data.token);
                  dispatch(loginStatus(res.data));
            } else {
                  dispatch(loginStatus(res.data));
            }
      });
};

export const logOut = () => dispatch => {
      const data = {
            status:false,
            token:null
      }
      localStorage.removeItem("userToken");
      dispatch(loginStatus(data));
};
