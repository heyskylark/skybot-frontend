import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import queryString from 'query-string'
import ApiService from 'utils/ApiService';

import * as loginActions from 'actions/login';
import * as meActions from 'actions/me';

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    const { loginState } = this.props;
    const { isAuthenticated } = loginState;
    const values = queryString.parse(this.props.location.search)
    const { token } = values

    if(!isAuthenticated && token) {
      this.state = {
        isFetching: true
      };
    }
  }

  componentDidMount() {
    let isFetching;
    if (this.state) {
      isFetching = this.state;
    }
    const values = queryString.parse(this.props.location.search)
    const { token } = values

    if (isFetching) {
      ApiService.get('/user/me', { headers: {'Authorization': token} })
      .then(user => {
          localStorage.setItem('access_token', token);
          this.props.loginActions.loginSuccess(token);
          this.props.meActions.fetchUserSuccess(user);
          this.setState({ isFetching: false });
        }, error => {
          const { message } = error;
          this.props.loginActions.loginError(`Login error: ${message}`);
          this.setState({ isFetching: false });
        }
      ).catch(error => {
        this.props.loginActions.loginError(`Login error: ${error}`);
        this.setState({ isFetching: false });
      });
    }
  }

  render() {
    let isFetching = false;
    if(this.state) {
      isFetching = this.state.isFetching;
    }
    const { loginState } = this.props;
    const { isAuthenticated } = loginState;

    if (isFetching) {
      return null;
    } else if (!isAuthenticated) {
      return (
        <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
      )
    } else {
      return (
        <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} />
      )
    }
  }
}

Authentication.propTypes = {
  loginState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    loginState: state.loginState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
    meActions: bindActionCreators(meActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);