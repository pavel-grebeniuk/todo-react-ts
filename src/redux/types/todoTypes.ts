import {
  CREATE_TODO,
  CREATE_TODO_ERROR,
  CREATE_TODO_SUCCESS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS
} from "../actions/todoAction";
import {requestState} from "./rootTypes";

export interface TodosState {
  readonly entities: Array<Todo>,
  readonly fetchRequest: requestState
  readonly createRequest: requestState
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface FetchTodosSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS
  payload: Array<Todo>
}

interface FetchTodosStartAction {
  type: typeof FETCH_TODOS_START
}

interface FetchTodosErrorAction {
  type: typeof FETCH_TODOS_ERROR
  payload: string
}

export interface CreateTodo {
  type: typeof CREATE_TODO,
  payload: string
}

export interface CreateTodoSuccess {
  type: typeof CREATE_TODO_SUCCESS,
}

export interface CreateTodoError {
  type: typeof CREATE_TODO_ERROR,
  payload: string
}

export type TodosActionType =
  FetchTodosSuccessAction
  | FetchTodosStartAction
  | FetchTodosErrorAction
  | CreateTodo
  | CreateTodoSuccess
  | CreateTodoError
