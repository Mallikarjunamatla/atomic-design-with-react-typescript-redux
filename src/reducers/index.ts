import { combineReducers } from "redux";
import usersDataReducer from "./usersDataReducer";

const rootReducer = combineReducers({
	usersState: usersDataReducer,
});



export default rootReducer
