import { takeLatest, call, put, all } from "redux-saga/effects";
import ExpenseActionTypes from "./expense.types";
import { expenseApi } from "../../apis/expenseApi";
import {
  createExpenseFailure,
  createExpenseSuccess,
  deleteExpenseFailure,
  deleteExpenseSuccess,
  fetchExpensesFailure,
  fetchExpensesSuccess,
} from "./expense.actions";

export function* fetchExpensesAsync({ payload: userUid }) {
  try {
    const expenses = yield expenseApi.findAll(userUid);
    yield put(fetchExpensesSuccess(expenses));
  } catch (ex) {
    yield put(fetchExpensesFailure(ex));
  }
}

export function* fetchExpensesStart() {
  yield takeLatest(ExpenseActionTypes.LIST_REQUEST, fetchExpensesAsync);
}

export function* createExpenseAsync({ payload: expense }) {
  try {
    const expenseRef = yield expenseApi.add(expense);
    const savedExpense = { id: expenseRef.id, ...expense };
    yield put(createExpenseSuccess(savedExpense));
  } catch (ex) {
    yield put(createExpenseFailure(ex));
  }
}

export function* createExpenseStart() {
  yield takeLatest(ExpenseActionTypes.CREATE_REQUEST, createExpenseAsync);
}

export function* deleteExpenseAsync(expenseId) {
  try {
    yield expenseApi.deleteById(expenseId);
    yield put(deleteExpenseSuccess(expenseId));
  } catch (ex) {
    yield put(deleteExpenseFailure(ex));
  }
}

export function* deleteExpenseStart() {
  yield takeLatest(ExpenseActionTypes.DELETE_REQUEST, deleteExpenseAsync);
}

export function* expenseSagas() {
  yield all([
    call(fetchExpensesStart),
    call(createExpenseStart),
    call(deleteExpenseStart),
  ]);
}
