import axios from "axios";
import {
    SITE,
    SINGUP,
    LOGIN,
    LOGOUT,
    ACCOUNT,
    ACC_UP,
    ACC_EMAIL,
    ACC_PASS,
    ACC_COMPANY,
    ACC_COM_EDIT,
    ACC_COM_DELETE,
    UPLOAD,
    GET_USERS,
    GET_USER,
    SEND_PERSON,
    GET_PERSON,
    GET_PERSON_JSON,
    CHECKLOGIN

} from "../constants/path";

const token = localStorage.getItem("userToken");

const tokenHeader = { 'x-access-token': token }

const formHeader = {
    'x-access-token': token,
    'Content-Type': 'multipart/form-data'
}

export const getSiteApi = () => {
    return axios.get(SITE);
};

export const signUpApi = data => {
    return axios.post(SINGUP, data);
};

export const loginToken = data => {
    return axios.post(LOGIN, data);
};

export const checkToken = () => {
    const options = {
        url: CHECKLOGIN,
        method: 'POST',
        headers: tokenHeader,
    };
    return axios(options);
};

export const leaveUser = () => {
    const options = {
        url: LOGOUT,
        method: 'POST',
        headers: tokenHeader,
    };
    return axios(options);
};

export const getAccountData = () => {
    const options = {
        url: ACCOUNT,
        method: 'POST',
        headers: tokenHeader,
    };
    return axios(options);
};

export const updateAccountData = data => {
    const options = {
        url: ACC_UP,
        method: 'POST',
        data: data,
        headers: tokenHeader,
    };
    return axios(options);
};

export const updateAccountEmail = data => {
    const options = {
        url: ACC_EMAIL,
        method: 'POST',
        data: data,
        headers: tokenHeader,
    };
    return axios(options);
};

export const updateAccountPassword = data => {
    const options = {
        url: ACC_PASS,
        method: 'POST',
        data: data,
        headers: tokenHeader,
    };
    return axios(options);
};

export const pushNewUserCompany = data => {
    const options = {
        url: ACC_COMPANY,
        method: 'POST',
        data: data,
        headers: tokenHeader,
    };
    return axios(options);
};

export const editUserCompany = data => {
    const options = {
        url: ACC_COM_EDIT,
        method: 'POST',
        data: data,
        headers: tokenHeader,
    };
    return axios(options);
};

export const deleteUserCompany = data => {
    const options = {
        url: ACC_COM_DELETE,
        method: 'POST',
        data: data,
        headers: tokenHeader,
    };
    return axios(options);
};

export const getUsers = data => {
    const options = {
        url: GET_USERS,
        method: 'POST',
        data: data,
        headers: tokenHeader,
    };
    return axios(options);
};

export const getUser = data => {
    const options = {
        url: GET_USER,
        method: 'POST',
        data: data,
        headers: tokenHeader,
    };
    return axios(options);
};

export const sendPerson = data => {
    const options = {
        url: SEND_PERSON,
        method: 'POST',
        data: data,
        headers: tokenHeader,
    };
    return axios(options);
};

export const getPersonData = () => {
    const options = {
        url: GET_PERSON,
        method: 'POST',
        headers: tokenHeader,
    };
    return axios(options);
};

// export const getPersonData = () => {
//     const options = {
//         url: `${GET_PERSON}?token=${token}`,
//         method: 'POST',
//         headers: tokenHeader,
//         params: {
//             token: token
//         }
//     };
//     return axios(options);
// };

export const getPersonJson = () => {
    return axios.get(GET_PERSON_JSON);
};

export const uploadImage = data => {
    let formData = new FormData();
    formData.append("file", data);
    const options = {
        url: UPLOAD,
        method: 'POST',
        data: formData,
        headers: formHeader,
    };
    return axios(options);
};
