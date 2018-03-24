import { LOGIN_STATUS } from "../constants/actionTypes";

const formResult = (state = {}, action) => {
      switch (action.type) {
            case LOGIN_STATUS:
                  return {
                        ...action.payload
                  };
            default:
                  return state;
      }
};

export default formResult;