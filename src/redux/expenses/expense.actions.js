import { expenseApi } from '../../apis/expenseApi';
import {
  EXPENSE_LIST_REQUEST,
  EXPENSE_LIST_SUCCESS,
  EXPENSE_LIST_FAIL,
  EXPENSE_CREATE_REQUEST,
  EXPENSE_CREATE_SUCCESS,
  EXPENSE_CREATE_FAIL,
  EXPENSE_DELETE_REQUEST,
  EXPENSE_DELETE_SUCCESS,
  EXPENSE_DELETE_FAIL,
} from './expense.constants';

export const listExpenses = (userUid) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSE_LIST_REQUEST });
    const data = await expenseApi.findAll(userUid);
    dispatch({ type: EXPENSE_LIST_SUCCESS, payload: data });
  } catch (exception) {
    dispatch({
      type: EXPENSE_LIST_FAIL,
      payload: exception,
    });
  }
};

export const createExpense = (expense) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSE_CREATE_REQUEST });
    const expenseRef = await expenseApi.add(expense);
    const savedExpense = { id: expenseRef.id, ...expense };
    dispatch({
      type: EXPENSE_CREATE_SUCCESS,
      payload: savedExpense,
    });
  } catch (exception) {
    dispatch({
      type: EXPENSE_CREATE_FAIL,
      payload: exception,
    });
  }
};

export const deleteExpense = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSE_DELETE_REQUEST });
    await expenseApi.deleteById(id);
    dispatch({ type: EXPENSE_DELETE_SUCCESS, payload: id });
  } catch (exception) {
    dispatch({ type: EXPENSE_DELETE_FAIL, payload: exception });
  }
};

