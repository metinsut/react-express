import { GET_USERS } from "../constants/actionTypes";

const getUser = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...action.payload };
        default:
            return state;
    }
};

export default getUser;
