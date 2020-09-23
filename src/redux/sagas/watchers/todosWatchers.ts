import {all, call, takeEvery} from "redux-saga/effects";
import {SagaIterator} from "@redux-saga/core";
import {
  CREATE_TODO,
  DELETE_TODO,
  FETCH_TODOS_START, UPDATE_TODO
} from "../../actions/todoAction";
import {
  createTodoWorker,
  deleteTodoWorker,
  fetchTodosWorker, updateTodoWorker
} from "../workers/todosWorkers";

function* fetchTodosWatcher(): SagaIterator {
  yield takeEvery(FETCH_TODOS_START, fetchTodosWorker);
}

function* createTodoWatcher(): SagaIterator {
  yield takeEvery(CREATE_TODO, createTodoWorker);
}

function* deleteTodoWatcher(): SagaIterator {
  yield takeEvery(DELETE_TODO, deleteTodoWorker);
}

function* updateTodoWatcher(): SagaIterator {
  yield takeEvery(UPDATE_TODO, updateTodoWorker);
}

export function* todosWatcher(): SagaIterator {
  yield all([
    call(fetchTodosWatcher),
    call(createTodoWatcher),
    call(deleteTodoWatcher),
    call(updateTodoWatcher),
  ]);
}
