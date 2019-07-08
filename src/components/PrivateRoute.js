import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = (props) => {
  // Add your own authentication on the below line.
  const { loginState } = props;
  const { isAuthorized } = loginState;
  const rest = props.rest;
  const Component = props.component;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  loginState: PropTypes.object.isRequired,
  rest: PropTypes.object
};

function mapStateToProps(state) {
  return {
    loginState: state.loginState
  };
}

export default connect(
  mapStateToProps
)(PrivateRoute);