import { GET_SITE } from "../constants/actionTypes";

let initialState = {};

const siteLayout = (state = initialState, action) => {
      switch (action.type) {
            case GET_SITE:
                  return {
                        ...state,
                        ...action.payload
                  };
            default:
                  return state;
      }
};

export default siteLayout;
