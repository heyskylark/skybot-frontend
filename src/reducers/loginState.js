import { 
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
} from 'actions/login';

const defaultState = {
  token: localStorage.getItem('access_token') ? localStorage.getItem('access_token') : '',
  isFetching: false,
  isAuthenticated: localStorage.getItem('access_token') ? true : false,
  errorMessage: ''
};

const loginState = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        token: '',
        errorMessage: action.message
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: '',
        isFetching: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default loginState;
