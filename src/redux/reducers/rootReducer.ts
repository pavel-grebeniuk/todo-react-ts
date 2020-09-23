import {combineReducers} from "redux";
import {todoReducer} from "./todoReducer";


export const rootReducer = combineReducers(
  {todo: todoReducer}
);

export type AppState = ReturnType<typeof rootReducer>
