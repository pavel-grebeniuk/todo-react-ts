import {v4 as uuidv4} from "uuid";
import {SagaIterator} from "@redux-saga/core";
import {call, put} from "redux-saga/effects";
import {api} from "../../../helper/api";
import {
  createTodoError,
  createTodoSuccess,
  fetchData,
  fetchError, fetchStart
} from "../../actions/todoAction";
import {CreateTodo, Todo} from "../../types/todoTypes";

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
