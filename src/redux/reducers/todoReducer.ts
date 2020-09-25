import {TodosActionType, TodosState} from "../types/todoTypes";
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
import {RequestState} from "../types/rootTypes";


const requestState: RequestState = {
  loading: false,
  error: undefined,
  loaded: false
};

const initialState: TodosState = {
  entities: [],
  fetchRequest: requestState,
  createRequest: requestState,
  deleteRequest: requestState,
  updateRequest: requestState,
};

export const todoReducer = (state = initialState,
                            action: TodosActionType): TodosState => {
  switch (action.type) {

    case FETCH_TODOS_START:
      return {
        ...state, fetchRequest: {
          ...state.fetchRequest,
          loading: true,
          error: undefined
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
          loading: true,
          error: undefined,
        }
      };

    case CREATE_TODO_SUCCESS:
      return {
        ...state, createRequest: {
          ...state.createRequest,
          loading: false,
          loaded: true
        }
      };

    case CREATE_TODO_ERROR:
      return {
        ...state, createRequest: {
          ...state.createRequest,
          loading: false,
          error: action.payload,
          loaded: false
        }
      };

    case DELETE_TODO:
      return {
        ...state, deleteRequest: {
          ...state.deleteRequest,
          loading: true,
          error: undefined
        }
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state, deleteRequest: {
          ...state.deleteRequest,
          loading: false,
          loaded: true
        }
      };

    case DELETE_TODO_ERROR:
      return {
        ...state, deleteRequest: {
          ...state.deleteRequest,
          loading: false,
          error: action.payload,
          loaded: false
        }
      };

    case UPDATE_TODO:
      return {
        ...state, updateRequest: {
          ...state.updateRequest,
          loading: true,
          error: undefined
        }
      };

    case UPDATE_TODO_SUCCESS:
      return {
        ...state, updateRequest: {
          ...state.updateRequest,
          loading: false,
          loaded: true
        }
      };

    case UPDATE_TODO_ERROR:
      return {
        ...state, updateRequest: {
          ...state.updateRequest,
          loading: false,
          error: action.payload,
          loaded: false
        }
      };

    default:
      return state;
  }
};

