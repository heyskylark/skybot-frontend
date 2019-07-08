import ApiService from 'utils/ApiService';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = (token, user) => {
  return {
    type: LOGIN_SUCCESS,
    token: token,
    user: user
  }
}

export const loginError = message => {
  return {
    type: LOGIN_FAILURE,
    message
  }
}

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const loginUser = token => dispatch => {
  dispatch(requestLogin())

  ApiService.get('/user/me', { headers: {'Authorization': token} })
    .then(user => {
        localStorage.setItem('access_token', token);
        dispatch(loginSuccess(token, user));
      }, error => {
        const { message } = error;
        dispatch(loginError(`Login error: ${message}`));
      }
    ).catch(error => {
      dispatch(loginError(`Login error: ${error}`));
    });
}

export const logoutUser = () => dispatch => {
  localStorage.removeItem('access_token')
  dispatch(logoutSuccess())
}

// Need a function that takes the token in the url and stores it,
// since login is done by the server no need to have a login GET/Post
// Dashboard page can check if token exists in storage or if it is in the url.