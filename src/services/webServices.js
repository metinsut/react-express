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
      ACC_COM_DELETE
} from "../constants/path";

export const getSiteApi = () => {
      return axios.get(SITE);
};

export const signUpApi = data => {
      return axios.post(SINGUP, data);
};

export const loginToken = data => {
      return axios.post(LOGIN, data);
};

export const leaveUser = token => {
      return axios.post(LOGOUT, token);
};

export const getAccountData = token => {
      return axios.post(ACCOUNT, token);
};

export const updateAccountData = data => {
      return axios.post(ACC_UP, data);
};

export const updateAccountEmail = data => {
      return axios.post(ACC_EMAIL, data);
};

export const updateAccountPassword = data => {
      return axios.post(ACC_PASS, data);
};

export const pushNewUserCompany = data => {
      return axios.post(ACC_COMPANY, data);
};

export const editUserCompany = data => {
      return axios.post(ACC_COM_EDIT, data);
};

export const deleteUserCompany = data => {
      return axios.post(ACC_COM_DELETE, data);
};
