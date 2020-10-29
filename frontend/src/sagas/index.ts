import axios from "axios";
import { all } from "redux-saga/effects";
import { baseUrl } from "../config/config";
import foodSaga from "@sagas/food";

axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;

function* rootSaga() {
  yield all([foodSaga()]);
}

export default rootSaga;
