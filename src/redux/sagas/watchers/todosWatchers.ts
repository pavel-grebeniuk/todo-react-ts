import {all, call, takeEvery} from "redux-saga/effects";
import {SagaIterator} from "@redux-saga/core";
import {CREATE_TODO, FETCH_TODOS_START} from "../../actions/todoAction";
import {createTodoWorker, fetchTodosWorker} from "../workers/todosWorkers";

function* fetchTodosWatcher(): SagaIterator {
  yield takeEvery(FETCH_TODOS_START, fetchTodosWorker);
}

function* createTodoWatcher(): SagaIterator {
  yield takeEvery(CREATE_TODO, createTodoWorker);
}


export function* todosWatcher(): SagaIterator {
  yield all([
    call(fetchTodosWatcher),
    call(createTodoWatcher),
  ]);
}
