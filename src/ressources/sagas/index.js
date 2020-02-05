import { all } from 'redux-saga/effects';
import todosSagas from './todo';
import ownerSagas from './owner';
export default function* rootSaga(getState) {
    console.log("watcher sagas index");
    yield all([
        todosSagas(),ownerSagas() ]);
}
