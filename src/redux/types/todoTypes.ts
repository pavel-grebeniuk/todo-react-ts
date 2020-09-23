import {
  FETCH_TODOS_ERROR,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS
} from "../actions/todoAction";

export interface todosState {
  readonly entities: Array<Todo>
}

export interface Todo {
  id: number;
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

export type TodosActionType =
  FetchTodosSuccessAction
  | FetchTodosStartAction
  | FetchTodosErrorAction