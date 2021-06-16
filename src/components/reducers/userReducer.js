import {
    LOAD_USERS,
    USERS_LOADED,
    SET_SCREEN_MODE,
    GET_ERC721_TX

} from "../action/types";

const initState = {
    users: [],
    erc721s: [],
    loadingUsers: false,
    screenMode: "landing_lnk"
};

export default function (state = initState, action) {
    switch (action.type) {
        case LOAD_USERS:
            console.log("RED // User", action.payload);
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
        case GET_ERC721_TX:
            return {
                ...state,
                erc721s: [action.payload]
            }
        default:
            return state;
    }
}