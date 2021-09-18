import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

export type AppState = ReturnType<any>;

export default store;
