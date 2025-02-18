import { applyMiddleware, createStore } from 'redux';
import bookReducer from './bookex/bookReducer';
import logger from 'redux-logger';

const store = createStore(bookReducer , applyMiddleware(logger));

export default store;