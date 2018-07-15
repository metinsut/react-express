import { GET_PERSONS, SORT_PERSONS } from '../constants/actionTypes';

const getPerson = (state = [], action) => {
     switch (action.type) {
          case GET_PERSONS:
               return [...state, ...action.payload];
          case SORT_PERSONS:
               state.sort((a, b) => {
                    if (a.first_name > b.first_name) {
                         return 1;
                    }
                    if (b.first_name > a.first_name) {
                         return -1;
                    }
                    return 0;
               });
          default:
               return state;
     }
};

export default getPerson;
