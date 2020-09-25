import {TodosState} from "./todoTypes";

// export interface rootState {
//   readonly todos: TodosState
// }

export interface RequestState {
  readonly loading: boolean
  readonly error?: string
  loaded: boolean;
}
