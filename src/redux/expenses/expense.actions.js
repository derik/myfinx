import ExpenseActionTypes from "./expense.types";

export const fetchExpensesStart = (userUid) => ({
  type: ExpenseActionTypes.LIST_REQUEST,
  payload: userUid,
});

export const fetchExpensesSuccess = (expenses) => ({
  type: ExpenseActionTypes.LIST_SUCCESS,
  payload: expenses,
});

export const fetchExpensesFailure = (exception) => ({
  type: ExpenseActionTypes.LIST_FAIL,
  payload: exception,
});

export const createExpenseStart = (expense) => ({
  type: ExpenseActionTypes.CREATE_REQUEST,
  payload: expense,
});

export const createExpenseSuccess = (savedExpense) => ({
  type: ExpenseActionTypes.CREATE_SUCCESS,
  payload: savedExpense,
});

export const createExpenseFailure = (exception) => ({
  type: ExpenseActionTypes.CREATE_FAIL,
  payload: exception,
});

export const deleteExpenseStart = (expenseId) => ({
  type: ExpenseActionTypes.DELETE_REQUEST,
  payload: expenseId,
});

export const deleteExpenseSuccess = (expenseId) => ({
  type: ExpenseActionTypes.DELETE_SUCCESS,
  payload: expenseId,
});

export const deleteExpenseFailure = (exception) => ({
  type: ExpenseActionTypes.DELETE_FAIL,
  payload: exception,
});
