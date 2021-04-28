import {
    LOAD_USERS,
    USERS_LOADED,
    SET_SCREEN_MODE

} from "../action/types";

const initState = {
    users: [],
    loadingUsers: false,
    screenMode: "landing_lnk"
};

export default function (state = initState, action) {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users: action.payload,
                loadingUsers: false
            };
        case SET_SCREEN_MODE:
            return {
                ...state,
                screenMode: action.payload
            }
        default:
            return state;
    }
}