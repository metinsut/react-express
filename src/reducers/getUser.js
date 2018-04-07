import { GET_USER, CLEAR_GET_USER } from "../constants/actionTypes";

const getUser = (state = {}, action) => {
   switch (action.type) {
      case GET_USER:
         return {
            ...action.payload
         };
      case CLEAR_GET_USER:
         return {
            ...state
         };
      default:
         return state;
   }
};

export default getUser;
