import { combineReducers } from "redux";
import authReducer from "./authReducer";
import matchReducer from "./matchReducer";

const rootReducer = combineReducers({
  matches: matchReducer,
  user: authReducer,
});

export default rootReducer;
