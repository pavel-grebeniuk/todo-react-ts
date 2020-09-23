import {Todo, TodosActionType} from "../types/todoTypes";

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";


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
