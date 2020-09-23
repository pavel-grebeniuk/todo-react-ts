import {TodosActionType, TodosState} from "../types/todoTypes";
import {
  CREATE_TODO,
  CREATE_TODO_ERROR,
  CREATE_TODO_SUCCESS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS
} from "../actions/todoAction";

const initialState: TodosState = {
  entities: [],
  fetchRequest: {
    loading: false,
    error: null,
    loaded: false
  },
  createRequest: {
    loading: false,
    error: null,
  }
};

export const todoReducer = (state = initialState,
                            action: TodosActionType): TodosState => {
  switch (action.type) {

    case FETCH_TODOS_START:
      return {
        ...state, fetchRequest: {
          ...state.fetchRequest,
          loading: true
        }
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state, entities: action.payload,
        fetchRequest: {
          ...state.fetchRequest,
          loading: false,
          loaded: true
        }
      };

    case FETCH_TODOS_ERROR:
      return {
        ...state,
        fetchRequest: {
          ...state.fetchRequest,
          loading: false,
          loaded: false,
          error: action.payload
        }
      };

    case CREATE_TODO:
      return {
        ...state, createRequest: {
          ...state.createRequest,
          loading: true
        }
      };

    case CREATE_TODO_SUCCESS:
      return {
        ...state, createRequest: {
          ...state.createRequest,
          loading: false
        }
      };

    case CREATE_TODO_ERROR:
      return {
        ...state, createRequest: {
          ...state.createRequest,
          loading: false,
          error: action.payload
        }
      };

    default:
      return state;
  }
};

