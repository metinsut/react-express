import { getSiteApi } from "../services/webServices";
import { GET_LANG, GET_SITE } from "../constants/actionTypes";

//GET SITE DATA TO STORE
export const getSite = data => ({
      type: GET_SITE,
      payload: data
});

//GET AND CHANGE LANG
export const getLang = (lang) => ({
      type: GET_LANG,
      payload: lang
});

//GET SITE INFO
export const getSiteData = () => dispatch => {
      getSiteApi().then(res => {
            if (res.data.success) {
                  dispatch(getSite(res.data.success));
            }
      });
};
