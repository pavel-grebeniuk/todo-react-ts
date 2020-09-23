import {TodosActionType, todosState} from "../types/todoTypes";
import {
  FETCH_TODOS_ERROR,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS
} from "../actions/todoAction";

const initialState: todosState = {
  entities: []
};

export const todoReducer = (state = initialState,
                            action: TodosActionType): todosState => {
  switch (action.type) {

    case FETCH_TODOS_START:
      return {
        ...state,
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state, entities: action.payload
      };

    case FETCH_TODOS_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};

