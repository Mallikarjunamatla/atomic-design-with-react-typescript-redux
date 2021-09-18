import { combineReducers } from "redux";
import {usersDataReducer} from "./usersDataReducer";

const rootReducer = combineReducers(
  { usersDataReducer } as any
);

export default rootReducer;
