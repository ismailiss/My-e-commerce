import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  OWNERS_LIST_GET_LIST,
  OWNERS_LIST_GET_LIST_SUCCESS,
  OWNERS_LIST_GET_LIST_ERROR
} from "../actions";


import {
  getOwnersListSuccess,
  getOwnersListError,
} from "../actions/ownerActions";

import instance from '../../axios/axios';

 const getOwnersListRequest = async () => {
  return await new Promise((success, fail) => {
      console.log('zxios owner')
    success(instance.get('/owner').then(res => res.data))
  })
    .then(response => response)
    .catch(error => error);
};

function* getOwnersListItems() {
  try {
    const response = yield call(getOwnersListRequest);
    yield put(getOwnersListSuccess(response));
  } catch (error) {
    yield put(getOwnersListError(error));
  }
}

export function* watchGetList() {
  yield takeEvery(OWNERS_LIST_GET_LIST, getOwnersListItems);
}

export default function* rootSaga() {
  yield all([fork(watchGetList)]);
}
