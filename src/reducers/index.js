import { combineReducers } from "redux";

import user from "./user";

const combinedReducer = combineReducers({
  user,
});

export default combinedReducer;
