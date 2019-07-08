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

export const logoutUser = () => dispatch => {
  localStorage.removeItem('access_token')
  dispatch(logoutSuccess())
}
