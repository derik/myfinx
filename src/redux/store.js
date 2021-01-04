import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

import { categoryReducer } from './categories/category.reducer';
import { expenseReducer } from './expenses/expense.reducer';

const reducers = combineReducers({
  expense: expenseReducer,
  category: categoryReducer,
});

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
