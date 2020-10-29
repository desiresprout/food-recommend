import { all, put, takeLatest, call, delay } from "redux-saga/effects";
import food from "@reducers/food";
import axiosClient from "@lib/axiosClient";
import { PayloadAction } from "@reduxjs/toolkit";
import { Ilocation } from "@typing/location";

function getFoodsInfo(payload: Ilocation) {
  return axiosClient.get(
    `/api/address/${payload.longitude}/${payload.latitude}`
  );
}

function* loadFoodsInfo(action: PayloadAction<Ilocation>) {
  try {
    const result = yield call(getFoodsInfo, action.payload);
    yield put(food.actions.LoadFoodsInfoSuccess(result.data));
  } catch (e) {
    yield put(food.actions.LoadFoodsInfoFail());
  }
}

function* watchLoadFoodsInfo() {
  yield takeLatest(food.actions.LoadFoodsInfoRequest, loadFoodsInfo);
}

export default function* foodSaga() {
  yield all([watchLoadFoodsInfo()]);
}
