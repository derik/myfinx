import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { categoryReducer } from './categories/category.reducer';
import { expenseReducer } from './expenses/expense.reducer';

const reducers = combineReducers({
  expense: expenseReducer,
  category: categoryReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
