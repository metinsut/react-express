import axios from "axios";
import { SITE, SINGUP, LOGIN } from "../constants/path";

export const getSiteApi = () => {
      return axios.get(SITE);
};

export const signUpApi = data => {
      return axios.post(SINGUP, data);
};

export const loginApi = data => {
      return axios.post(LOGIN, data);
};
