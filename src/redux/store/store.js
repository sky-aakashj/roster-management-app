import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

// Create middleware array
const middleware = [thunk];

// Enable Redux DevTools in development
const isDevelopment = import.meta.env && import.meta.env.MODE === "development";
const enhancer = isDevelopment
  ? composeWithDevTools(applyMiddleware(...middleware))
  : applyMiddleware(...middleware);

const store = createStore(rootReducer, enhancer);

export default store;
