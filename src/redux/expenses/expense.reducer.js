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

const initialState = {
  expenses: [],
  loading: false,
  error: undefined,
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPENSE_LIST_REQUEST:
      return { ...state, loading: true };
    case EXPENSE_LIST_SUCCESS:
      return { loading: false, expenses: action.payload };
    case EXPENSE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case EXPENSE_CREATE_REQUEST:
      return { ...state };
    case EXPENSE_CREATE_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case EXPENSE_CREATE_FAIL:
      return { ...state, error: action.payload };
    case EXPENSE_DELETE_REQUEST:
      return { ...state };
    case EXPENSE_DELETE_SUCCESS:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case EXPENSE_DELETE_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
