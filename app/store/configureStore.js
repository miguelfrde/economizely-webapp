import createLogger from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import economizelyReducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const createStoreWithMiddleware = applyMiddleware(
  logger
)(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(economizelyReducer, initialState);
};
