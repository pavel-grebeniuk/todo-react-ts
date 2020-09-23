import {Todo, TodosActionType} from "../types/todoTypes";

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
export const CREATE_TODO = "CREATE_TODO";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_ERROR = "CREATE_TODO_ERROR";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_ERROR = "UPDATE_TODO_ERROR";


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

export const createTodoError = (error: string): TodosActionType => {
  return {
    type: CREATE_TODO_ERROR,
    payload: error
  };
};

export const deleteTodo = (id: string): TodosActionType => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const deleteTodoSuccess = (): TodosActionType => {
  return {
    type: DELETE_TODO_SUCCESS,
  };
};

export const deleteTodoError = (error: string): TodosActionType => {
  return {
    type: DELETE_TODO_ERROR,
    payload: error
  };
};


export const updateTodo = (todo: Todo): TodosActionType => {
  return {
    type: UPDATE_TODO,
    payload: todo
  };
};

export const updateTodoSuccess = (): TodosActionType => {
  return {
    type: UPDATE_TODO_SUCCESS,
  };
};

export const updateTodoError = (error: string): TodosActionType => {
  return {
    type: UPDATE_TODO_ERROR,
    payload: error
  };
};
