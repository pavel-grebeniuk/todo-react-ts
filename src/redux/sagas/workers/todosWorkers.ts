import {SagaIterator} from "@redux-saga/core";
import {call, put} from "redux-saga/effects";
import {api} from "../../../helper/api";
import {
  createTodoError,
  createTodoSuccess,
  deleteTodoError,
  deleteTodoSuccess,
  fetchData,
  fetchError,
  fetchStart,
  updateTodoError,
  updateTodoSuccess
} from "../../actions/todoAction";
import {CreateTodo, DeleteTodo, updateTodo} from "../../types/todoTypes";

export function* fetchTodosWorker(): SagaIterator {
  try {
    const data = yield call(api.todos.getAll);
    yield put(fetchData(data));
  } catch (e) {
    yield put(fetchError(e.message));
  }
}

export function* createTodoWorker({payload}: CreateTodo): SagaIterator {
  try {
    yield call(api.todos.create, JSON.stringify(payload));
    yield put(createTodoSuccess());
    yield put(fetchStart());
  } catch (e) {
    yield put(createTodoError(e.message));
  }
}

export function* deleteTodoWorker({payload}: DeleteTodo): SagaIterator {
  try {
    yield call(api.todos.delete, payload);
    yield put(deleteTodoSuccess());
    yield put(fetchStart());
  } catch (e) {
    yield put(deleteTodoError(e.message));
  }
}

export function* updateTodoWorker({payload}: updateTodo): SagaIterator {
  try {
    yield call(api.todos.update, payload.id, JSON.stringify(payload));
    yield put(updateTodoSuccess());
    yield put(fetchStart());
  } catch (e) {
    yield put(updateTodoError(e.message));
  }
}
