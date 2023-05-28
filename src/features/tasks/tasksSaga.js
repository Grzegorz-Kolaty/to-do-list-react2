import { call, put, delay, takeEvery, select, throttle } from "redux-saga/effects";
import { fetchExampleTasks, fetchExamplesState, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

export function* fetchExampleTasksHandler() {
  try {
    yield put(fetchExamplesState({ isLoading: true }));
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
    yield put(fetchExamplesState({ isLoading: false }))
  } catch (error) {
    yield put(fetchExamplesState({ isLoading: false, error: error }))
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield throttle(2000, fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}