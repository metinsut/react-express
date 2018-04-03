import axios from "axios";
import { SITE, SINGUP, LOGIN, LOGOUT, ACCOUNT } from "../constants/path";

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
