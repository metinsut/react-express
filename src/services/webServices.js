import axios from "axios";
import { SITE, SINGUP, LOGIN, LOGOUT } from "../constants/path";

export const getSiteApi = () => {
   return axios.get(SITE);
};

export const signUpApi = data => {
   return axios.post(SINGUP, data);
};

export const loginToken = data => {
   return axios.post(LOGIN, data);
};

// export const loginUser = (email, token) => {
//    return axios.post(USER + "/" + email, token);
// };

export const leaveUser = token => {
   return axios.post(LOGOUT, token);
};
