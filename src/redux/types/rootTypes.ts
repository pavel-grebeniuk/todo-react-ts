import {TodosState} from "./todoTypes";

export interface rootState {
  readonly todos: TodosState
  readonly request: requestState;
}

export interface requestState {
  readonly loading: boolean
  readonly error: string | null
  loaded?: boolean;
}
