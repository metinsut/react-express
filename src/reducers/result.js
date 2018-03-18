import { GET_RESULT } from "../constants/actionTypes";

const formResult = (state = {}, action) => {
      switch (action.type) {
            case GET_RESULT:
                  return {
                        ...action.payload
                  };
            default:
                  return state;
      }
};

export default formResult;