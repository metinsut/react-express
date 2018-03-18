import { getSiteApi, signUpApi,loginApi } from "../services/webServices";
import { GET_LANG, GET_SITE, GET_RESULT } from "../constants/actionTypes";

//GET SITE DATA TO STORE
export const getSite = data => ({
      type: GET_SITE,
      payload: data
});

//GET AND CHANGE LANG
export const getLang = lang => ({
      type: GET_LANG,
      payload: lang
});

export const getResult = data => ({
      type: GET_RESULT,
      payload: data
});

//GET SITE INFO
export const getSiteData = () => dispatch => {
      getSiteApi().then(res => {
            if (res.data.success) {
                  dispatch(getSite(res.data.success));
            }
      });
};

export const signUp = data => dispatch => {
      signUpApi(data).then(res => {
            if (res.data) {
                  dispatch(getResult(res.data));
            }
      });
};

export const login = data => dispatch => {
      loginApi(data).then(res => {
            if (res.data.status) {
                  console.log(res.data);
                 localStorage.setItem("userToken",res.data.token)
            }
      });
};

