import {
    LOAD_USERS,
    SET_SCREEN_MODE
} from "./types";


export const getUsers = (feed) => {
    console.log("ACTION // get users ", feed);
    return {
        type: LOAD_USERS,
        payload: feed
    }
};

export const setScreenMode = (feed) => {
    console.log("ACTION // set screen mode ", feed);
    return {
        type: SET_SCREEN_MODE,
        payload: feed
    }
};