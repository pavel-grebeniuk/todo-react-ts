import {v4 as uuidv4} from "uuid";
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
import {CreateTodo, Todo, updateTodo} from "../../types/todoTypes";

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
    const todo: Todo = {
      id: uuidv4(),
      text: payload,
      completed: false
    };
    const data = yield call(api.todos.create, JSON.stringify(todo));
    if ("id" in data) {
      yield put(createTodoSuccess());
      yield put(fetchStart());
    } else {
      throw new Error("Create error");
    }
  } catch (e) {
    yield put(createTodoError(e.message));
  }
}

export function* deleteTodoWorker({payload}: CreateTodo): SagaIterator {
  try {
    const response = yield call(api.todos.delete, payload);
    if (response.ok) {
      yield put(deleteTodoSuccess());
      yield put(fetchStart());
    } else {
      throw new Error("Delete error");
    }
  } catch (e) {
    yield put(deleteTodoError(e.message));
  }
}

export function* updateTodoWorker({payload}: updateTodo): SagaIterator {
  try {
    const response = yield call(api.todos.update, payload.id, JSON.stringify(payload));
    if (response.ok) {
      yield put(updateTodoSuccess());
      yield put(fetchStart());
    } else {
      throw new Error("Update error");
    }
  } catch (e) {
    yield put(updateTodoError(e.message));
  }
}
