import { GET_LANG } from "../constants/actionTypes";

const initialState = { lang: "tr" };

const sitelang = (state = initialState, action) => {
      switch (action.type) {
            case GET_LANG:
                  return {
                        lang: action.payload
                  };
            default:
                  return state;
      }
};

export default sitelang;
