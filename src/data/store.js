// import redux middlewares
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";

// import components to pass to redux store
import reducer from './reducer';
import initialState from './initialState';

// set up redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(persistState())
);

export default store;