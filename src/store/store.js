import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore } from "redux";
import { showListReducer } from "./showListSlice";
import { todosReducer } from "./todosSlice";

const store = createStore(
  combineReducers({
    showList: showListReducer,
    todos: todosReducer,
  }),
  {},
  composeWithDevTools()
);

export default store;
