import { combineReducers } from "redux";
import { Todo } from "../actions";
import { todosReducer } from "./todos";

export interface StoreState {
  todos: Todo[];
} //describes how our entire application state should look

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
