import {SagaIterator} from "@redux-saga/core";
import {call, put} from "redux-saga/effects";
import {httpHelper} from "../../../helper/httpHelper";
import {fetchData, fetchError} from "../../actions/todoAction";

export function* todosWorkers(): SagaIterator {
  try {
    const data = yield call(httpHelper, "todos");
    yield put(fetchData(data));
  } catch (e) {
    yield put(fetchError(e.message));
  }
}
