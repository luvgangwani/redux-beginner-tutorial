// evaluate any actions committed
// 2 actions in this case
// 1. Fetch posts
// 2. Create posts

import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [], // items represent the posts that come in from the action (action will have the fetch request),
    item: {}, // single post that we add
}

export default function(state = initialState, action) {
    let returnVal = state;
    switch (action.type) {
        case FETCH_POSTS:
            returnVal = {
                ...state,
                items: action.payload,
            }
            break;
        case NEW_POST:
            returnVal = {
                ...state,
                item: action.payload,
            }
            break;
        default:
            break;
    }

    return returnVal;
}