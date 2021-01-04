import { put, takeLatest, all, call } from "redux-saga/effects";
import { expenseApi } from "../../apis/expenseApi";
import CategoryActionTypes from "./category.types";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./category.actions";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield expenseApi.findAllCategories();
    yield put(fetchCategoriesSuccess(categories));
  } catch (ex) {
    yield put(fetchCategoriesFailure(ex));
  }
}

export function* fetchCategoriesStart() {
  yield takeLatest(CategoryActionTypes.LIST_REQUEST, fetchCategoriesAsync);
}

export function* categorySagas() {
  yield all([call(fetchCategoriesStart)]);
}
