import {
    LOAD_USERS,
    USERS_LOADED,
    CREATE_USER,

} from "../action/types";
const initState = {
    users: [],
    loadingUsers: false
};

export default function (state = initState, action) {
    switch (action.type) {
        case LOAD_PYES:
            return {
                ...state,
                users: action.payload,
                loadingUsers: false
            };
        default:
            return state;
    }
}