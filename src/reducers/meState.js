import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE,
  LOGOUT_USER
} from 'actions/me';

const defaultState = {
  user: {},
  isFetching: false,
  errorMessage: ''
};

const meState = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isFetching: false,
        errorMessage: ''
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {}
      }
    default:
      return state;
  }
};

export default meState;
