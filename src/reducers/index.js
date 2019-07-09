import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import loginState from 'reducers/loginState';
import meState from 'reducers/meState';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  loginState,
  meState
});

export default rootReducer;