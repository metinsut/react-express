import { GET_LOGIN } from "../constants/actionTypes";

const getLogin = (state = {}, action) => {
      switch (action.type) {
            case GET_LOGIN:
                  return {
                        ...action.payload
                  };
            default:
                  return state;
      }
};

export default getLogin;