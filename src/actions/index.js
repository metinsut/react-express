import * as S from "../services/webServices";
import * as A from "../constants/actionTypes";
import Loader from "../helper/loader";

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

export const getPerson = data => ({
    type: A.GET_PERSONS,
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

export const checkLogin = () => dispatch => {
    S.checkToken().then(res => {
        if (!res.data.status) {
            localStorage.removeItem("userToken");
        } else {
            let token = localStorage.getItem("userToken");
            if (token) {
                dispatch(statusLogin({
                    status: true,
                    token: localStorage.userToken,
                    name:res.data.name
                }))
            } else {
                dispatch(statusLogin({
                    status: false
                }))
            }
        }
    });
}

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
        } else {
            dispatch(statusLogin(res.data));
        }
    });
};

export const logOut = () => dispatch => {
    return S.leaveUser().then(res => {
        if (res.data) {
            dispatch(statusLogin(res.data));
            localStorage.removeItem("userToken");
        }
    });
};

export const getAccount = () => dispatch => {
    S.getAccountData().then(res => {
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

export const getUsers = () => dispatch => {
    S.getUsers().then(res => {
        if (res.data.success) {
            dispatch(getUsersReducer(res.data.success));
        }
    });
};

export const getUser = data => dispatch => {
    S.getUser({ link: data }).then(res => {
        if (res.data.success) {
            dispatch(getUserReducer(res.data.success));
        }
    });
};

export const sendPerson = data => dispatch => {
    S.sendPerson({ data: data }).then(res => {
        if (res.data.success) {
            dispatch(getResult(res.data.success));
        }
    });
};

export const getPersons = () => dispatch => {
    Loader(true);
    S.getPersonData().then(res => {
        if (res.data.success) {
            dispatch(getPerson(res.data.success));
            Loader(false);
        }
    });
};
