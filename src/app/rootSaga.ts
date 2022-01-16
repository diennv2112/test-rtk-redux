import counterSaga from "features/counter/counterSaga";
import userLoginSaga from "features/user-login/userLoginSaga";
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([counterSaga(), userLoginSaga()]);
}