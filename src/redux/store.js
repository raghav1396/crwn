import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

const middlewareArray = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewareArray));

export const persistor = persistStore(store);
