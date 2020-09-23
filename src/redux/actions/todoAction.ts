import {Todo, TodosActionType} from "../types/todoTypes";

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
export const CREATE_TODO = "CREATE_TODO";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_ERROR = "CREATE_TODO_ERROR";


export const fetchStart = (): TodosActionType => {
  return {
    type: FETCH_TODOS_START
  };
};

export const fetchData = (data: Array<Todo>): TodosActionType => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: data
  };
};

export const fetchError = (error: string): TodosActionType => {
  return {
    type: FETCH_TODOS_ERROR,
    payload: error
  };
};

export const createTodo = (text: string): TodosActionType => {
  return {
    type: CREATE_TODO,
    payload: text
  };
};

export const createTodoSuccess = (): TodosActionType => {
  return {
    type: CREATE_TODO_SUCCESS,
  };
};

export const createTodoError = (text: string): TodosActionType => {
  return {
    type: CREATE_TODO_ERROR,
    payload: text
  };
};
