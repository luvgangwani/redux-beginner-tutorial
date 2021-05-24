import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

// Provider takes a store prop
// store holds the whole state tree of the application
// the only way to change the state inside is to dispatch an action on it
// store is essentially an object with a few methods on it
const store = createStore(rootReducer, initialState, applyMiddleware(...middleWare));

export default store;