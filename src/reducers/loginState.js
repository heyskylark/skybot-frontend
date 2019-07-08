import { 
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
} from 'actions/login';

// Prob have to figure out how to get user object when initializing if logged in
const defaultState = {
  user: {},
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
        user: action.user,
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
        user: {},
        isFetching: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default loginState;