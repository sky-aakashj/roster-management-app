import { combineReducers } from "redux";
import viewReducer from "./viewReducer";
import providerReducer from "./providerReducer";
import filterReducer from "./filterReducer";
import dateReducer from "./dateReducer";
import searchReducer from "./searchReducer";
import calendarReducer from "./calendarReducer";

const rootReducer = combineReducers({
  view: viewReducer,
  providers: providerReducer,
  filters: filterReducer,
  date: dateReducer,
  search: searchReducer,
  calendar: calendarReducer,
});

export default rootReducer;
