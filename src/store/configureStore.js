import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import monitorReducerEnhancer from 'enhancers/monitorReducer';
import logger from 'middleware/logger';
import rootReducer from 'reducers';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory()

export default function configureStore(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    logger,
    thunk,
    reactRouterMiddleware
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer(history), initialState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return store;
}