import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const middlewareArray = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewareArray));

export default store;
