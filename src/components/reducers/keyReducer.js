import {
    GET_FRAMES,
    GET_FRAME,
    LOAD_FRAMES
} from "../action/types";
const initState = {
    frames: [],
    loadingFrames: false
};

export default function (state = initState, action) {
    switch (action.type) {
        case GET_FRAMES:
            return {
                ...state,
                frames: action.payload,
                loadingFrames: false
            };
        default:
            return state;
    }
}