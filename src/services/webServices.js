import axios from 'axios';
import { SITE } from "../constants/path";


export const getSiteApi = () => {
    return axios.get(SITE)
};
