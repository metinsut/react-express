import { GET_PERSONS } from '../constants/actionTypes';

const getPerson = (state = [], action) => {
     switch (action.type) {
          case GET_PERSONS:
               return [...state, ...action.payload];
          default:
               return state;
     }
};

export default getPerson;
