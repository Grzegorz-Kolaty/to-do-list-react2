import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(2000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, error);
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}