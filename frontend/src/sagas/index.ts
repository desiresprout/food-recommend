import axios from "axios";
import { all } from "redux-saga/effects";
import foodSaga from "@sagas/food";

function* rootSaga() {
  yield all([foodSaga()]);
}

export default rootSaga;
