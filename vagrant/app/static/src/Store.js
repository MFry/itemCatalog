import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './Reducer';

const rootReducer = reducer; // TODO: Fix placeholder
const initialState = {};
const enhancers = [];
const middleware = [logger, promise()];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
