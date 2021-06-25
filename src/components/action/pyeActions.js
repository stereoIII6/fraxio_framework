import {
    LOAD_PYES,
    PYES_LOADED,
    CREATE_PYE,
    DRAFT_PYE,
    MINT_PYE
} from "./types";


export const getPyeAssets = (feed) => {
    console.log("ACTION // get pyes ",);
    return {
        type: LOAD_PYES,
        payload: feed
    }
};

export const getPyeData = (feed) => {
    console.log("ACTION // get pye Data ",);
    return {
        type: LOAD_PYES,
        payload: feed
    }
};

export const createPye = (feed) => {
    console.log("ACTION // get pyes ",);
    return {
        type: CREATE_PYE,
        payload: feed
    }
};

export const discardPye = () => {
    console.log("ACTION // discard PYE ",);
    return {
        type: CREATE_PYE,
        payload: {}
    }
};
