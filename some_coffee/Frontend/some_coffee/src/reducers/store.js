import { combineReducers, createStore } from "redux";
import userReducer from "./user/reducer";

const reduces = combineReducers({ userReducer });
const store = createStore(reduces);

export default store;
