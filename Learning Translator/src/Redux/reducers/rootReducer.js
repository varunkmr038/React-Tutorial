import { combineReducers } from "redux";
import globalReducers from "./globalReducer";

const rootReducer = combineReducers({
  global: globalReducers,
});

export default rootReducer;
