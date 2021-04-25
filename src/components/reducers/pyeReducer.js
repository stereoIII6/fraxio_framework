import {
    LOAD_PYES,
    PYES_LOADED,
    CREATE_PYE,
    
} from "../action/types";
const initState = {
    pyes: [],
    loadingPyes: false
};

export default function (state = initState, action) {
    switch (action.type) {
        case LOAD_PYES:
            return {
                ...state,
                pyes: action.payload,
                loadingPyes: false
            };
        default:
            return state;
    }
}