import ExpenseActionTypes from "./expense.types";

const initialState = {
  expenses: [],
  loading: false,
  error: undefined,
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ExpenseActionTypes.LIST_REQUEST:
      return { ...state, loading: true };
    case ExpenseActionTypes.LIST_SUCCESS:
      return { loading: false, expenses: action.payload };
    case ExpenseActionTypes.LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ExpenseActionTypes.CREATE_REQUEST:
      return { ...state };
    case ExpenseActionTypes.CREATE_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case ExpenseActionTypes.CREATE_FAIL:
      return { ...state, error: action.payload };
    case ExpenseActionTypes.DELETE_REQUEST:
      return { ...state };
    case ExpenseActionTypes.DELETE_SUCCESS:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case ExpenseActionTypes.DELETE_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
