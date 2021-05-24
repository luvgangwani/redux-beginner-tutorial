import { FETCH_POSTS, NEW_POST } from './types';

// each action/actionCreator will be a function we have to export
// action is dispatched onto a reducer (identified by a type) which then decides what to do with that state

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts,
        }));
}

export const createPost = ({ title, body }) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ title, body }),
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post,
        }));
}