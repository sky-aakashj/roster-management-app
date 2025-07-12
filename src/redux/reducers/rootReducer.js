import { combineReducers } from "redux";
import viewReducer from "./viewReducer";
import providerReducer from "./providerReducer";
import filterReducer from "./filterReducer";
import dateReducer from "./dateReducer";

const rootReducer = combineReducers({
  view: viewReducer,
  providers: providerReducer,
  filters: filterReducer,
  date: dateReducer,
});

export default rootReducer;
