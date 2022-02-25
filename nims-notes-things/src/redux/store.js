import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initialState = {};
const middleware = [thunk];

// if you want to look at the store ensure you have the redux state extension installed on chrome to see the redux state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;