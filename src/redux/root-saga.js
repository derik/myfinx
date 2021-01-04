import { all, call } from "redux-saga/effects";
import { categorySagas } from "./categories/category.sagas";
import { expenseSagas } from "./expenses/expense.sagas";

export default function* rootSaga() {
  yield all([call(categorySagas), call(expenseSagas)]);
}
