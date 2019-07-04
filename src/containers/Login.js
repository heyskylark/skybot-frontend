import React from 'react'
import { connect } from 'react-redux';
import ApiConstants from 'constants/ApiConstants';
import config from 'config';

class Login extends React.Component {
  render() {
    const loginUri = ApiConstants.loginUrl(config.BACKEND_URI, config.REDIRECT_URI);

    return (
      <div><a href={ loginUri }>Login</a></div>
    )
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);