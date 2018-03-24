import { GET_LANG } from "../constants/actionTypes";

const initialState = { lang: null };

const siteLang = (state = initialState, action) => {
      switch (action.type) {
            case GET_LANG:
                  return {
                        ...state,
                        lang: action.payload
                  };
            default:
                  return state;
      }
};

export default siteLang;
