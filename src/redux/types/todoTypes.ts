import {
  CREATE_TODO,
  CREATE_TODO_ERROR,
  CREATE_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  UPDATE_TODO,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_SUCCESS
} from "../actions/todoAction";
import {RequestState} from "./rootTypes";

export interface TodosState {
  readonly entities: Array<Todo>,
  readonly fetchRequest: RequestState
  readonly createRequest: RequestState
  readonly deleteRequest: RequestState
  readonly updateRequest: RequestState
}

export interface Todo extends NewTodo {
  id: number;
}

export interface NewTodo {
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
  payload: NewTodo
}

export interface CreateTodoSuccess {
  type: typeof CREATE_TODO_SUCCESS,
}

export interface CreateTodoError {
  type: typeof CREATE_TODO_ERROR,
  payload: string
}

export interface DeleteTodo {
  type: typeof DELETE_TODO,
  payload: number
}

export interface DeleteTodoSuccess {
  type: typeof DELETE_TODO_SUCCESS,
}

export interface DeleteTodoError {
  type: typeof DELETE_TODO_ERROR,
  payload: string
}

export interface updateTodo {
  type: typeof UPDATE_TODO,
  payload: Todo
}

export interface updateTodoSuccess {
  type: typeof UPDATE_TODO_SUCCESS,
}

export interface updateTodoError {
  type: typeof UPDATE_TODO_ERROR,
  payload: string
}

export type TodosActionType =
  FetchTodosSuccessAction
  | FetchTodosStartAction
  | FetchTodosErrorAction
  | CreateTodo
  | CreateTodoSuccess
  | CreateTodoError
  | DeleteTodo
  | DeleteTodoSuccess
  | DeleteTodoError
  | updateTodo
  | updateTodoSuccess
  | updateTodoError
