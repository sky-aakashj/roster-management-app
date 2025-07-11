import { combineReducers } from "redux";
import viewReducer from "./viewReducer";
import providerReducer from "./providerReducer";

const rootReducer = combineReducers({
  view: viewReducer,
  providers: providerReducer,
});

export default rootReducer;
