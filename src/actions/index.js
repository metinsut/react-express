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

// export const getUser = data => ({
//    type: A.GET_USER,
//    payload: data
// });

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
         dispatch(statusLogin(res.data));
      //    S.loginUser(data.email, res.data.token).then(res => {
      //       if (res.data.success) {
      //          dispatch.getUser(res.data.success);
      //       }
      //    });
      } else {
         dispatch(statusLogin(res.data));
      }
   });
};

export const logOut = () => dispatch => {
   const token = localStorage.getItem("userToken");
   localStorage.removeItem("userToken");
   S.leaveUser({"token":token}).then(res => {
      if (res.data) {
         dispatch(statusLogin(res.data));
      }
   });
};
