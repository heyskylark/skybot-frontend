import * as meActions from 'actions/me';

export const checkUserStatus = () => dispatch => {
  const isAuthenticated = localStorage.getItem('access_token') ? true : false;
  if (isAuthenticated) {
    dispatch(loadInitData());
  }
}

export const loadInitData = () => dispatch => {
  return dispatch(meActions.fetchUser());
};
