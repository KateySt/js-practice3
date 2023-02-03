import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;