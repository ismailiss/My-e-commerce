import { put, takeLatest } from 'redux-saga/effects';

function* addcatalog(action) {
  try {
    yield put({ type: 'ADD_CATALOG_SUCCEEDED', catalog: action.catalog });
  } catch (e) {
    yield put({ type: 'ADD_CATALOG_FAILED', message: e.message });
  }
}

function* watcher() {
  yield takeLatest('ADD_CATALOG', addcatalog);
}

export default watcher;
