import axios from "axios";
import { SITE, SINGUP, LOGIN, USER } from "../constants/path";

export const getSiteApi = () => {
      return axios.get(SITE);
};

export const signUpApi = data => {
      return axios.post(SINGUP, data);
};

export const loginToken = data => {
      return axios.post(LOGIN, data);
};

export const loginUser = (username, token) => {
      return axios.post(USER + "/" + username, token);
};
