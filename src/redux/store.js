const { createStore, applyMiddleware, combineReducers } = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');

const reducers = combineReducers({});

const initialState = {
  expenses: [],
};

const middlewares = [];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
