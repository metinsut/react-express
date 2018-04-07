import { STATUS_LOGIN } from "../constants/actionTypes";

const loginResult = (state = {}, action) => {
      switch (action.type) {
            case STATUS_LOGIN:
                  return {
                        ...action.payload
                  };
            default:
                  return state;
      }
};

export default loginResult;