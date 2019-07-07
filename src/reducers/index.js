import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import loginState from 'reducers/loginState';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  loginState
});

export default rootReducer;