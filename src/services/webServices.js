import axios from 'axios';
import { SITE,SINGUP } from "../constants/path";


export const getSiteApi = () => {
    return axios.get(SITE)
};

export const signUpApi = (data) => {
      return axios.post(SINGUP,data)
}
