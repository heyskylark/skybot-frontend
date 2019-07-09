import ApiService from 'utils/ApiService';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetchUserSuccess = user => {
  return {
    type: FETCH_USER_SUCCESS,
    user: user
  };
};

export const fetchUserFailure = message => {
  return {
    type: FETCH_USER_FAILURE,
    message: message
  };
};

export const fetchUser = () => dispatch => {
  dispatch(fetchUserRequest());
  
  ApiService.get('/user/me')
    .then(
      user => {
        dispatch(fetchUserSuccess(user));
      }, error => {
        const { message } = error;
        dispatch(fetchUserFailure(`Fetch user error: ${message}`));
      }
    ).catch(error => {
      dispatch(fetchUserFailure(`Fetch user error: ${error}`));
    });
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};
