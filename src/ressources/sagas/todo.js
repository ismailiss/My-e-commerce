import { all, fork, put, takeLatest,takeEvery } from 'redux-saga/effects';
import{
  ADD_TODO,ADD_TODO_FAILED,ADD_TODO_SUCCEEDED
}from  '../actions';
function* addTodo(action) {
  try {
    yield put({ type: ADD_TODO_SUCCEEDED, todo: action.todo });
  } catch (e) {
    yield put({ type: ADD_TODO_FAILED, message: e.message });
  }
}

function* watcherAddTodo() {
  yield takeLatest(ADD_TODO, addTodo);
}


export default function* rootSaga() {
  console.log("watcher from rootSaga");

  yield all([
    fork(watcherAddTodo)
  ]);
}
