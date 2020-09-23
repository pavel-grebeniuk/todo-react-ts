import {all, call} from "redux-saga/effects";
import {SagaIterator} from "@redux-saga/core";
import {todosWatcher} from "./watchers/todosWatchers";

export default function* rootSaga(): SagaIterator {
  yield all([
    call(todosWatcher)
  ]);
}


