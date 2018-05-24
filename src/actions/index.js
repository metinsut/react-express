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

export const getAcc = data => ({
    type: A.GET_ACC,
    payload: data
});

export const getUsersReducer = data => ({
    type: A.GET_USERS,
    payload: data
});

export const getUserReducer = data => ({
    type: A.GET_USER,
    payload: data
});

export const clearGetUser = () => ({
    type: A.CLEAR_GET_ACC
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

export const getAccount = () => dispatch => {
    const token = localStorage.getItem("userToken");
    S.getAccountData({ token: token }).then(res => {
        if (res.data.success) {
            dispatch(getAcc(res.data.success));
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

export const updateUserEmail = data => dispatch => {
    S.updateAccountEmail(data).then(res => {
        if (res.data.success) {
            dispatch(getResult(res.data.success));
        }
    });
};

export const updateUserPassword = data => dispatch => {
    S.updateAccountPassword(data).then(res => {
        if (res.data.success) {
            dispatch(getResult(res.data.success));
        }
    });
};

export const updateCompany = data => dispatch => {
    S.pushNewUserCompany(data).then(res => {
        if (res.data.success) {
            dispatch(getResult(res.data.success));
        }
    });
};

export const editCompany = data => dispatch => {
    S.editUserCompany(data).then(res => {
        if (res.data.success) {
            dispatch(getResult(res.data.success));
        }
    });
};

export const deleteCompany = data => dispatch => {
    S.deleteUserCompany(data).then(res => {
        if (res.data.success) {
            dispatch(getResult(res.data.success));
        }
    });
};

export const uploadFile = data => dispatch => {
    S.uploadImage(data).then(res => {
        if (res.data.success) {
            dispatch(getResult(res.data.success));
        }
    });
};

export const getUsers = data => dispatch => {
    const token = localStorage.getItem("userToken");
    S.getUsers({ token: token }).then(res => {
        if (res.data.success) {
            dispatch(getUsersReducer(res.data.success));
        }
    });
};

export const getUser = data => dispatch => {
    const token = localStorage.getItem("userToken");
    S.getUsers({ token: token }).then(res => {
        if (res.data.success) {
            dispatch(getUserReducer(res.data.success));
        }
    });
};
