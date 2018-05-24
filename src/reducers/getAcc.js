import { GET_ACC, CLEAR_GET_ACC } from "../constants/actionTypes";

const getUser = (state = {}, action) => {
   switch (action.type) {
      case GET_ACC:
         return {
            ...action.payload
         };
      case CLEAR_GET_ACC:
         return {
            ...state
         };
      default:
         return state;
   }
};

export default getUser;
