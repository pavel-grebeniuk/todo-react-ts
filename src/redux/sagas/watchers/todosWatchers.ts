import {takeEvery, all, call} from "redux-saga/effects";
import {SagaIterator} from "@redux-saga/core";
import {FETCH_TODOS_START} from "../../actions/todoAction";
import {todosWorkers} from "../workers/todosWorkers";

export function* fetchTodosWatcher(): SagaIterator {
  yield takeEvery(FETCH_TODOS_START, todosWorkers);
}

export function* todosWatcher(): SagaIterator {
  yield all([
    call(fetchTodosWatcher)
  ]);
}
