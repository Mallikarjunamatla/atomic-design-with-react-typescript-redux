import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "../reducers";

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export type AppState = ReturnType<typeof rootReducers>;

export default store;
