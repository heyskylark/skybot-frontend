import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import ApiConstants from 'constants/ApiConstants';
import config from 'config';

class Login extends React.Component {
  render() {
    const { loginState } = this.props;
    const { isAuthenticated } = loginState;
    const loginUri = ApiConstants.loginUrl(config.BACKEND_URI, config.REDIRECT_URI);

    if (isAuthenticated) {
      return (
        <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} />
      )
    } else {
      return (
        <div><a href={ loginUri }>Login</a></div>
      )
    }
  }
}

Login.propTypes = {
  loginState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    loginState: state.loginState
  };
}

export default connect(
  mapStateToProps
)(Login);