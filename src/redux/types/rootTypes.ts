import {todosState} from "./todoTypes";

export interface rootState {
  readonly todos: todosState
  readonly request: requestState;
}

export interface requestState {
  readonly loading: boolean
  readonly error: string | null
  loaded: boolean;
}
